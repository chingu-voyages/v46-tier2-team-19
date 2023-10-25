import { useParams } from "react-router-dom";
import { useSessionStorage } from "@/features/recipes/hooks";

const RecipesDetailPage = () => {
  let { recipeId } = useParams();
  console.log(recipeId);
  const [recipes] = useSessionStorage("recipes", []);
  console.log(recipes);

  const recipe = recipes.results?.find(
    (recipe) => recipe.canonical_id === `recipe:${recipeId}`,
  );

  return (
    <div className="p-10">
      <h1 className="text-center">{recipe.name}</h1>
    </div>
  );
};

export default RecipesDetailPage;
