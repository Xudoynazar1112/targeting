import React from "react";

const Section2 = () => {
  return (
    <div className="flex flex-col md:flex-row gap-10 mt-10">
      <div
        data-aos="fade-up"
        className="bg-slate-50 dark:text-white dark:bg-gray-900 shadow-lg p-10 rounded-xl md:w-3/5 flex justify-between flex-col"
      >
        <h1 className="rang uppercase w-60 font-bold md:text-5xl text-3xl">
          Biz haqimizda
        </h1>
        <p className="md:text-3xl text-xl mt-5 leading-relaxed font-medium font-serif">
          Bek media agentlikda biz shunchaki reklama qilishdan ko'proq
          narsani qilamiz; ajoyib tajribalar yaratamiz. Jamoamiz bilan birgalik
          sizning brendingizni uchun raqamli yechimlar bera olamiz.
        </p>
      </div>
      <div data-aos="fade-up" className="md:w-2/5 ">
        <div className="flex gap-5 w-full mb-10 ">
          <p className="bg-slate-100 dark:text-white dark:bg-gray-900 w-1/4 rounded-2xl"></p>
          <p className="rounded-2xl dark:text-white bg-white dark:bg-gray-900 p-5 w-3/4 md:text-3xl text-xl shadow-lg">
            <span className="md:text-6xl text-4xl block mb-10 font-bold">6 yil</span>{" "}
            Tajriba
          </p>
        </div>
        <div className="flex gap-5 w-full mb-10">
          <p className="dark:text-white bg-white dark:bg-gray-900 rounded-2xl p-5 w-3/4 md:text-3xl text-xl shadow-lg">
            <span className="md:text-6xl text-4xl block mb-10 font-bold">100+</span> Loyiha
          </p>
          <p className="bg-slate-100 dark:text-white dark:bg-gray-900 w-1/4 rounded-2xl"></p>
        </div>
        <div className="flex gap-5 w-full">
          <p className="bg-slate-100 dark:text-white dark:bg-gray-900 w-1/4 rounded-2xl"></p>
          <p className="rounded-2xl dark:text-white bg-white dark:bg-gray-900 p-5 w-3/4 md:text-3xl text-xl shadow-lg">
            <span className="md:text-6xl text-4xl block mb-10 font-bold">3+</span> davlat
            mijozlari
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section2;
