import Link from "next/link";
import React from "react";

type Props = {};

const navLinks = [
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
    <div>
      {navLinks.map((navLink) => (
        <Link href={navLink?.path} key={navLink?.path}>
          {navLink?.name}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
