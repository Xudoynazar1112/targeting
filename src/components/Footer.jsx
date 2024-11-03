import React from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { IoMail } from "react-icons/io5";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="dark:text-white dark:bg-gray-900 flex justify-between md:items-start items-center md:flex-row flex-col bg-black text-white py-5 md:px-48 px-10 gap-5 mt-10">
      <div>
        <p>Alisher Navoiy ko'chasi, 11A, Toshkent</p>
        {/* <p>Baraka Market yonida</p> */}
      </div>
      <div className="flex items-center gap-3"><FaSquareInstagram /> Instagram</div>
      <div>
        <p className="flex items-center gap-3">
          <BsTelephoneFill /> +998 77 362 88 88
        </p>
        <p className="flex items-center gap-3">
          <IoMail /> izzatbek.latifovuz@gmail.com
        </p>
      </div>
    </div>
  );
};

export default Footer;
