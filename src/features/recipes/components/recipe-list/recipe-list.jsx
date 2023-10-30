import PropTypes from "prop-types";
import { RecipeCard } from "../recipe-card";
import { FetchRecipes } from "../../api";

export const RecipeList = ({ searchTerm }) => {
  const { data: recipes, isLoading, isError, error } = FetchRecipes(searchTerm);
  if (isLoading) {
    return <div>Loading...</div>;
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
    console.log(Array.isArray(recipes.results));
    return <div>No recipes found</div>;
  }

  return (
    <div className="flex justify-center px-4 lg:px-20">
      <div className="grid grid-cols-1 grid-cols-2 gap-10 mb-12 auto-rows-fr md: lg:grid-cols-3">
        {recipes.results.map((recipe) => (
          <RecipeCard key={recipe.id} {...recipe} />
        ))}
      </div>
    </div>
  );
};

RecipeList.propTypes = {
  searchTerm: PropTypes.string.isRequired,
};
