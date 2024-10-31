import React from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { IoMail } from "react-icons/io5";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="flex justify-between bg-black text-white py-5 px-48 mt-10">
      <div>
        <p>Chilonzor 12 kvartal,</p>
        <p>Baraka Market yonida</p>
      </div>
      <div className="flex items-center gap-3"><FaSquareInstagram /> Instagram</div>
      <div>
        <p className="flex items-center gap-3">
          <BsTelephoneFill /> +998 93 169 34 54
        </p>
        <p className="flex items-center gap-3">
          <IoMail /> raqamli.targeting@gmail.com
        </p>
      </div>
    </div>
  );
};

export default Footer;
