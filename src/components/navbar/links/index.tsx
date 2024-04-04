import { INavLink } from "@/types/common";
import React from "react";
import NavLink from "./NavLink";

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

const NavLinks = () => {
  //Dummy loggedin and admin
  const isLoggedIn = true;
  const isAdmin = true;
  return (
    <div className="hidden sm:flex gap-3 items-center">
      {navLinks.map((navLink) => (
        <NavLink navLink={navLink} key={navLink?.path} />
      ))}
      {isLoggedIn ? (
        <>
          {isAdmin && <NavLink navLink={{ name: "Admin", path: "/admin" }} />}
          <button className="bg-text-light text-main p-2">Logout</button>
        </>
      ) : (
        <NavLink navLink={{ name: "Login", path: "/login" }} />
      )}
    </div>
  );
};

export default NavLinks;
