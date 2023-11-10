// eslint-disable-next-line react-hooks/exhaustive-deps

import PropTypes from "prop-types";
import { useState, useEffect, useMemo } from "react";
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
  const { data: recipes, isLoading, isError, error } = FetchRecipes(searchTerm);
  const [selectedTags, setSelectedTags] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  // State to store the tags available in the fetched recipes
  const [tagsCollection, setTagsCollection] = useState(() =>
    allowedTagTypes.reduce((acc, type) => ({ ...acc, [type]: [] }), {}),
  );

  // This effect will run once on initial render to initialize tagsCollection
  useEffect(() => {
    if (recipes && recipes.results) {
      const newTagsCollection = allowedTagTypes.reduce((collection, type) => {
        collection[type] = recipes.results
          .flatMap((recipe) => recipe.tags || [])
          .filter((tag) => tag && tag.type === type)
          .reduce((uniqueTags, tag) => {
            if (!uniqueTags.some((uniqueTag) => uniqueTag.id === tag.id)) {
              uniqueTags.push(tag);
            }
            return uniqueTags;
          }, []);

        return collection;
      }, {});

      setTagsCollection(newTagsCollection);
    }
  }, [recipes]); // Depends on 'recipes' to re-run if recipes change

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
