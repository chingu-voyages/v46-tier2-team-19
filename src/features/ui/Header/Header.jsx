import React from "react";
import { navLinks } from "../../../constants";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        {navLinks.map((navLink, index) => (
          <Link key={index} to={navLink.href}>
            {navLink.title}
          </Link>
        ))}
      </nav>
    </header>
  );
};
