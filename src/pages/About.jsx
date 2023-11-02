import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { Button, Heading } from "@/features/ui";
import homepage from "../assets//about/homepage.png";
import { team } from "@/constants";
import SvgComponent from "@/assets/brand/swooshes/svgWave";
import { useState } from "react";

const About = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div>
      {/* <h1 className="text-center">About</h1> */}
      <Heading level="h1" variant="tangerine" className="px-10 pt-10">
        About
      </Heading>

      <div className="grid gap-12">
        <section className="px-10 pb-10" id="project">
          <Heading level="h2" variant="watermelon">
            This Project
          </Heading>
          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <p className="mb-4">
                We developed a unique web app with a distinctive brand and a
                whimsical, animated design. YumYumYes! is intended to make
                recipe browsing fun! Colorful mascots Yumi and Chef Carrots
                welcome visitors to our pages, and delightful visual motifs
                including text gradients, 3d colored balls, dashed lines and
                gentle curves are intended to make the app feel more alive and
                engaging.
              </p>

              {showMore && (
                <>
                  <p className="mb-4">
                    YumYumYes! allows users to search for recipes by ingredient
                    and filter by useful tags such as difficulty, occasion, etc.
                    The app also allows users to save recipes to their favorites
                    list, and to view their favorites list at any time.
                  </p>
                  <p className="mb-4">
                    The app is built as a fully responsive web app compatible
                    with all modern web browsers, both mobile and desktop.
                    We&apos;ve taken care to make it intuitive for all users,
                    and accessible to users with different abilities.
                  </p>
                </>
              )}

              <Button
                variant="secondary"
                size="small"
                onClick={(e) => {
                  setShowMore(!showMore);
                  e.target.blur();
                }}
              >
                {showMore ? "Read less" : "Read more"}
              </Button>
            </div>
            <img
              src={homepage}
              alt="YumYumYes! hompage"
              className="rounded-lg"
            />
          </div>
        </section>

        <section className="bg-gradient-sky-diagonal relative" id="team">
          <Heading
            level="h2"
            variant="watermelon"
            className="px-10 pt-10 md:pt-14 lg:pt-20 xl:pt-24 text-white"
          >
            Our Team
          </Heading>

          <div className="grid gap-6 gap-x-20 md:grid-cols-2 xl:grid-cols-3">
            {team.map(({ name, role, summary, image, socials }, index) => (
              <article
                className="group mb-6 px-10 pt-14 first:pt-0 md:pt-0 relative"
                key={name}
              >
                <Heading level="h3" variant="lava">
                  {name}
                </Heading>
                <Heading
                  level="h4"
                  variant="lava"
                  className="font-display font-bold text-2xl text-lava-500 -mt-2"
                >
                  {role}
                </Heading>

                <div className="relative grid gap-6 grid-flow-col auto-cols-auto">
                  <p className="z-10">{summary}</p>
                  <div>
                    <img
                      className="rounded-full border-4 border-sky-200 transition duration-300 origin-bottom group-hover:scale-125 group-hover:-rotate-6"
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
                </div>

                {index !== 0 && (
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
                )}
              </article>
            ))}
          </div>

          <SvgComponent className="absolute -top-8 left-0" />
          <SvgComponent className="absolute top-0 left-0 rotate-180" />
        </section>
      </div>
    </div>
  );
};

export default About;
