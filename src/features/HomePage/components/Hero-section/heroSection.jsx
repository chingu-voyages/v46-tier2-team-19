import YumiWithSpoon from "@/assets/brand/yumi-with-spoon/YumiWithSpoon.jsx";
import SvgComponent from "@/assets/HomePage/svgWave";
import { welcome } from "@/constants";
import { Heading, Button, Icon } from "@/features/ui";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  const handleDragStart = (event) => {
    event.preventDefault();
    return false;
  };

  return (
    // Comment
    <section className="hero-section select-none relative w-full ">
      <div className="hero-wrapper w-full flex flex-col md:flex-row justify-between ">
        <div className="hero-content px-4 pt-24 md:px-12  md:pt-[66px] md:w-[60%] lg:w-[50%] xl:px-16 lg:pt-32">
          <Heading
            level="h1"
            variant="sky"
            className="sm:text-[5.5rem] md:text-9xl md:leading-tight w-fit"
          >
            Hungry?
          </Heading>
          <Heading level="h2" variant="watermelon">
            YumYumYes!
          </Heading>

          <p className="font-['Rasa'] xl:leading-8 xl:max-w-[507px] md:max-w-[360px] md:text-[26px] my-6 text-black text-xl font-medium">
            {welcome}
          </p>

          <Link to="/search">
            <Button
              variant="primary"
              className="flex md:text-[28px] items-center justify-evenly text-white xl:mt-12 md:h-[76px] md:w-[300px] text-[22px] font-bold mb-7 w-64 h-[65px]  bg-gradient-tangerine-diagonal rounded-[100px] relative z-10"
            >
              Start Exploring <Icon name="right-arrow" />
            </Button>
          </Link>
        </div>
        {/* /Hero-Content */}

        <div className="hero-yumi flex items-end md:w-[40%] md:mr-4 lg:w-[50%] justify-center lg:justify-start">
          <YumiWithSpoon
            resolution="480"
            alt="Yumi Character"
            className="mb-[-40px] sm:mb-[-50px] w-72 md:mb-[-60px] md:w-72 xl:mb-[-90px] 2xl:mb-[-120px] lg:w-[396px] 2xl:w-[496px]"
            onDragStart={handleDragStart}
          />
        </div>
        {/* Hero-Yumi */}
      </div>
      {/* Hero-Wrapper */}

      <div className=" relative">
        <SvgComponent />
      </div>

      <div className=" bg colored-balls absolute pointer-events-none right-0 top-8 h-full w-full  md:top-16 xl:top-28  ">
        <div className="w-[30px] h-[30px] xl:w-[44.44px] xl:h-[44.44px] bg-RedBall bg-cover rounded-full relative left-[73%] top-[1%] md:left-[80%] md:top-[-3%]   "></div>
        <div className="w-[38px]  h-[38px]  xl:w-[56.56px] xl:h-[56.56px]  bg-YellowBall bg-cover relative rounded-full left-[87%] top-[6%] 2xl:top-[12%] "></div>
        <div className="w-[25px] h-[25px] xl:w-[37.23px] xl:h-[37.23px] bg-OrangeBall bg-cover rounded-full relative left-[80%] top-[12%] md:top-[16%] 2xl:top-[37%] 2xl:left-[87%]  "></div>
      </div>
    </section>
  );
};
