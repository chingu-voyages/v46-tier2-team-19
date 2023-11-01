import YumiWithSpoon from "@/assets/brand/yumi-with-spoon/YumiWithSpoon.jsx";
import BellPeppers from "@/assets/brand/bell-peppers/BellPeppers";
import SvgComponent from "@/assets/HomePage/svgWave";
import { RecipeList, FeatureOfTheDay } from "@/features/recipes";
import { Heading, SearchBox } from "@/features/ui";
import debounce from "lodash/debounce";
import { useSearchParams } from "react-router-dom";

const Search = () => {
  const [search, setSearch] = useSearchParams();
  const searchTerm = search.get("q") || "";
  const debouncedSetSearchParams = debounce(setSearch, 300);
  const handleSearch = (newSearchTerm) => {
    debouncedSetSearchParams({ q: newSearchTerm });
  };

  const handleDragStart = (event) => {
    event.preventDefault();
    return false;
  };

  return (
    <div className="flex flex-col items-center flex-shrink-0 w-full">
      <FeatureOfTheDay />
      <SvgComponent className="w-full fill-sky-300" />
      <div className="flex flex-col flex-shrink-0 w-full px-4 pt-10 lg:px-20 bg-gradient-Search">
        <Heading
          level="h2"
          variant="watermelon"
          className="font-bold text-center text-shadow text-stoke"
        >
          YumYum Time!!
        </Heading>
        <div className="flex flex-wrap mx-auto my-5 gap-y-5 justify-evenly lg:justify-around">
          <div className="flex items-center w-1/3 lg:w-1/4">
            <BellPeppers resolution="360" alt="bell-peppers" />
          </div>
          <div className="flex flex-col items-center justify-center order-last lg:order-1">
            <p className="text-2xl font-bold tracking-tight text-center break-words lg:w-2/3 font-kalam lava-text-gradient">
              Add Ingredients Here and We Will Do Our Magic!
            </p>
            <div className="w-full mx-auto my-4">
              <SearchBox searchTerm={searchTerm} onSearch={handleSearch} />
            </div>
          </div>
          <div className="flex items-center justify-center w-1/3 lg:w-1/4 hero-yumi lg:order-last lg:justify-start">
            <YumiWithSpoon
              resolution="480"
              alt="Yumi Character"
              onDragStart={handleDragStart}
            />
          </div>
        </div>

        <RecipeList searchTerm={searchTerm} />
      </div>
    </div>
  );
};

export default Search;
