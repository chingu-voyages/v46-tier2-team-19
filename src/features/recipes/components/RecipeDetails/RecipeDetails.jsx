import PropTypes from "prop-types";
import { Heading } from "@/features/ui/Heading";

export const RecipeDetails = ({ recipe }) => {
  console.log(recipe);
  const recipeDetails = Object.keys(recipe)
    .sort()
    .map((key) => {
      let value = recipe[key];
      if (typeof value === "string" || typeof value === "number") {
        return (
          <div key={key} className="w-full">
            <strong>{key}: </strong>
            {value}
          </div>
        );
      }
      return (
        <div key={key} className="w-full">
          <strong>{key}: </strong>
          {JSON.stringify(value).slice(0, 80)}
        </div>
      );
    });

  return (
    <div className="p-10">
      <Heading level="h1" variant="tangerine">
        {recipe.name}
      </Heading>
      <img
        src={recipe.thumbnail_url}
        alt={recipe.name}
        className="w-[400px] h-[400px] object-cover rounded-full"
      />
      {recipeDetails}
    </div>
  );
};

RecipeDetails.propTypes = {
  recipe: PropTypes.object,
};

export default RecipeDetails;
