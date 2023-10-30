import { Yumi, BellPeppers } from "@/assets";
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
    <div className="flex flex-col items-center w-full bg-[#FFF2BC] flex-shrink-0">
      <FeatureOfTheDay />
      <SvgComponent className="fill-sky-300" />
      <div className="flex flex-col flex-shrink-0 w-full lg:relative bg-gradient-Search">
        <Heading
          level="h2"
          variant="watermelon"
          className="font-bold text-center lg:absolute lg:inset-x-5"
        >
          YumYum Time!!
        </Heading>
        <div className="flex flex-wrap items-center justify-center mx-auto md:gap-x-5 lg:justify-between lg:gap-x-5">
          <img
            src={BellPeppers}
            alt="Balls Peppers"
            className="flex-shrink-0 h-32 max-w-xs lg:h-72"
          />
          <div className="flex flex-col items-center justify-center order-last lg:order-1 lg:justify-between">
            <p className="max-w-xs text-2xl font-bold tracking-tight text-center break-words font-kalam lava-text-gradient">
              Add Ingredients Here and We Will Do Our Magic!
            </p>
            <div className="w-full max-w-xs mx-auto my-4 ">
              <SearchBox searchTerm={searchTerm} onSearch={handleSearch} />
            </div>
          </div>
          <img
            src={Yumi}
            alt="Yumi Character"
            className="flex-shrink-0 order-2 h-32 max-w-sm md:order-last lg:order-last lg:h-96"
            onDragStart={handleDragStart}
          />
        </div>

        <div className="">
          <RecipeList searchTerm={searchTerm} />
        </div>
      </div>
    </div>
  );
};

export default Search;
