import { useEffect, useState } from "react";
import { Button, Heading } from "@/features/ui";
import { RecipeCard } from "@/features/recipes/components/recipe-card";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = localStorage.getItem("favorites");
    if (savedFavorites) {
      // Parse the saved JSON data
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  return (
    <>
      <Heading level="h1" variant="tangerine" className="px-10 pt-10">
        Favorite Recipes
      </Heading>

      <div className="grid place-content-center">
        <Button
          variant="secondary"
          size="small"
          onClick={() => {
            localStorage.removeItem("favorites");
            setFavorites([]);
          }}
        >
          {favorites.length > 0
            ? `Clear Favorites ${
                favorites.length > 0 && `(${favorites.length})`
              }`
            : "No Favorites Saved Yet"}
        </Button>
      </div>

      <div className="grid justify-center grid-cols-1 mx-auto mt-5 mb-10 gap-x-10 gap-y-12 justify-items-center md:grid-cols-2 w-fit auto-rows-fr lg:grid-cols-3">
        {favorites.map((recipeId) => (
          <RecipeCard key={recipeId} {...recipeId} />
        ))}
      </div>
    </>
  );
};

export default Favorites;
