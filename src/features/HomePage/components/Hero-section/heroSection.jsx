import { BiRightArrowAlt } from "react-icons/bi";
import { Yumi } from "@/assets";
import SvgComponent from "../../../../assets/HomePage/svgWave";
import { welcome } from "@/constants";
import { Heading, Button } from "@/features/ui";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  const handleDragStart = (event) => {
    event.preventDefault();
    return false;
  };

  return (
    // Comment
    <section className="relative w-full select-none hero-section ">
      <div className="flex flex-col justify-between w-full hero-wrapper lg:flex-row ">
        <div className="hero-content   xl:px-32 xl:pt-32  md:px-12 md:pt-[66px] pt-24 px-4">
          <Heading level="h1" variant="sky">
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
              Start Exploring{" "}
              <BiRightArrowAlt className="relative z-10 text-4xl" />
            </Button>
          </Link>
        </div>
        {/* /Hero-Content */}

        <div className="flex items-end justify-center flex-grow hero-yumi xl:justify-start md:justify-center">
          <img
            src={Yumi}
            alt="Yumi Character"
            loading="lazy"
            className="w-72 md:w-72  xl:w-[496px]  xl:mb-[-60px] xl:static md:absolute md:right-8 md:mb-[-40px]   mb-[-25px]"
            onDragStart={handleDragStart}
          />
        </div>
        {/* Hero-Yumi */}
      </div>
      {/* Hero-Wrapper */}

      <div className="relative ">
        <SvgComponent />
      </div>

      <div className="absolute right-0 w-full h-full  bg colored-balls xl:top-28 md:top-16 top-8">
        <div className="w-[30px] h-[30px] xl:w-[44.44px] xl:h-[44.44px] bg-RedBall bg-cover rounded-full relative left-[73%] top-[1%] md:left-[80%] md:top-[-3%]   "></div>
        <div className="w-[38px]  h-[38px]  xl:w-[56.56px] xl:h-[56.56px]  bg-YellowBall bg-cover relative rounded-full left-[87%] top-[6%] 2xl:top-[12%] "></div>
        <div className="w-[25px] h-[25px] xl:w-[37.23px] xl:h-[37.23px] bg-OrangeBall bg-cover rounded-full relative left-[80%] top-[12%] md:top-[16%] 2xl:top-[37%] 2xl:left-[87%]  "></div>
      </div>
    </section>
  );
};
