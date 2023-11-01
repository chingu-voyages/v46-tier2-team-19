import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { Heading } from "@/features/ui";
import homepage from "../assets/about/homepage.png";
import { team } from "@/constants";
import SvgComponent from "@/assets/HomePage/svgWave";

const About = () => {
  return (
    <div>
      <Heading level="h1" variant="tangerine" className="px-10 pt-10">
        About
      </Heading>

      {/* START Project section */}
      <section className="relative px-10 pb-10 xl:pb-20" id="project">
        <Heading level="h2" variant="watermelon">
          This Project
        </Heading>

        <div className="grid md:grid-cols-2 pb-10">
          <p className="mb-4">
            YumYumYes! is a unique web app designed with a distinctive brand and
            whimsical animated visuals, featuring mascots Yumi and Chef Carrots
            to create a fun recipe browsing experience. It offers users the
            ability to search for recipes by ingredient, apply filters based on
            tags like difficulty and occasion, and save recipes to their
            favorites list for convenient access. This fully responsive web app
            is compatible with modern web browsers on both mobile and desktop
            devices, designed with user-friendliness and accessibility in mind,
            catering to a diverse range of users.
          </p>
          <img
            src={homepage}
            alt="YumYumYes! hompage"
            className="rounded-lg md:mx-6 lg:max-w-sm"
          />
        </div>

        {/* Display top of wave between sections */}
        <SvgComponent className="absolute -bottom-1 left-0 fill-[#FFC945]" />
      </section>
      {/* END Project section */}

      {/* START Team section */}
      <section className="relative bg-gradient-sky-diagonal pt-6" id="team">
        <Heading
          level="h2"
          variant="watermelon"
          className="px-10 pt-10 md:pt-14 lg:pt-20 xl:pt-24 text-white"
        >
          Our Team
        </Heading>

        <div className="grid gap-x-20 md:grid-cols-2 xl:grid-cols-3">
          {team.map(({ name, role, summary, image, socials }, index) => (
            <article
              className="relative group px-10 py-14 first:pt-0 md:pt-0"
              key={name}
            >
              <Heading level="h3" variant="lava">
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
                    className="rounded-full border-4 border-sky-200 transition duration-300 origin-bottom group-hover:scale-125 group-hover:rotate-3"
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
        <SvgComponent className="absolute -top-1 left-0 rotate-180 fill-[#FFC945]" />
      </section>
      {/* END Team section */}
    </div>
  );
};

export default About;
