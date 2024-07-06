import Link from "next/link";
import React from "react";

import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div className=" flex gap-5">
        <Link className="flex hover:text-amber-500 " href={"/"}>
          <AiFillHome className="inline-block sm:hidden text-2xl" />
          <p className=" hidden sm:inline-block uppercase  font-medium">
            Home
          </p>
        </Link>
        <Link className="hover:text-amber-500 flex" href={"/about"}>
          <BsFillInfoCircleFill className="inline-block sm:hidden text-2xl" />
          <p className=" hidden sm:inline-block uppercase  font-medium">
            About
          </p>
        </Link>
      </div>
      <div>
        <span className="text-xl bg-amber-500  py-1 px-2 rounded-lg">IMDb</span>
        <span>Clone</span>
      </div>
    </div>
  );
};

export default Navbar;
