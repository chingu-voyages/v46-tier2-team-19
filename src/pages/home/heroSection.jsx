import { Icon } from "@/features/ui/Icon";
import Yumi from "../../assets/brand/Yumi.png";

import SvgComponent from "./svgWave";

export const HeroSection = () => {
  const handleDragStart = (event) => {
    event.preventDefault();
    return false;
  };

  return (
    <section className="hero-section select-none relative ">
      <div className="hero-wrapper w-full flex flex-col lg:flex-row justify-between ">
        <div className="hero-content  xl:px-32 xl:pt-32  md:px-12 md:pt-[66px] pt-24 px-4">
          <h1 className=" text-[72px]   md:text-[128px]  text-transparent  bg-clip-text bg-gradient-sky-diagonal ">
            Hungry?{" "}
          </h1>
          <h2 className="  text-transparent   text-4xl md:text-[64px] leading-normal  bg-clip-text bg-gradient-watermelon-diagonal  ">
            YumYumYes!
          </h2>

          <p className="font-['Rasa'] xl:leading-8 xl:max-w-[507px] md:max-w-[360px] md:text-[26px] my-6 text-black text-xl font-medium">
            {
              "Welcome to YumYumYes, your gateway to delicious recipes and culinary inspiration! Let's embark on a flavorful journey together!"
            }
          </p>

          <button className="flex md:text-[28px] items-center justify-evenly text-white xl:mt-12 md:h-[76px] md:w-[300px] text-[22px] font-bold mb-7 w-64 h-[65px]  bg-gradient-tangerine-diagonal rounded-[100px]">
            Start Exploring <Icon name="right-arrow" className="text-4xl" />
          </button>
        </div>
        {/* /Hero-Content */}

        <div className="hero-yumi flex  xl:justify-start  md:justify-center justify-center    flex-grow items-end">
          <img
            src={Yumi}
            alt="Yumi Character"
            className="w-72 md:w-72  xl:w-[496px]  xl:mb-[-60px] xl:static md:absolute md:right-8 md:mb-[-40px]   mb-[-25px]"
            onDragStart={handleDragStart}
          />
        </div>
        {/* Hero-Yumi */}
      </div>
      {/* Hero-Wrapper */}

      <div className=" relative">
        <SvgComponent />
      </div>

      <div className=" bg colored-balls absolute  xl:top-28 md:top-16 top-8 right-0  ">
        <div className="w-[30px] h-[30px] xl:w-[44.44px] xl:h-[44.44px] bg-RedBall bg-cover rounded-full relative xl:right-[212px]  md:right-[116px] right-[72px] "></div>
        <div className="w-[38px]  h-[38px]  xl:w-[56.56px] xl:h-[56.56px]  bg-YellowBall bg-cover relative top-[40px] md:top-14 md:right-11 right-6  xl:top-28 xl:right-24 rounded-full"></div>
        <div className="w-[25px] h-[25px] xl:w-[37.23px] xl:h-[37.23px] bg-OrangeBall bg-cover rounded-full relative top-[100px]  right-20  xl:right-28 xl:top-64  "></div>
      </div>
    </section>
  );
};
