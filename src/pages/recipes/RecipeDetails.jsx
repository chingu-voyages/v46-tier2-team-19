import PropTypes from "prop-types";
import { RecipeCard } from "@/features/recipes/components/recipe-card";
import { FetchRecipeById } from "@/features/recipes/api";
export const RecipeDetails = ({ id }) => {
  console.log({ id });
  const { data, isLoading, isError, error } = FetchRecipeById(id);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }
  const results = data?.results || [];
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 mx-auto mt-10 mb-4 gap-7 lg:grid-cols-3">
        {results.map((recipe) => (
          <RecipeCard key={recipe.id} {...recipe} />
        ))}
      </div>
    </div>
  );
};

RecipeDetails.propTypes = {
  id: PropTypes.string.isRequired,
};

export default RecipeDetails;
