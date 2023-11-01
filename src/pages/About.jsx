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

        <div className="pb-10">
          <img
            src={homepage}
            alt="YumYumYes! hompage"
            className="float-right rounded-lg w-1/2 ml-4 mb-2 max-w-sm"
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
        </div>

        <SvgComponent className="absolute -bottom-1 left-0" />
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

              {/* {index !== 0 && (
                <>
                  {index % 2 !== 0 ? (
                    <>
                      <SvgComponent className="absolute top-0 left-0 rotate-180 -scale-x-100 md:hidden" />
                      <SvgComponent className="absolute -top-8 left-0 -scale-x-100 md:hidden" />
                    </>
                  ) : (
                    <>
                      <SvgComponent className="absolute top-0 left-0 rotate-180 md:hidden" />
                      <SvgComponent className="absolute -top-8 left-0 md:hidden" />
                    </>
                  )}
                </>
              )} */}
              {index !== team.length - 1 && (
                <SvgComponent className="absolute -bottom-1 left-0 md:hidden" />
              )}
              {index !== 0 && (
                <SvgComponent className="absolute -top-1 left-0 rotate-180 md:hidden" />
              )}
            </article>
          ))}
        </div>

        {/* <SvgComponent className="absolute -top-8 left-0" />
          <SvgComponent className="absolute top-0 left-0 rotate-180" /> */}
        <SvgComponent className="absolute -top-1 left-0 rotate-180" />
      </section>
      {/* END Team section */}
    </div>
  );
};

export default About;
