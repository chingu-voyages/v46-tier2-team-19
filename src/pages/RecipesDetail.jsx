import { useParams } from "react-router-dom";
import { useSessionStorage } from "@/features/recipes/hooks";
import { Heading } from "@/features/ui";

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
      {/* <h1 className="text-center">Recipes Detail Page</h1> */}
      <Heading level="h1" variant="lava">
        {recipe.name}
      </Heading>
    </div>
  );
};

export default RecipesDetailPage;
