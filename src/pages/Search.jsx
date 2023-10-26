import { RecipeList, FeatureOfTheDay } from "@/features/recipes";
import { Heading, SearchBox } from "@/features/ui";
import debounce from "lodash-es/debounce";
import { useSearchParams } from "react-router-dom";
const Search = () => {
  const [search, setSearch] = useSearchParams();
  const searchTerm = search.get("q") || "";
  const debouncedSetSearchParams = debounce(setSearch, 300);
  const handleSearch = (newSearchTerm) => {
    debouncedSetSearchParams({ q: newSearchTerm });
  };

  return (
    <div className="flex flex-col items-center w-full p-10 bg-earlyDawn-50">
      <FeatureOfTheDay />
      <div className="flex flex-col items-center lg:flex-row">
        <div className="w-40 h-40 m-4 rounded-full bg-watermelon-600" />
        <div className="flex flex-col w-full mx-auto">
          {/* <h2 className="text-center watermelon-text-gradient">
            YumYum Time!!
          </h2> */}
          <Heading level="h2" variant="watermelon" className="text-center">
            YumYum Time!!
          </Heading>
          <p className="text-xl font-semibold text-center font-kalam text-lava-950">
            Add Ingredients Here and We Will Do Our Magic!
          </p>
          <div className="w-full mx-auto">
            <SearchBox searchTerm={searchTerm} onSearch={handleSearch} />
          </div>
        </div>
        <div className="w-40 h-40 m-4 rounded-full bg-watermelon-600" />
      </div>
      <div className="">
        <RecipeList searchTerm={searchTerm} />
      </div>
    </div>
  );
};

export default Search;
