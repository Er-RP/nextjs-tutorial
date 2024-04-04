import React from "react";
import NavLinks from "./links";
import Link from "next/link";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="h-24 flex justify-between items-center">
      <div className="text-xl font-bold p-1">
        <Link href="/">
        RP
        </Link>
        </div>
      <NavLinks />
    </div>
  );
};

export default Navbar;
