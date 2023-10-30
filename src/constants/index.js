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
    name: "Alice Butler",
    role: "Web Developer",
    summary:
      "Alice utilized her expertise in HTML, CSS, and JavaScript to collaborate with the project team, creating a user-friendly, responsive website that successfully met project objectives.",
    image: "https://randomuser.me/api/portraits/women/69.jpg",
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
    name: "Bob Hoffman",
    role: "Product Owner",
    summary:
      "Bob, with his expertise, collaborated with the project team to ensure the development of a user-friendly, responsive website that successfully met project objectives.",
    image: "https://randomuser.me/api/portraits/men/48.jpg",
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
