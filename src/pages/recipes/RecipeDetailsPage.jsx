import RecipeDetails from "./RecipeDetails";
import { useLocation } from "react-router-dom";
import { Heading } from "@/features/ui";

const RecipesDetailPage = () => {
  const path = useLocation().pathname;
  const id = path.split("/").slice(-1);
  return (
    <div className="p-10">
      <Heading level="h3" variant="tangerine">
        Recipes Detail Page
      </Heading>
      {id && <RecipeDetails id={id} />}
      {!id && <p>No id provided.</p>}
    </div>
  );
};

export default RecipesDetailPage;
