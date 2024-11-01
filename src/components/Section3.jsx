import React from "react";
import icon1 from "/images/icon1.png";
import icon2 from "/images/icon2.png";
import icon3 from "/images/icon3.png";
import icon4 from "/images/icon4.png";
import icon5 from "/images/icon5.png";
import { GoDotFill } from "react-icons/go";
import { GiSandsOfTime } from "react-icons/gi";
import { FaChartPie } from "react-icons/fa";

const Loyiha = ({ head, body1, body2, img }) => {
  return (
    <div data-aos="fade-up" className="flex md:flex-row flex-col items-center w-[88%] mx-auto bg-[#F7F7F7] gap-20 rounded-xl md:p-10 p-3">
      <div className="md:w-1/2 w-full flex flex-col gap-10">
        <div className="flex">
          <div className="text-yellow-400 text-4xl">
            <GoDotFill />
          </div>
          <h1 className="text-5xl font-semibold">{head}</h1>
        </div>
        <div className="flex items-center">
          <div className="text-yellow-400 text-2xl">
            <GiSandsOfTime />
          </div>
          <p className="text-lg">
            <span className="text-[#87ADB2]">Murojaatlar soni:</span> {body1}
          </p>
        </div>
        <div className="flex gap-1">
          <div className="text-yellow-400 text-2xl">
            <FaChartPie />
          </div>
          <p className="text-lg">
            <span className="text-[#87ADB2]">Tahlil:</span> {body2}
          </p>
        </div>
      </div>
      <div className="md:w-1/2 w-full">
        <img src={img} alt="photo" className="rounded-3xl w-full h-auto" />
      </div>
    </div>
  );
};

