import PropTypes from "prop-types";
import { RecipeCard } from "../recipe-card";
import { FetchRecipes } from "../../api";

import { LoadingState } from "@/features/ui";

import { Navigate } from "react-router-dom";


export const RecipeList = ({ searchTerm }) => {
  const { data: recipes, isLoading, isError, error } = FetchRecipes(searchTerm);

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
    <div className="grid justify-center grid-cols-1 mx-auto mt-5 mb-10 gap-x-10 gap-y-12 justify-items-center md:grid-cols-2 w-fit auto-rows-fr lg:grid-cols-3">
      {recipes.results.map((recipe) => (
        <RecipeCard key={recipe.id} {...recipe} />
      ))}
    </div>
  );
};

RecipeList.propTypes = {
  searchTerm: PropTypes.string.isRequired,
};
