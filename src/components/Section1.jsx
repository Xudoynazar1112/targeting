import React from "react";
import { RiCashFill } from "react-icons/ri";
import hero from "/src/assets/main-hero.png";

const Section1 = () => {
  return (
    <div>
      <div className="flex justify-center items-center md:text-[5rem] text-4xl">
        <p className="md:w-3/4 text-center md:leading-[5rem] leading-relaxed font-bold">
          <span className="sariq">34 Kun </span>ichida Savdolaringizni{" "}
          <span className="sariq">70% gacha</span> oshiring!
        </p>
      </div>
      <div className="flex md:justify-between flex-row md:flex-col items-end mt-[12rem]">
        <div className="bg-slate-100 w-[20rem] h-[20rem] rounded-xl p-10 text-4xl">
          <RiCashFill className="text-[#FEC901] mb-10" />
          <p>Kechagidan ko'proq soting</p>
        </div>
        <div className="absolute left-[33.7%]">
          <img src={hero} alt="photo" className="w-[31rem]" />
          <p className="bg-white/75 w-72 h-16 absolute bottom-3 left-28 rounded-2xl text-center skew-x-[35deg]">
            <h2 className="text-xl">Latifov Izzatbek</h2>
            <p>Targetolog</p>
          </p>
        </div>
        <div className="bg-slate-100 w-[20rem] h-[20rem] rounded-xl p-10 text-xl flex flex-col gap-10 pr-14 font-semibold">
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
