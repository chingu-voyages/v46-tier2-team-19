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
          const recipeTags = recipe.tags || [];
          const hasMatchingTag = recipeTags.some((tag) =>
            selectedTags.some((selectedTag) => selectedTag.id === tag.id),
          );

          return hasMatchingTag;
        })
      : recipes?.results;

  const displayedTags = useMemo(() => {
    const filteredTags = {};

    // Create a set of tag IDs present in the filtered recipes
    const filteredTagIds = new Set(
      (filteredRecipes || []).flatMap((recipe) =>
        (recipe.tags || []).map((recipeTag) => recipeTag.id).filter(Boolean),
      ),
    );

    // Iterate over the types of tags and filter them based on the selected tags and filtered recipes
    Object.keys(tagsCollection).forEach((type) => {
      filteredTags[type] = tagsCollection[type].filter(
        (tag) =>
          filteredTagIds.has(tag.id) ||
          selectedTags.some((selectedTag) => selectedTag.id === tag.id),
      );
    });

    // Remove the tag from the second type if it has already been added to the first type
    const otherTypes = Object.keys(filteredTags).filter((t) => t !== t.type);
    otherTypes.forEach((otherType) => {
      const index = filteredTags[otherType].findIndex(
        (tag) => tag.id === tag.id,
      );
      if (index !== -1) {
        filteredTags[otherType].splice(index, 1);
      }
    });

    return filteredTags;
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
    return <Navigate to="no-found-page" replace={true} />;
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
      <div className="flex flex-wrap items-center justify-between lg:px-10">
        <div className="flex items-center gap-x-4">
          <Heading level="h3" variant="tangerine" className="capitalize">
            {searchTerm}
          </Heading>
          <Heading level="h4" variant="tangerine" className="capitalize">
            {`${filteredRecipes.length} recipes`}
          </Heading>
        </div>
        <button
          className="flex items-center px-4 font-bold text-center rounded-full shadow-lg bg-gradient-tangerine-diagonal"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>
            {isOpen ? (
              <BiMinus className="text-watermelon-50" />
            ) : (
              <BiPlus className="text-watermelon-50" />
            )}
          </span>
          <p className="text-xl tracking-widest text-watermelon-50">refine</p>
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
