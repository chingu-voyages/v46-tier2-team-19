import { useState } from "react";
import { RecipeList } from "@/features/recipes";
import { SearchBox } from "@/features/ui";
const RecipesPage = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="flex flex-col items-center w-full bg-yellow-400">
      <h1>RecipesPage</h1>
      <SearchBox onSearch={(term) => setSearch(term)} />
      <div className="">
        <RecipeList searchTerm={search} />
      </div>
    </div>
  );
};

export default RecipesPage;
