import React from "react";
import logo from "/src/assets/logo.png";


const Navbar = () => {
  return (
    <div className="py-10 md:px-48 px-20 flex justify-between items-center w-full">
      <div className="flex items-center">
        <img src={logo} alt="logo" className="w-16" />
        <div className="flex flex-col text-black text-xl">
          <span>Raqamli</span>
          <span>Marketing</span>
        </div>
      </div>
      <div>
        <a href="#contact" className="bg-[#FEC901] font-bold text-xl py-2 px-4 rounded-xl">↪ Ariza yuborish</a>
      </div>
    </div>
  );
};

export default Navbar;