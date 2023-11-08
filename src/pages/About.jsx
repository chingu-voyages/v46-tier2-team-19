import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { Heading } from "@/features/ui";
import SvgComponent from "@/assets/brand/swooshes/svgWave";
import { team } from "@/constants";
import usePageTitle from "../hooks/usePageTitle";
import ChinguRectangle from "../assets/about/chingu-rectangle.png";
import Yumi_1 from "../assets/about/yumi-standing-with-orange-apron-holding-fruit-basket.png";
import Yumi_2 from "../assets/about/yumi-with-blue-apron-holding-brown-salad-bowl.png";

const About = () => {
  usePageTitle("About");

  return (
    <div className="bg-gradient-watermelon-diagonal">
      <Heading
        level="h1"
        variant="tangerine"
        className="px-10 pt-10 text-center text-white text-no-stroke"
      >
        About Chingu
      </Heading>

      {/* START Project section */}
      <section className="relative px-10 pb-10 xl:pb-20" id="project">
        <img
          className="w-1/2 mb-6 mx-auto"
          src={ChinguRectangle}
          alt="Chingu logo"
        />

        <div className="pb-10 text-slate-100">
          <img
            className="float-right"
            src={Yumi_1}
            alt="Yumi standing, wearing apron and holding fruit basket"
          />
          <p className="mb-4">
            We developed a unique web app with a distinctive brand and a
            whimsical, animated design. YumYumYes! is intended to make recipe
            browsing fun! Colorful mascots Yumi and Chef Carrots welcome
            visitors to our pages, and delightful visual motifs including text
            gradients, 3d colored balls, dashed lines and gentle curves are
            intended to make the app feel more alive and engaging.
          </p>

          <>
            <p className="mb-4">
              YumYumYes! allows users to search for recipes by ingredient and
              filter by useful tags such as difficulty, occasion, etc. The app
              also allows users to save recipes to their favorites list, and to
              view their favorites list at any time.
            </p>
            <p className="mb-4">
              The app is built as a fully responsive web app compatible with all
              modern web browsers, both mobile and desktop. We&apos;ve taken
              care to make it intuitive for all users, and accessible to users
              with different abilities.
            </p>
          </>
          <span className="clear-both"></span>
        </div>

        {/* Display top of wave between sections */}
        <SvgComponent className="absolute -bottom-1 left-0 -scale-x-100 fill-[#FFC945]" />
      </section>
      {/* END Project section */}

      {/* START Team section */}
      <section className="relative pt-6 bg-slate-100" id="team">
        <Heading
          level="h2"
          variant="tangerine"
          className="text-right px-10 pt-24 sm:pt-48 sm:text-center lg:pt-32 lg:text-right"
        >
          Meet the YumYumTeam!
        </Heading>

        <p className="text-right px-10 pb-10 sm:text-center lg:text-right lg:pr-14">
          These are the exceptional team members that made YumYumYes! possible.
        </p>

        <div className="grid gap-x-20 md:grid-cols-2 xl:grid-cols-3">
          {team.map(({ name, role, summary, image, socials }, index) => (
            <article
              className="relative group px-10 py-14 first:pt-0 md:pt-0"
              key={name}
            >
              <Heading level="h3" variant="watermelon">
                {name}
              </Heading>
              <Heading
                level="h4"
                variant="lava"
                className="font-display font-bold text-2xl text-lava-500 -mt-2 mb-3"
              >
                {role}
              </Heading>

              <div className="relative">
                <div className="float-right ml-4">
                  <img
                    className="rounded-full border-4 w-[130px] h-[130px] object-cover border-sky-200 transition duration-300 origin-bottom group-hover:scale-125 group-hover:rotate-3"
                    src={image}
                    alt={name}
                  />
                  <article className="flex justify-center gap-4 text-4xl text-lava-800 mt-2">
                    <a
                      className="transition ease-in-out duration-300 origin-bottom hover:text-lava-900 hover:scale-110"
                      href={socials[0].url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaGithubSquare />
                    </a>
                    <a
                      className="transition ease-in-out duration-300 origin-bottom hover:text-lava-900 hover:scale-110"
                      href={socials[1].url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaLinkedin />
                    </a>
                  </article>
                </div>
                <p className="z-10">{summary}</p>
                <span className="clear-both"></span>
              </div>

              {
                // Display top of wave
                // but don't display top of wave after last team member
                index !== team.length - 1 && (
                  <SvgComponent className="absolute -bottom-1 left-0 md:hidden fill-[#FFC945]" />
                )
              }

              {
                // Display bottom of wave
                // but don't display bottom of wave before first team member
                index !== 0 && (
                  <SvgComponent className="absolute -top-1 left-0 rotate-180 md:hidden fill-[#FFC945]" />
                )
              }
            </article>
          ))}
        </div>

        {/* Display bottom of wave in between sections */}
        <div className="absolute -top-1 left-0 w-full">
          <div className="bg-[#FFC945] h-[100px]"></div>
          <SvgComponent className="-mt-1 rotate-180 fill-[#FFC945]" />
        </div>

        {/* Display Yumi_2 image between sections */}
        <img
          className="absolute -top-1 left-6 w-1/3 max-w-[200px] lg:max-w-[300px]"
          src={Yumi_2}
          alt="Yumi wearing blue apron holding brown salad bowl"
        />
      </section>
      {/* END Team section */}
    </div>
  );
};

export default About;
