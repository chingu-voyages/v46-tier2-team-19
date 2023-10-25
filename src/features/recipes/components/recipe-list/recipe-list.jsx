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
    <div className="flex justify-center">
      <div className="grid grid-cols-1 mx-auto mt-10 mb-4 gap-7 lg:grid-cols-3">
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
