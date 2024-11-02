import React from "react";
import { RiCashFill } from "react-icons/ri";
import hero from "/images/main-hero.png";
import { SiTicktick } from "react-icons/si";

const Section1 = () => {
  return (
    <div className="px-4">
      <di
        data-aos="fade-up"
        className="flex justify-center items-center md:text-[5rem] text-4xl"
      >
        <p className="md:w-3/4 text-center md:leading-[5rem] leading-relaxed font-bold">
          <span className="sariq">34 Kun </span>ichida Savdolaringizni{" "}
          <span className="sariq">70% gacha</span> oshiring!
        </p>
      </di>
      <div className="flex md:justify-between md:gap-5 md:text-start text-center flex-col md:flex-row md:items-end items-center">
        {/* Left box */}
        <div
          data-aos="fade-up"
          className="bg-slate-100 md:w-[20rem] w-full h-[22rem] flex md:flex-row md:items-start flex-col items-center rounded-xl p-10 text-4xl"
        >
          <RiCashFill className="text-[#FEC901] mb-10" />
          <p>Kechagidan ko'proq soting</p>
        </div>
        {/* Image box */}
        <div data-aos="fade-up" className="hero">
          <img src={hero} alt="photo" />
          <div className="bordered">
            <span>izzat.digital <SiTicktick /></span>
            <p className="hero-text">
              <h2>Latifov Izzatbek</h2>
              <p>Targetolog</p>
            </p>
          </div>
        </div>
        {/* Right box */}
        <div
          data-aos="fade-up"
          className="bg-slate-100 md:w-[20rem] w-full md:text-start text-center h-[22rem] rounded-xl p-10 text-xl flex flex-col gap-10 pr-14 font-semibold"
        >
          <p>
            O'ylab o'tirishga xojat yo'q deb nomlangan{" "}
            <span className="text-[#FEC901]">garantiya</span>
          </p>
          <p>
            Savdo hajmi yaxshi tarafga o'zgarmasa xizmat pulini{" "}
            <span className="text-[#FEC901]">100%</span> qaytaramiz!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section1;