const Section3 = () => {
  return (
    <>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
        <div data-aos="fade-up" className="uppercase">
          <div className="flex items-center">
            <img
              src="https://static.tildacdn.one/tild6563-3462-4635-b561-623233646531/1.svg"
              alt="svg"
              className="w-6 md:mr-5 mr-1"
            />
            <p className="text-[#81A9AF] font-bold md:text-base text-[8px]">
              Biz nimalar qila olamiz
            </p>
          </div>
          <p className="md:text-4xl text-xl leading-relaxed font-bold font-serif">
            6 yildan beri kun u tun nima qilamiz:
          </p>
        </div>
        <div
          data-aos="fade-up"
          className="shadow flex md:h-[28rem] h-[15rem] flex-col justify-between p-7 rounded-xl"
        >
          <img src={icon1} alt="icon1" className="md:w-24 w-14" />
          <div>
            <h1 className="md:text-3xl text-xl mb-4 font-bold">
              Digital Marketing
            </h1>
            <p className="md:text-base text-[12px]">
              Ijtimoiy media, kontent va qidiruv tizimini optimallashtirish kabi
              keng qamrovli marketing strategiyalari bilan onlayn
              salohiyatingizni maksimal darajada oshirish.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="shadow flex md:h-[28rem] h-[15rem] flex-col justify-between p-7 rounded-xl"
        >
          <img src={icon2} alt="icon2" className="md:w-24 w-14" />
          <div>
            <h1 className="md:text-3xl text-xl mb-4 font-bold">Target</h1>
            <p className="md:text-base text-[12px]">
              Maqsadli ijtimoiy media va qidiruv kampaniyalari bilan maqsadli
              auditoriyangizga erishing. Maqsadli reklama yordamida
              konversiyalarni oshiring.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="shadow flex md:h-[28rem] h-[15rem] flex-col justify-between p-7 rounded-xl"
        >
          <img src={icon3} alt="icon3" className="md:w-24 w-14" />
          <div>
            <h1 className="md:text-3xl text-xl mb-4 font-bold">IT yechimlar</h1>
            <p className="md:text-base text-[12px]">
              Operatsiyalaringizni optimal-lashtirish uchun moslashtirilgan
              texnologik echimlar, jumladan, dasturiy ta'minot va bulutli
              texnologiyalar.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="shadow flex md:h-[28rem] h-[15rem] flex-col justify-between p-7 rounded-xl"
        >
          <img src={icon4} alt="icon4" className="md:w-24 w-14" />
          <div>
            <h1 className="md:text-3xl text-xl mb-4 font-bold">Website</h1>
            <p className="md:text-base text-[12px]">
              Korporativdan tortib onlayn-do'konlargacha kuchli onlayn mavjudlik
              uchun noyob va funktsional veb-saytlarni yarating.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="shadow flex md:h-[28rem] h-[15rem] flex-col justify-between p-7 rounded-xl"
        >
          <img src={icon5} alt="icon5" className="md:w-24 w-14" />
          <div>
            <h1 className="md:text-3xl text-xl mb-4 font-bold">
              Google & Yandex Reklama
            </h1>
            <p className="md:text-base text-[12px]">
              Maqsadli auditoriyangizni jalb qilib, samarali Google va Yandex
              kompaniyalar yordamida brendingizning ko'rinishini maksimal
              darajada oshiring.
            </p>
          </div>
        </div>
      </div>
      <h1 className="text-center uppercase font-semibold">Loyihalar</h1>
      <div className="flex flex-col gap-7">
        <Loyiha
          head={"Target, Kontekst reklama"}
          body1={4500}
          body2={
            "Respublika dermatologiya va venerologiya markazi. Raqamli jamoasi va dermatologiya va venerologiya markazi jamoasi bilan hamkorlikda, kompaniyaga target, kontekst reklama xizmatlarimizni taqdim etdik."
          }
          img={"/images/dermatologiya.jpg"}
        />
        <Loyiha
          head={"Target, Kontekst reklama"}
          body1={1500}
          body2={
            "Telefon Oldi sotisi Iphone Samsung. Raqamli jamoasi kompaniyaga target, kontekst reklama xizmatlarimizni taqdim etdik."
          }
          img={"/images/telefon.jpg"}
        />
        <Loyiha
          head={"Target, Kontekst reklama"}
          body1={626}
          body2={
            "O'quvmarkaz It Dasturlash. Raqamli jamoasi kompaniyaga target, kontekst reklama xizmatlarimizni taqdim etdik."
          }
          img={"/images/itTime.jpg"}
        />
        <Loyiha
          head={"Target, Kontekst reklama"}
          body1={494}
          body2={
            "Ayollar kiyimlari. Raqamli jamoasi kompaniyaga target, kontekst reklama xizmatlarimizni taqdim etdik."
          }
          img={"/images/imanem.jpg"}
        />
        <Loyiha
          head={"Target, Kontekst reklama"}
          body1={100}
          body2={
            "Stomotolog. Raqamli jamoasi kompaniyaga target, kontekst reklama xizmatlarimizni taqdim etdik."
          }
          img={"/images/stolotolg3.jpg"}
        />
        <Loyiha
          head={"Target, Kontekst reklama"}
          body1={3022}
          body2={
            "Zamonaviy Aksessuarlar. Raqamli jamoasi kompaniyaga target, kontekst reklama xizmatlarimizni taqdim etdik."
          }
          img={"/images/aksesuarlar2.jpg"}
        />
        <Loyiha
          head={"Target, Kontekst reklama"}
          body1={899}
          body2={
            "Kosmetolog Dietolog. Raqamli jamoasi kompaniyaga target, kontekst reklama xizmatlarimizni taqdim etdik."
          }
          img={"/images/kasmetolog.jpg"}
        />
        <Loyiha
          head={"Target, Kontekst reklama"}
          body1={1000}
          body2={
            "Uybozor. Raqamli jamoasi kompaniyaga target, kontekst reklama xizmatlarimizni taqdim etdik."
          }
          img={"/images/uzBisnesCard.jpg"}
        />
        <Loyiha
          head={"Target, Kontekst reklama"}
          body1={600}
          body2={
            "Max Power tabiiy tog’ asali. Raqamli jamoasi kompaniyaga target, kontekst reklama xizmatlarimizni taqdim etdik."
          }
          img={"/images/honey.jpg"}
        />
        <Loyiha
          head={"Target, Kontekst reklama"}
          body1={89}
          body2={
            "KIPRIK UZAYTIRISH Xizmatlari. Raqamli jamoasi kompaniyaga target, kontekst reklama xizmatlarimizni taqdim etdik."
          }
          img={"/images/kiprik.jpg"}
        />
        <Loyiha
          head={"Target, Kontekst reklama"}
          body1={500}
          body2={
            "Respublika dermatologiya va venerologiya markazi. Raqamli jamoasi kompaniyaga target, kontekst reklama xizmatlarimizni taqdim etdik."
          }
          img={"/images/ozdvkm.jpg"}
        />
        <Loyiha
          head={"Target, Kontekst reklama"}
          body1={1500}
          body2={
            "Anhor Park. Raqamli jamoasi kompaniyaga target, kontekst reklama xizmatlarimizni taqdim etdik."
          }
          img={"/images/anhor2.jpg"}
        />
      </div>
    </>
  );
};

export default Section3;
