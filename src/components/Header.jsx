import React from "react";

import { AiFillHome } from "react-icons/ai";
import Navbar from "./Navbar";
import NavHead from "./NavHead";
const Header = () => {
  return (
    <div className="my-10 space-y-8">

     <Navbar />
     <NavHead />
     
    </div>
   
  );
};

export default Header;
