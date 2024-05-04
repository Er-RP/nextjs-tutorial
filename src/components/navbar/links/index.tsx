import { INavLink } from "@/types/common";
import React from "react";
import NavLink from "./NavLink";
import { auth, signOut } from "@/utils/auth";

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

const NavLinks = async () => {
  const session = await  auth()
  const handleLogout = async () =>{
    "use server"
    await signOut()
  }
  //Dummy loggedin and admin
  const isLoggedIn = session?.user ? true : false;
  const isAdmin = false;
  return (
    <div className="hidden sm:flex gap-3 items-center">
      {navLinks.map((navLink) => (
        <NavLink navLink={navLink} key={navLink?.path} />
      ))}
      {isLoggedIn ? (
        <>
          {isAdmin && <NavLink navLink={{ name: "Admin", path: "/admin" }} />}
          <form action={handleLogout}>
          <button className="bg-text-light text-main p-2">Logout</button>
          </form>
          
        </>
      ) : (
        <NavLink navLink={{ name: "Login", path: "/login" }} />
      )}
    </div>
  );
};

export default NavLinks;
