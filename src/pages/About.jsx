import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { Heading } from "@/features/ui";
import SvgComponent from "@/assets/brand/swooshes/svgWave";
import { team } from "@/constants";
import usePageTitle from "../hooks/usePageTitle";
import ChinguRectangle from "../assets/about/chingu-rectangle.png";
import Yumi from "@/assets/about/yumi-with-blue-apron-holding-brown-salad-bowl.png";
import YumiWithBasket from "@/assets/brand/yumi-with-basket/YumiWithBasket";

const About = () => {
  usePageTitle("About");

  return (
    <div className="pt-16 bg-gradient-watermelon-diagonal y3-shadow-md-inner">
      <section className="relative px-10 pb-10 xl:pb-20" id="project">
        <div className="pb-10 text-slate-100 sm:flex justify-center items-center gap-12">
          <div className="max-w-[40rem]">
            <Heading level="h2" variant="tangerine">
              About YumYumYes!
            </Heading>
            <p className="mb-4">
              YumYumYes! is intended to make recipe browsing fun!
            </p>
            <p className="mb-4">
              We developed a unique web app with a distinctive brand and a
              whimsical, animated design. Colorful mascots Yumi and Chef Carrots
              welcome visitors to our pages, and delightful visual motifs
              including text gradients, 3d colored balls, dashed lines and
              gentle curves are intended to make the app feel more alive and
              engaging.
            </p>
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
          </div>
          <div className="flex items-center justify-center">
            <YumiWithBasket className="block w-36 lg:w-64" />
          </div>
        </div>

        {/* Display top of wave between sections */}
        <SvgComponent className="absolute -bottom-1 left-0 -scale-x-100 fill-[#FFC945]" />
      </section>
      {/* END Project section */}

      {/* START Team section */}
      <section
        className="relative bg-slate-100 border-banana border-8 pt-16"
        id="team"
      >
        <Heading
          level="h2"
          variant="tangerine"
          className="px-10 text-right pt-16 sm:pt-36 sm:text-center md:pt-24 lg:pt-36 lg:text-right xl:pt-40"
        >
          Meet the YumYumTeam!
        </Heading>

        <p className="px-10 text-right sm:text-center lg:text-right lg:pr-14">
          These are the exceptional team members that made YumYumYes! possible.
        </p>

        <div className="grid p-10 pb-0 md:pb-10 gap-x-20 md:grid-cols-2 md:gap-16 lg:mt-8 xl:grid-cols-3">
          {team.map(({ name, role, summary, image, socials }, index) => (
            <article
              className="relative group py-14 md:py-0 first:pt-0 md:pt-0 overflow-visible"
              key={name}
            >
              <Heading level="h3" variant="watermelon">
                {name}
              </Heading>
              <Heading
                level="h4"
                variant="lava"
                className="font-display font-bold text-2xl text-lava-500 -mt-2 mb-3 text-no-stroke"
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
                  <SvgComponent className="absolute -bottom-1 left-0 mx-[-2.5rem] md:hidden fill-[#FFC945]" />
                )
              }

              {
                // Display bottom of wave
                // but don't display bottom of wave before first team member
                index !== 0 && (
                  <SvgComponent className="absolute -top-1 left-0 mx-[-2.5rem] rotate-180 md:hidden fill-[#FFC945]" />
                )
              }
            </article>
          ))}
        </div>

        {/* Display bottom of wave in between sections */}
        <div className="absolute -top-2 left-0 w-full">
          <div className="bg-[#FFC945] h-[70px]"></div>
          <SvgComponent className="-mt-1 rotate-180 fill-[#FFC945]" />
        </div>

        {/* Display Yumi_2 image between sections */}
        <img
          className="absolute top-[-1rem] md:top-[-2rem] left-6 w-1/3 max-w-[200px] lg:max-w-[300px]"
          src={Yumi}
          alt="Yumi wearing blue apron holding brown salad bowl"
        />
        <SvgComponent className="fill-banana -mb-1 bg-[#f2f5f9]" />
      </section>
      {/* END Team section */}
      <section className="chingu-section bg-gradient-sky-diagonal group">
        <SvgComponent className="fill-banana rotate-180 mt-[-1px]" />
        <div className="wrapper max-w-[45rem] m-auto p-8 pb-24">
          <Heading level="h2" variant="lava">
            About Chingu
          </Heading>
          <div className="sm:flex gap-16">
            <p>
              {`Chingu is a community of developers who are passionate about
            learning, helping others, and collaborating on projects. It is a
            remote, self-organizing, project-based learning platform. Chingu
            helps you to build your portfolio and network while collaborating on
            real-world projects with remote team members. "Chingus" are
            motivated learners who are self-directed and take responsibility for
            their own learning.`}
            </p>
            <div className="flex justify-center my-8">
              <div className="w-40 h-40 bg-white flex items-center rotate-3 border-4 shadow-xl border-tangerine-300 rounded-xl transition duration-300 origin-bottom group-hover:scale-125 group-hover:rotate-6">
                <img
                  className="w-full"
                  src={ChinguRectangle}
                  alt="Chingu logo"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
