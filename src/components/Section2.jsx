import React from "react";

const Section2 = () => {
  return (
    <div className="flex flex-col md:flex-row gap-10 mt-10">
      <div className="bg-slate-50 shadow-lg p-10 rounded-xl md:w-3/5 flex justify-between flex-col">
        <h1 className="rang uppercase w-60 font-bold">Men haqimda</h1>
        <p className="text-3xl leading-relaxed font-medium font-serif">
          Biz haqimizda Raqamli marketing agentlikda biz shunchaki reklama
          qilishdan ko'proq narsani qilamiz; ajoyib tajribalar yaratamiz.
          Jamoamiz bilan birgalik sizning brendingizni uchun raqamli yechimlar
          bera olamiz.
        </p>
      </div>
      <div className="md:w-2/5">
        <div className="flex gap-5 w-full mb-10">
          <p className="bg-slate-100 w-1/4 rounded-2xl"></p>
          <p className="rounded-2xl p-5 w-3/4 text-3xl shadow-lg">
            <span className="text-6xl block mb-10 font-bold">6 yil</span> Tajriba
          </p>
        </div>
        <div className="flex gap-5 w-full mb-10">
          <p className="rounded-2xl p-5 w-3/4 text-3xl shadow-lg">
            <span className="text-6xl block mb-10 font-bold">100+</span> Loyiha
          </p>
          <p className="bg-slate-100 w-1/4 rounded-2xl"></p>
        </div>
        <div className="flex gap-5 w-full">
          <p className="bg-slate-100 w-1/4 rounded-2xl"></p>
          <p className="rounded-2xl p-5 w-3/4 text-3xl shadow-lg">
            <span className="text-6xl block mb-10 font-bold">3+</span> davlat mijozlari
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section2;
