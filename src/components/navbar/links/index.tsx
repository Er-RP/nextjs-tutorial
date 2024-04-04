import { INavLink } from "@/types/common";
import React from "react";
import NavLink from "./NavLink";

type Props = {};

const navLinks: INavLink[] = [
  {
    name: "Blog",
    path: "/blog",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const NavLinks = (props: Props) => {
  return (
    <div className="flex gap-3 items-center">
      {navLinks.map((navLink) => (
        <NavLink navLink={navLink} key={navLink?.path}/>
      ))}
    </div>
  );
};

export default NavLinks;
