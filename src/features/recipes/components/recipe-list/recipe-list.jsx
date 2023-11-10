// eslint-disable-next-line react-hooks/exhaustive-deps

import PropTypes from "prop-types";
import { useState, useEffect, useMemo, useRef } from "react";
import { RecipeCard } from "../recipe-card";
import { FetchRecipes } from "../../api";
import { Filters } from "../filters";
import { LoadingState, Heading } from "@/features/ui";
import { Navigate } from "react-router-dom";
import { BiPlus, BiMinus } from "react-icons/bi";
const allowedTagTypes = [
  "difficulty",
  "meal",
  "occasion",
  "dietary",
  "cuisine",
  "cooking_style",
];
export const RecipeList = ({ searchTerm }) => {
  const prevTagsCollectionRef = useRef();
  const { data: recipes, isLoading, isError, error } = FetchRecipes(searchTerm);
  console.log(recipes);
  const [selectedTags, setSelectedTags] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  // Initial tags collection state, derived from recipes
  const [tagsCollection, setTagsCollection] = useState({
    difficulty: [],
    meal: [],
    occasion: [],
    dietary: [],
    cuisine: [],
    cooking_style: [],
  });

  // This useEffect is for setting the initial tagsCollection when recipes are fetched
  useEffect(() => {
    if (recipes?.results) {
      const newTagsCollection = recipes.results.reduce((acc, recipe) => {
        recipe.tags.forEach((tag) => {
          if (allowedTagTypes.includes(tag.type)) {
            if (!acc[tag.type]) {
              acc[tag.type] = [];
            }
            if (!acc[tag.type].some((t) => t.id === tag.id)) {
              acc[tag.type].push(tag);
            }
          }
        });
        return acc;
      }, []);

      // Initialize the state with the allowed tag types only
      const initializedTagsCollection = allowedTagTypes.reduce((acc, type) => {
        acc[type] = newTagsCollection[type] || [];
        return acc;
      }, {});

      // Check if the initializedTagsCollection is different from the current tagsCollection
      if (
        JSON.stringify(prevTagsCollectionRef.current) !==
        JSON.stringify(initializedTagsCollection)
      ) {
        setTagsCollection(initializedTagsCollection);
        prevTagsCollectionRef.current = initializedTagsCollection;
      }
    }
  }, [recipes]);

  const filteredRecipes =
    selectedTags.length > 0
      ? recipes.results.filter((recipe) => {
          const hasMatchingTag = recipe.tags.some((tag) =>
            selectedTags.some((selectedTag) => {
              const match = selectedTag.id === tag.id;

              return match;
            }),
          );

          return hasMatchingTag;
        })
      : recipes?.results;

  const displayedTags = useMemo(() => {
    let filteredTagsByType = { ...tagsCollection };

    // If there are selected tags, filter the tagsCollection to only include tags that are present in the filtered recipes
    if (selectedTags.length > 0) {
      filteredTagsByType = Object.keys(tagsCollection).reduce((acc, type) => {
        acc[type] = tagsCollection[type].filter((tag) =>
          filteredRecipes.some((recipe) =>
            recipe.tags.some((recipeTag) => recipeTag.id === tag.id),
          ),
        );
        return acc;
      }, {});
    }

    return filteredTagsByType;
  }, [selectedTags, filteredRecipes, tagsCollection]);

  if (isLoading) {
    return <LoadingState />;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  if (
    !recipes ||
    !Array.isArray(recipes.results) ||
    recipes.results.length === 0
  ) {
    console.log(!recipes);
    console.log(!Array.isArray(recipes.results));
    console.log(recipes.results.length === 0);
    return <Navigate to="no-found-page" />;
  }

  const handleTagClick = (clickedTag) => {
    setSelectedTags((currentSelectedTags) => {
      // Check if the tag is already selected
      const isSelected = currentSelectedTags.some(
        (tag) => tag.id === clickedTag.id,
      );
      if (isSelected) {
        // If the tag is already selected, remove it from the array
        return currentSelectedTags.filter((tag) => tag.id !== clickedTag.id);
      } else {
        // If the tag is not selected, add it to the array
        return [...currentSelectedTags, clickedTag];
      }
    });
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-4">
          <Heading level="h3" variant="tangerine" className="capitalize">
            {searchTerm}
          </Heading>
          <Heading level="h4" variant="tangerine" className="capitalize">
            {`${filteredRecipes.length} recipes`}
          </Heading>
        </div>
        <button
          className="flex items-center font-bold"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>
            {isOpen ? (
              <BiMinus className="text-tangerine-500" />
            ) : (
              <BiPlus className="text-tangerine-500" />
            )}
          </span>
          <p className="text-xl tracking-wider text-tangerine-500">refine</p>
        </button>
      </div>
      {isOpen && (
        <Filters
          tagsCollection={displayedTags}
          selectedTags={selectedTags}
          onTagSelected={handleTagClick}
        />
      )}
      <div className="grid justify-center grid-cols-1 mx-auto mt-5 mb-10 gap-x-10 gap-y-12 justify-items-center md:grid-cols-2 w-fit auto-rows-fr lg:grid-cols-3">
        {filteredRecipes &&
          filteredRecipes.map((recipe) => (
            <RecipeCard key={`recipe-${recipe.id}`} {...recipe} />
          ))}
      </div>
    </>
  );
};

RecipeList.propTypes = {
  searchTerm: PropTypes.string.isRequired,
};
