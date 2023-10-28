import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { Heading } from "@/features/ui";
import homepage from "../assets//about/homepage.png";
import { team } from "@/constants";

const About = () => {
  return (
    <div className="p-10">
      {/* <h1 className="text-center">About</h1> */}
      <Heading level="h1" variant="tangerine">
        About
      </Heading>

      <div className="grid gap-12">
        <section id="project">
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
              <p className="mb-4">
                YumYumYes! allows users to search for recipes by ingredient and
                filter by useful tags such as difficulty, occasion, etc. The app
                also allows users to save recipes to their favorites list, and
                to view their favorites list at any time.
              </p>
              <p className="mb-4">
                The app is built as a fully responsive web app compatible with
                all modern web browsers, both mobile and desktop. We&apos;ve
                taken care to make it intuitive for all users, and accessible to
                users with different abilities.
              </p>
            </div>
            <img
              src={homepage}
              alt="YumYumYes! hompage"
              className="rounded-lg"
            />
          </div>
        </section>
        <section id="team">
          <Heading level="h2" variant="watermelon">
            Our Team
          </Heading>
          <div className="grid gap-6 gap-x-20 md:grid-cols-2 xl:grid-cols-3">
            {team.map(({ name, role, summary, image, socials }) => (
              <article className="mb-6" key={name}>
                <Heading level="h3" variant="lava">
                  {name}
                </Heading>
                <Heading
                  level="h4"
                  variant="lava"
                  className="font-display font-bold text-2xl text-lava-500 -mt-3"
                >
                  {role}
                </Heading>

                <div className="grid gap-6 grid-flow-col auto-cols-auto">
                  <p>{summary}</p>
                  <div>
                    <img className="rounded-full" src={image} alt={name} />
                    <article className="flex justify-center gap-4 text-4xl text-sky-600 mt-2">
                      <a
                        className="transition ease-in-out duration-300 hover:text-sky-800 hover:scale-110"
                        href={socials[0].url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaGithubSquare />
                      </a>
                      <a
                        className="transition ease-in-out duration-300 hover:text-sky-800 hover:scale-110"
                        href={socials[1].url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaLinkedin />
                      </a>
                    </article>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
