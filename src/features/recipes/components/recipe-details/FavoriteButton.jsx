import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { Button } from "@/features/ui";

export const FavoriteButton = ({ recipe }) => {
  // Function to check if a recipe with a specific ID exists in the array
  const hasFavoriteRecipeWithId = (recipeId) => {
    return favorites.some((recipe) => recipe.id === recipeId);
  };

  const handleFavoriteClick = (recipe) => {
    if (hasFavoriteRecipeWithId(recipe.id)) {
      // Recipe is already a favorite, so remove it.
      const updatedFavorites = favorites.filter(
        (favRecipe) => favRecipe.id !== recipe.id,
      );
      setFavorites(updatedFavorites);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    } else {
      // Recipe is not a favorite, so add it.
      const updatedFavorites = [...favorites, recipe];
      setFavorites(updatedFavorites);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }
  };

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = localStorage.getItem("favorites");
    if (savedFavorites) {
      // Parse the saved JSON data
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);
  return (
    <div className="grid place-content-center">
      <Button
        variant="secondary"
        size="small"
        onClick={() => handleFavoriteClick(recipe)}
      >
        {hasFavoriteRecipeWithId(recipe.id)
          ? "Remove from Favorites"
          : "Add to Favorites"}
      </Button>
    </div>
  );
};

FavoriteButton.propTypes = {
  recipe: PropTypes.object,
};
