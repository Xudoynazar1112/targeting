import React, { useState } from "react";
import logo from "/images/logo.png";
import { FaSun } from "react-icons/fa6";
import { MdNightsStay } from "react-icons/md";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };
  return (
    <div className="py-5 md:px-40 px-5 flex justify-between items-center w-full ">
      <div className="flex items-center">
        <img src={logo} alt="logo" className="md:w-16 w-10" />
        <div className="flex flex-col text-black dark:text-white bg-white dark:bg-gray-900 md:text-xl text-sm">
          <span>Bek</span>
          <span>Media</span>
        </div>
      </div>
      <div className="flex items-center">
        <button
          onClick={toggleDarkMode}
          className="p-1 mr-2 dark:text-yellow-400 dark:bg-black md:text-3xl text-xl rounded"
        >
          {darkMode ? <FaSun /> : <MdNightsStay />}
        </button>
        <a
          href="#contact"
          className="bg-[#FEC901] font-bold md:text-xl text-base md:py-4 py-2 md:px-6 px-2 rounded-xl"
        >
          ↪ Ariza yuborish
        </a>
      </div>
    </div>
  );
};

export default Navbar;
