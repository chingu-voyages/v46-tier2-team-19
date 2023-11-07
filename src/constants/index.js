import team from "./teamData";

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

export { name, welcome, logoUrl, footerLinks, team };
