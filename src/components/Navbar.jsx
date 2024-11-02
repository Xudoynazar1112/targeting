import React from "react";
import logo from "/images/logo.png";


const Navbar = () => {
  return (
    <div className="py-5 md:px-40 px-5 flex justify-between items-center w-full">
      <div className="flex items-center">
        <img src={logo} alt="logo" className="w-16" />
        <div className="md:flex md:flex-col text-black text-xl hidden">
          <span>Raqamli</span>
          <span>Marketing</span>
        </div>
      </div>
      <div>
        <a href="#contact" className="bg-[#FEC901] font-bold md:text-xl py-4 px-6 rounded-xl">↪ Ariza yuborish</a>
      </div>
    </div>
  );
};

export default Navbar;
