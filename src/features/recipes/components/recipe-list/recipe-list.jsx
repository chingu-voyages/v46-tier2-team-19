import { UseRecipes } from "../../api";
import { RecipeCard } from "../recipe-card";

export const RecipeList = () => {
  const { data, isLoading, isError, error } = UseRecipes();
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    console.error(error);

    return <p>{error.message}</p>;
  }

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 mx-auto mt-10 mb-4 gap-7 lg:grid-cols-3">
        {data.results.map((recipe) => (
          <RecipeCard key={recipe.id} {...recipe} />
        ))}
      </div>
    </div>
  );
};
