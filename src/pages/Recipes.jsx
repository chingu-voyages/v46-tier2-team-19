import { RecipeList } from "@/features/recipes";
import { useState } from "react";
const RecipesPage = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    console.log(searchValue);
  };

  return (
    <div className="w-full bg-yellow-400">
      <h1>RecipesPage</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          id="q"
          name="q"
          placeholder="Enter a ingredient..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <div className="">
        <RecipeList />
      </div>
    </div>
  );
};

export default RecipesPage;
