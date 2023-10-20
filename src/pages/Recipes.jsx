import { useState } from "react";
import { RecipeList, FeatureOfTheDay } from "@/features/recipes";
import { SearchBox } from "@/features/ui";
const RecipesPage = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="flex flex-col items-center w-full p-10 bg-earlyDawn-50">
      <FeatureOfTheDay />
      <div className="flex flex-col items-center lg:flex-row">
        <div className="w-40 h-40 m-4 rounded-full bg-watermelon-600" />
        <div className="flex flex-col w-full mx-auto">
          <h2 className="text-center text-watermelon-600">YumYum Time!!</h2>
          <p className="text-xl font-semibold text-center font-kalam text-lava-950">
            Add Ingredients Here and We Will Do Our Magic!
          </p>
          <div className="w-full mx-auto">
            <SearchBox onSearch={(term) => setSearch(term)} />
          </div>
        </div>
        <div className="w-40 h-40 m-4 rounded-full bg-watermelon-600" />
      </div>
      <div className="">
        <RecipeList searchTerm={search} />
      </div>
    </div>
  );
};

export default RecipesPage;
