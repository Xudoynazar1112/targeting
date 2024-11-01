import React from "react";
import { RiCashFill } from "react-icons/ri";
import hero from "/images/main-hero.png";

const Section1 = () => {
  return (
    <div className="px-4">
      <di data-aos="fade-up" className="flex justify-center items-center md:text-[5rem] text-4xl">
        <p className="md:w-3/4 text-center md:leading-[5rem] leading-relaxed font-bold">
          <span className="sariq">34 Kun </span>ichida Savdolaringizni{" "}
          <span className="sariq">70% gacha</span> oshiring!
        </p>
      </di>
      <div className="flex md:justify-between flex-col md:flex-row md:items-end items-center md:mt-0 mt-12">
        {/* Left box */}
        <div data-aos="fade-up" className="bg-slate-100 w-[20rem] h-[20rem] rounded-xl p-10 text-4xl">
          <RiCashFill className="text-[#FEC901] mb-10" />
          <p>Kechagidan ko'proq soting</p>
        </div>
        {/* Image box */}
        <div data-aos="fade-up" className="relative md:mb-0 mb-5">
          <img src={hero} alt="photo" className="md:w-[31rem] w-full" />
          <p className="bg-white/75 md:w-72 w-40 md:h-16 h-10 absolute md:bottom-3 bottom-2 md:left-28 left-20 rounded-2xl text-center md:skew-x-[35deg] skew-x-[20deg]">
            <h2 className="md:text-xl text-md">Latifov Izzatbek</h2>
            <p className="md:text-base text-[10px]">Targetolog</p>
          </p>
        </div>
        {/* Right box */}
        <div data-aos="fade-up" className="bg-slate-100 w-[20rem] h-[20rem] rounded-xl p-10 text-xl flex flex-col gap-10 pr-14 font-semibold">
          <p>O'ylab o'tirishga xojat yo'q deb nomlangan <span className="text-[#FEC901]">garantiya</span></p>
          <p>
            Savdo hajmi yaxshi tarafga o'zgarmasa xizmat pulini <span className="text-[#FEC901]">100%</span> qaytaramiz!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section1;
