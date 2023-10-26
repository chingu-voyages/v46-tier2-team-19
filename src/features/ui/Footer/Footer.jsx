import { footerLinks, name } from "@/constants";
import { Link } from "react-router-dom";
import { creamLogo as Logo } from "@/assets";
import { github } from "@/assets";

export const Footer = () => {
  return (
    <footer className="bottom-0 w-full p-4 bg-[#2d2d2d] rounded-b-2xl items-center text-[#F8F7F6]">
      <aside className="w-40 mx-auto my-4 xl:w-52">
        <Link to="/">
          <img src={Logo} alt={name} loading="lazy" />
        </Link>
      </aside>
      <nav className="mb-4 text-center">
        <div className="flex items-center justify-center space-x-4">
          {footerLinks.map((footerLink) => (
            <Link key={footerLink.id} to={footerLink.href}>
              {footerLink.title}
            </Link>
          ))}
        </div>
      </nav>
      <p className="mb-4 text-center">
        © Copyright
        {new Date().getFullYear() > 2023
          ? ` 2023 - ${new Date().getFullYear()}`
          : " 2023"}
        , {name}
      </p>
      <div className="flex flex-col items-center sjustify-center lg:justify-between lg:flex-row">
        <p>Chingu Voyage 46</p>
        <a
          href="https://github.com/chingu-voyages/v46-tier2-team-19"
          target="_blank"
          rel="noreferrer"
        >
          <img src={github} alt="github" className="w-12 h-12" loading="lazy" />
        </a>
      </div>
    </footer>
  );
};
