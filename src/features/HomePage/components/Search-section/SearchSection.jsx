import SvgComponent from "@/assets/HomePage/svgWave";
import { Icon } from "@/features/ui";

import BellPeppers from "@/assets/brand/bell-peppers/BellPeppers.jsx";

export const SearchSection = () => {
  return (
    <section className="Search-Section mt-[-3px] relative   w-full md:bg-[#6DD1E3] md:pb-16 z-10">
      <SvgComponent className="rotate-180 relative bottom-1" />

      <div className="flex flex-col xl:p-32 p-8 gap-6  xl:gap-12  ">
        {/* Search bar and text */}
        <div className="min-w-[279px] flex flex-col justify-center items-center">
          <h2 className="font-kalam font-bold text-2xl xl:text-6xl xl:w-[900px] md:w-[464px] md:text-4xl md:m-8  text-center leading-8  mb-6">
            {"Tell Us Your Ingredients, We'll Show You Magic!"}
          </h2>

          <div className=" flex flex-row  xl:justify-center ">
            <form className="flex w-full md:h-16 rounded-full md:w-[576px] xl:w-[720px] bg-[#F8F7F6]  z-10">
              <input
                type="search"
                id="searchInput"
                placeholder="Onion, Salt, eggs..."
                className="w-full p-2 pl-6  rounded-l-full text-base md:text-xl bg-[#F8F7F6] focus:outline-none h-full placeholder:text-[#666666] text-lava-950 focus:ring-none"
              />
              <button className="px-4 rounded-full w-[88px] bg-gradient-tangerine-diagonal md:h-full  md:w-[121px] flex justify-center items-center ">
                <Icon name="search" className="text-white md:text-3xl" />
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row ">
          <p className="text-xl md:text-[32px] md:w-1/2 xl:mt-7 lg:leading-10">
            {
              "Your ingredients, our creativity. Share what's in your kitchen, and we'll conjure a delectable recipe just for you. Let's cook up some magic together!"
            }
          </p>

          <div className="flex justify-center md:justify-end md:w-1/2 p-2">
            <BellPeppers resolution="360" className="w-[22.5rem]" />
          </div>
        </div>
      </div>

      <div className=" bg-colored-balls-top absolute pointer-events-none xl:top-28 md:top-16 top-8 right-0 w-full h-full z-0  ">
        <div className="w-[12px] h-[12px] md:w-[32px] md:h-[32px] xl:w-[44.44px] xl:h-[44.44px] bg-GreenBall bg-cover rounded-full relative left-[8%] top-[1%]  "></div>
        <div className="w-[12px] h-[12px] md:w-[40px] md:h-[40px] xl:w-[44.44px] xl:h-[44.44px] bg-GreenBall bg-cover rounded-full relative left-[75%] bottom-[3%]   "></div>

        <div className="w-[18px]  h-[18px] md:w-[38px] md:h-[38px]  xl:w-[56.56px] xl:h-[56.56px]  bg-YellowBall bg-cover relative   rounded-full bottom-1 left-[90%] "></div>
        <div className="w-[16px] h-[16px] md:w-[33px] md:h-[33px] xl:w-[37.23px] xl:h-[37.23px] bg-OrangeBall bg-cover rounded-full relative left-[92%] top-[8%]  "></div>
      </div>

      <div className=" bg-colored-balls-bottom pointer-events-none absolute h-full    bottom-10  0 w-full z ">
        {/* Green Ball */}
        <div className="w-[12px] h-[12px] md:w-[34.09px] md:h-[34.09px]  xl:w-[44.44px] xl:h-[44.44px]  md:top-[101%] md:left-[20%] 2xl:left-[35%]  bg-GreenBall bg-cover rounded-full relative left-[20%]  top-[85%]   "></div>

        {/* Yellow Ball 1 */}
        <div className="w-[18px]  h-[18px] md:w-[48px] md:h-[48px]   md:left-[2%] md:top-[85%] 2xl:left-[15%]  xl:w-[56.56px] xl:h-[56.56px]  2xl:w-[62px] 2xl:h-[62px]   bg-YellowBall bg-cover relative  rounded-full left-[33%] top-[92%]  "></div>

        {/* Yellow Ball 2 */}
        <div className="w-[18px]  h-[18px]  md:w-[55.09px] md:h-[55.09px] md:top-[80%]  md:left-[40%] 2xl:left-[55%] xl:w-[56.56px] xl:h-[56.56px] 2xl:w-[71px] 2xl:h-[71px] bg-YellowBall bg-cover relative  rounded-full left-28 bottom-2  hidden md:block  "></div>

        {/* Orange Ball  */}
        <div className="w-[22px] h-[22px] md:w-[44px] md:h-[44px] xl:w-[37.23px] xl:h-[37.23px] 2xl:w-[62.23px] 2xl:h-[62.23px]  md:top-[80%] xl:left-[85%]  md:left-[95%] bg-OrangeBall bg-cover rounded-full relative left-[8%] top-[89%]  "></div>
      </div>
    </section>
  );
};
