import { useParams } from "react-router-dom";
import { useSessionStorage } from "@/features/recipes/hooks";
import { Heading, LoadingState } from "@/features/ui";
import { FetchRecipeById } from "@/features/recipes/api";
import RecipeDetails from "@/features/recipes/components/recipe-details/RecipeDetails";

const RecipesDetailPage = () => {
  let { recipeId } = useParams();

  const [cachedRecipesList] = useSessionStorage("recipes", []);
  console.log(cachedRecipesList);

  // Attempt to retrieve recipe from session storage.
  const cachedRecipe = cachedRecipesList.results?.find(
    (recipe) => recipe.id === recipeId,
  );

  let recipe = {};
  let query = null;

  if (cachedRecipe) recipe = cachedRecipe;
  else query = `id:${recipeId}`;

  const { data, isLoading, isError, error } = FetchRecipeById(query);

  if (data) recipe = data.results[0];

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

  return <RecipeDetails recipe={recipe} />;
};

export default RecipesDetailPage;
