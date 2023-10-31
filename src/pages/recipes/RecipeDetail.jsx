import PropTypes from "prop-types";
import { RecipeCard } from "../recipe-card";
import { FetchRecipes } from "../../api";
export const RecipeDetails = ({ searchTerm }) => {
  console.log({ searchTerm });
  const { data, isLoading, isError, error } = FetchRecipes(searchTerm);
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
  searchTerm: PropTypes.string.isRequired,
};