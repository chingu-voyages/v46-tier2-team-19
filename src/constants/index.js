import AvatarGrey from "../assets/about/avatar-grey.jpg";
import AvatarDarrick from "../assets/about/avatar-darrick.jpg";

const name = "YumYumYes!";
const welcome =
  "Welcome to YumYumYes, your gateway to delicious recipes and culinary inspiration! Let's embark on a flavorful journey together! ";
const logoUrl = "";

export const navLinks = [
  {
    id: "about",
    title: "About",
    href: "/about",
  },
  // {
  //   id: "posts",
  //   title: "Posts",
  //   href: "/posts",
  // },
  {
    id: "search",
    title: "Search",
    href: "/search",
  },
  {
    id: "favorites",
    title: "Favorites",
    href: "/favorites",
  },
];

const footerLinks = [
  {
    id: "about",
    title: "About",
    href: "/about",
  },
  {
    id: "search",
    title: "Search",
    href: "/search",
  },
];

const team = [
  {
    name: "Greimil",
    role: "Web Designer & Developer",
    summary:
      "I am a self-motivated software developer pursuing a Computer Science degree, blending formal education with self-taught knowledge. I actively worked on this project, contributing to web design and coding for functional and aesthetically pleasing interfaces. My background in both design and development allows me to contribute comprehensively to projects, and I'm eager to refine my skills further, solve complex problems, and create user-centric software solutions through continuous learning and improvement.",
    image: AvatarGrey,
    socials: [
      {
        name: "GitHub",
        url: "https://github.com",
      },
      {
        name: "LinkedIn",
        url: "https://linkedin.com",
      },
    ],
  },
  {
    name: "Darrick Fauvel",
    role: "Web Developer",
    summary:
      "I am an experienced web developer skilled in JavaScript and React, who is based in Massachusetts, USA. In agile collaboration with the team, I helped create reusable React components, developed the Favorite Recipes feature, and constructed the About page with its Team feature, all while emphasizing website responsiveness. I hold a Bachelor of IT degree (summa cum laude) from UMass Lowell, and have rad 😎 experience dating back to the early days of the Web before CSS & JavaScript. 😲",
    image: AvatarDarrick,
    socials: [
      {
        name: "GitHub",
        url: "https://github.com/DarrickFauvel",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/darrickfauvel/",
      },
    ],
  },
  {
    name: "Charlie Stephens",
    role: "UI/UX Designer",
    summary:
      "Charlie used his creative skills to collaborate with the project team, ensuring the development of a visually appealing and user-friendly website that successfully met project objectives.",
    image: "https://randomuser.me/api/portraits/men/34.jpg",
    socials: [
      {
        name: "GitHub",
        url: "https://github.com",
      },
      {
        name: "LinkedIn",
        url: "https://linkedin.com",
      },
    ],
  },
  // {
  //   name: "",
  //   role: "",
  //   summary: "",
  //   image: "",
  //   socials: [{ gitHub: "", linkedIn: "" }],
  // },
];

export { name, welcome, logoUrl, footerLinks, team };
