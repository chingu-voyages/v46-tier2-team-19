import PropTypes from "prop-types";
import { useState, useEffect, useCallback } from "react";
import { RecipeCard } from "../recipe-card";
import { FetchRecipes } from "../../api";
import { Filters } from "../filters";
import { useNavigate, useLocation } from "react-router-dom";

import { LoadingState } from "@/features/ui";

import { Navigate } from "react-router-dom";

export const RecipeList = ({ searchTerm }) => {
  const { data: recipes, isLoading, isError, error } = FetchRecipes(searchTerm);
  const [tagsCollection, setTagsCollection] = useState({});
  const [selectedTag, setSelectedTag] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const filterTypes = [
    "Difficulty",
    "Meal",
    "Occasion",
    "Diet",
    "Cuisine",
    "Cooking Style",
  ];

  const getTagFromUrl = useCallback(() => {
    const queryParams = new URLSearchParams(location.search);
    return queryParams.get("tag");
  }, [location.search]);

  useEffect(() => {
    const tagIdFromUrl = getTagFromUrl();
    if (tagIdFromUrl) {
      const tag = findTagById(tagsCollection, tagIdFromUrl);

      setSelectedTag(tag);
    } else {
      setSelectedTag(null);
    }
  }, [getTagFromUrl, tagsCollection]);

  // Effect to update URL when selectedTag changes
  useEffect(() => {
    if (selectedTag) {
      const searchParams = new URLSearchParams(location.search);
      searchParams.set("tag", selectedTag.id);
      navigate({ search: searchParams.toString() }, { replace: true }); // Update the URL
    }
  }, [selectedTag, navigate, location.search]);

  useEffect(() => {
    if (recipes?.results) {
      const newTagsCollection = recipes.results.reduce((acc, recipe) => {
        recipe.tags.forEach((tag) => {
          if (filterTypes.includes(tag.type)) {
            if (!acc[tag.type]) {
              acc[tag.type] = [];
            }
            let existingTag = acc[tag.type].find((t) => t.id === tag.id);
            if (existingTag) {
              existingTag.count += 1;
            } else {
              acc[tag.type].push({
                count: 1,
                id: tag.id,
                name: tag.name,
                displayName: tag.display_name,
              });
            }
          }
        });
        return acc;
      }, {});
      setTagsCollection(newTagsCollection);
    }
  }, [recipes, filterTypes]);

  const filteredRecipes = selectedTag
    ? recipes.results.filter((recipe) =>
        recipe.tags.some((tag) => tag.id === selectedTag.id),
      )
    : recipes?.results;

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

  return (
    <>
      <Filters tagsCollection={tagsCollection} />
      <div className="grid justify-center grid-cols-1 mx-auto mt-5 mb-10 gap-x-10 gap-y-12 justify-items-center md:grid-cols-2 w-fit auto-rows-fr lg:grid-cols-3">
        {filteredRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} {...recipe} />
        ))}
      </div>
    </>
  );
};

RecipeList.propTypes = {
  searchTerm: PropTypes.string.isRequired,
};

const findTagById = (tagsCollection, tagId) => {
  const tag = Object.values(tagsCollection)
    .flatMap(Object.values)
    .find((tag) => tag.id === tagId);
  return tag || null;
};
