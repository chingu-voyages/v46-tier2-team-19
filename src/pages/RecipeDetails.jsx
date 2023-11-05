import { useParams } from "react-router-dom";
import { useSessionStorage } from "@/features/recipes/hooks";
import { Heading, LoadingState } from "@/features/ui";
import { FetchRecipeDetailsById } from "@/features/recipes/api";
import RecipeDetails from "@/features/recipes/components/recipe-details/RecipeDetails";

const RecipesDetailPage = () => {
  const { recipeId } = useParams();
  const [cachedRecipesList] = useSessionStorage("recipes", []);
  let recipe = null;
  // Attempt to retrieve recipe from session storage.
  if (cachedRecipesList.length > 0) {
    recipe = cachedRecipesList.results.find(
      (result) => result.id === +recipeId,
    );
  }

  // Call API to fetch recipe details if not found in cache.
  const { data, isLoading, isError, error } = recipe
    ? { data: recipe[0], isLoading: false, isError: false, error: null }
    : FetchRecipeDetailsById(recipeId);

  // Quit gracefully if no id is available
  if (!recipeId) {
    return (
      <div className="p-10">
        <Heading level="h1" variant="tangerine">
          No id provided.
        </Heading>
      </div>
    );
  }

  if (isLoading) {
    return <LoadingState />;
  }

  if (isError) {
    return <div>Error: {error}</div>;
  }

  return <RecipeDetails recipe={data} />;
};

export default RecipesDetailPage;
