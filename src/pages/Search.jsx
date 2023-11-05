import YumiWithSpoon from "@/assets/brand/yumi-with-spoon/YumiWithSpoon.jsx";
import BellPeppers from "@/assets/brand/bell-peppers/BellPeppers";
import SvgComponent from "@/assets/brand/swooshes/svgWave";
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
      <SvgComponent className="w-full fill-sky-300" />
      <div className="flex flex-col flex-shrink-0 w-full px-4 pt-10 lg:px-20 bg-gradient-Search">
        <Heading level="h2" variant="watermelon" className="text-center">
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
        {searchTerm !== "" ? (
          <RecipeList searchTerm={searchTerm} />
        ) : (
          <FeatureOfTheDay />
        )}
        <div className="absolute z-0 w-full h-full pointer-events-none left-10 bg-colored-balls-top xl:top-28 md:top-16 top-8">
          {/* Yellow Ball 1 */}
          <div className="w-[18px] h-[18px] md:w-[48px] md:h-[48px] md:left-[15%] md:top-[10%] 2xl:left-[30%] xl:w-[56.56px] xl:h-[56.56px]  2xl:w-[62px] 2xl:h-[62px] bg-YellowBall bg-cover relative  rounded-full left-[13%] top-[8%] " />
          {/* Orange Ball */}
          <div className="w-[12px] h-[12px] md:w-[34.09px] md:h-[34.09px]  xl:w-[44.44px] xl:h-[44.44px]  md:top-[5%] md:left-[40%] 2xl:left-[56%]  bg-OrangeBall bg-cover rounded-full relative left-[58%]  top-[8%]   " />
          {/* Green Ball */}
          <div className="w-[12px] h-[12px] md:w-[34.09px] md:h-[34.09px]  xl:w-[44.44px] xl:h-[44.44px]  md:top-[5%] md:left-[80%] 2xl:left-[70%]  bg-GreenBall bg-cover rounded-full relative left-[8%]  top-[10%]   " />
        </div>
        <div className="absolute z-0 w-full h-full pointer-events-none bg-colored-balls-top xl:top-[40%] md:top-[40%] top-[48%]">
          {/* Yellow Ball 2 */}
          <div className="w-[24px] h-[24px] md:w-[48px] md:h-[48px] md:left-[4%] md:top-[56%] 2xl:left-[-2%] xl:w-[56.56px] xl:h-[56.56px]  2xl:w-[62px] 2xl:h-[62px] bg-YellowBall bg-cover relative  rounded-full left-[3%] top-[12%] " />
          {/* Green Ball 2 */}
          <div className="w-[12px] h-[12px] md:w-[34.09px] md:h-[34.09px]  xl:w-[44.44px] xl:h-[44.44px]  md:top-[10%] md:left-[50%] 2xl:left-[56%]  bg-GreenBall bg-cover rounded-full relative left-[78%]  top-[33%]   " />
        </div>
      </div>
    </div>
  );
};

export default Search;
