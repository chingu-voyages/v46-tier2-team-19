import { Yumi, BellPeppers } from "@/assets";
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
    <div className="flex flex-col items-center w-full bg-earlyDawn-50">
      <FeatureOfTheDay />
      <div className="flex flex-col w-full bg-gradient-Top-recipes">
        <div className="lg:relative ">
          <div className="flex justify-between px-4 py-6">
            <img
              src={BellPeppers}
              className="w-40 md:w-[310px] 2xl:w-[400px] "
              alt="Balls Peppers"
            />
            <img
              src={Yumi}
              alt="Yumi Character"
              className="w-40 md:w-96  xl:w-[496px]"
              onDragStart={handleDragStart}
            />
          </div>
          <div className="flex flex-col items-center gap-y-8 lg:absolute inset-1/3 top-12 justify-evenly">
            <Heading
              level="h2"
              variant="watermelon"
              className="font-bold text-center text-shadow"
            >
              YumYum Time!!
            </Heading>
            <p className="max-w-sm px-4 text-2xl font-bold tracking-tight text-center break-words max-h-28 font-kalam lava-text-gradient">
              Add Ingredients Here and We Will Do Our Magic!
            </p>
            <SearchBox searchTerm={searchTerm} onSearch={handleSearch} />
          </div>
        </div>
        <div className="">
          <RecipeList searchTerm={searchTerm} />
        </div>
      </div>
    </div>
  );
};

export default Search;
