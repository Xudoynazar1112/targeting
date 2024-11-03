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
    <div
      data-aos="fade-up"
      className="dark:text-white dark:bg-gray-900 flex md:flex-row flex-col items-center md:w-[88%] w-full mx-auto bg-[#F7F7F7] gap-20 rounded-xl md:p-10 p-3"
    >
      <div className="md:w-1/2 w-full flex flex-col gap-10">
        <div className="flex">
          <div className="text-yellow-400 text-4xl">
            <GoDotFill />
          </div>
          <h1 className="md:text-5xl text-3xl font-semibold">{head}</h1>
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
        <div data-aos="fade-up" className="uppercase ">
          <div className="flex items-center md:justify-start justify-center">
            <img
              src="https://static.tildacdn.one/tild6563-3462-4635-b561-623233646531/1.svg"
              alt="svg"
              className="md:w-6 w-4 md:mr-5 mr-1"
            />
            <p className="text-[#81A9AF] font-bold md:text-base text-10">
              Biz nimalar qila olamiz
            </p>
          </div>
          <p className="md:text-4xl text-3xl md:text-start text-center leading-relaxed font-black font-serif">
            6 yildan beri kun u tun nima qilamiz:
          </p>
        </div>
        <div
          data-aos="fade-up"
          className="dark:text-white bg-white dark:bg-gray-900 dark:border-[#045360] border-2 shadow flex md:h-[28rem] h-[24rem] flex-col justify-between p-7 rounded-xl"
        >
          <img src={icon1} alt="icon1" className="md:w-24 w-16" />
          <div>
            <h1 className="md:text-3xl text-2xl mb-4 font-bold">
              Digital Marketing
            </h1>
            <p className="md:text-xl text-md">
              Ijtimoiy media, kontent va qidiruv tizimini optimallashtirish kabi
              keng qamrovli marketing strategiyalari bilan onlayn
              salohiyatingizni maksimal darajada oshirish.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="dark:text-white bg-white dark:bg-gray-900 dark:border-[#045360] border-2 shadow flex md:h-[28rem] h-[24rem] flex-col justify-between p-7 rounded-xl"
        >
          <img src={icon2} alt="icon2" className="md:w-24 w-16" />
          <div>
            <h1 className="md:text-3xl text-2xl mb-4 font-bold">Target</h1>
            <p className="md:text-xl text-md">
              Maqsadli ijtimoiy media va qidiruv kampaniyalari bilan maqsadli
              auditoriyangizga erishing. Maqsadli reklama yordamida
              konversiyalarni oshiring.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="dark:text-white bg-white dark:bg-gray-900 dark:border-[#045360] border-2 shadow flex md:h-[28rem] h-[24rem] flex-col justify-between p-7 rounded-xl"
        >
          <img src={icon3} alt="icon3" className="md:w-24 w-16" />
          <div>
            <h1 className="md:text-3xl text-2xl mb-4 font-bold">
              IT yechimlar
            </h1>
            <p className="md:text-xl text-md">
              Operatsiyalaringizni optimal-lashtirish uchun moslashtirilgan
              texnologik echimlar, jumladan, dasturiy ta'minot va bulutli
              texnologiyalar.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="dark:text-white bg-white dark:bg-gray-900 dark:border-[#045360] border-2 shadow flex md:h-[28rem] h-[24rem] flex-col justify-between p-7 rounded-xl"
        >
          <img src={icon4} alt="icon4" className="md:w-24 w-16" />
          <div>
            <h1 className="md:text-3xl text-2xl mb-4 font-bold">Website</h1>
            <p className="md:text-xl text-md">
              Korporativdan tortib onlayn-do'konlargacha kuchli onlayn mavjudlik
              uchun noyob va funktsional veb-saytlarni yarating.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="dark:text-white bg-white dark:bg-gray-900 dark:border-[#045360] border-2 shadow flex md:h-[28rem] h-[24rem] flex-col justify-between p-7 rounded-xl"
        >
          <img src={icon5} alt="icon5" className="md:w-24 w-16" />
          <div>
            <h1 className="md:text-3xl text-2xl mb-4 font-bold">
              Google & Yandex Reklama
            </h1>
            <p className="md:text-xl text-md">
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
          head={"Target, reklama"}
          body1={7000}
          body2={
            "Bolalar o'yinchoqlar do'koni. Bek media jamoasi va bolalar o'yinchoqlar do'koni jamoasi bilan hamkorlikda, kompaniyaga target, kontekst reklama xizmatlarimizni taqdim etdik."
          }
          img={"/images/oyinchoq.jpg"}
        />
        <Loyiha
          head={"Target, reklama"}
          body1={4500}
          body2={
            "Erkaklar kiyimlari do'koni. Bek media jamoasi va erkaklar kiyimlari do'koni jamoasi bilan hamkorlikda, kompaniyaga target, reklama xizmatlarimizni taqdim etdik."
          }
          img={"/images/erkak-kiyim.jpg"}
        />
        <Loyiha
          head={"Target, reklama"}
          body1={4500}
          body2={
            "Respublika dermatologiya va venerologiya markazi. Bek media jamoasi va dermatologiya va venerologiya markazi jamoasi bilan hamkorlikda, kompaniyaga target, reklama xizmatlarimizni taqdim etdik."
          }
          img={"/images/dermatologiya.jpg"}
        />
        <Loyiha
          head={"Target, reklama"}
          body1={3022}
          body2={
            "Zamonaviy Aksessuarlar. Bek media jamoasi kompaniyaga target, reklama xizmatlarimizni taqdim etdik."
          }
          img={"/images/aksesuarlar2.jpg"}
        />
        <Loyiha
          head={"Target, Kontekst reklama"}
          body1={1500}
          body2={
            "Telefon Oldi sotisi Iphone Samsung. Bek media jamoasi kompaniyaga target, reklama xizmatlarimizni taqdim etdik."
          }
          img={"/images/telefon.jpg"}
        />
        <Loyiha
          head={"Target, reklama"}
          body1={1500}
          body2={
            "Anhor Park. Bek media jamoasi kompaniyaga target, reklama xizmatlarimizni taqdim etdik."
          }
          img={"/images/anhor2.jpg"}
        />
        <Loyiha
          head={"Target, reklama"}
          body1={1000}
          body2={
            "Uybozor. Bek media jamoasi kompaniyaga target, reklama xizmatlarimizni taqdim etdik."
          }
          img={"/images/uzBisnesCard.jpg"}
        />
        <Loyiha
          head={"Target, reklama"}
          body1={899}
          body2={
            "Kosmetolog Dietolog. Bek media jamoasi kompaniyaga target, reklama xizmatlarimizni taqdim etdik."
          }
          img={"/images/kasmetolog.jpg"}
        />
        <Loyiha
          head={"Target, reklama"}
          body1={626}
          body2={
            "O'quvmarkaz It Dasturlash. Bek media jamoasi kompaniyaga target, reklama xizmatlarimizni taqdim etdik."
          }
          img={"/images/itTime.jpg"}
        />
        <Loyiha
          head={"Target, reklama"}
          body1={600}
          body2={
            "Max Power tabiiy tog’ asali. Bek media jamoasi kompaniyaga target, reklama xizmatlarimizni taqdim etdik."
          }
          img={"/images/honey.jpg"}
        />
        <Loyiha
          head={"Target, reklama"}
          body1={500}
          body2={
            "Respublika dermatologiya va venerologiya markazi. Bek media jamoasi kompaniyaga target, reklama xizmatlarimizni taqdim etdik."
          }
          img={"/images/ozdvkm.jpg"}
        />
        <Loyiha
          head={"Target, reklama"}
          body1={494}
          body2={
            "Ayollar kiyimlari. Bek media jamoasi kompaniyaga target, reklama xizmatlarimizni taqdim etdik."
          }
          img={"/images/imanem.jpg"}
        />
        <Loyiha
          head={"Target, reklama"}
          body1={100}
          body2={
            "Stomotolog. Bek media jamoasi kompaniyaga target, reklama xizmatlarimizni taqdim etdik."
          }
          img={"/images/stolotolg3.jpg"}
        />

        <Loyiha
          head={"Target, reklama"}
          body1={89}
          body2={
            "KIPRIK UZAYTIRISH Xizmatlari. Bek media jamoasi kompaniyaga target, reklama xizmatlarimizni taqdim etdik."
          }
          img={"/images/kiprik.jpg"}
        />
      </div>
      <div className="dark:text-white dark:bg-gray-900 dark:border-[#045360] border-2 flex flex-col gap-5 text-center bg-[#F7F7F7] rounded-xl p-5">
        <h2 className="uppercase md:text-5xl text-3xl font-bold">
          bizning mijozlarimiz
        </h2>
        <p className="md:text-xl">Bizga ishonch bildirgan kompaniyalar</p>
        <div className="grid md:grid-cols-4 grid-cols-1 gap-5 place-content-center justify-center">
          <img src="/images/star-remove.png" className="rounded-xl md:p-5 md:h-72  h-60" alt="photo" />
          <img src="/images/uy-removebg-preview.png" className="rounded-xl md:p-5 md:h-72 h-60" alt="photo" />
          <img src="/images/shake_pear-removebg-preview.png" className="rounded-xl md:p-5 md:h-72 h-60" alt="photo" />
          <img src="/images/buxoriy-removebg-preview.png" className="rounded-xl md:p-5 md:h-72 h-60" alt="photo" />
          <img src="/images/yostiq-removebg-preview.png" className="rounded-xl md:p-5 md:h-72 h-60" alt="photo" />
          <img src="/images/oyinchoq.jpg" className="rounded-xl md:p-5 md:h-72 h-60" alt="photo" />
          <img src="/images/erkak-kiyim.jpg" className="rounded-xl md:p-5 md:h-72 h-60" alt="photo" />
          <img src="/images/itTime-removebg-preview.png" className="rounded-xl md:p-5 md:h-72 h-60" alt="photo" />
        </div>
      </div>
    </>
  );
};

export default Section3;
