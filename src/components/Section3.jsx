import React from "react";
import icon1 from "/src/assets/icon1.png";
import icon2 from "/src/assets/icon2.png";
import icon3 from "/src/assets/icon3.png";
import icon4 from "/src/assets/icon4.png";
import icon5 from "/src/assets/icon5.png";

const Loyiha = ({direc, bg}) => {
  return (
    <div
      className="relative w-full h-80 bg-cover bg-center rounded-xl"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* White to transparent gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-r ${direc ? 'from-white via-white/90 to-transparent' : 'from-transparent via-white/90 to-white'}`}></div>

      {/* Content above the overlay */}
      <div className={`relative z-10 flex ${direc ? 'justify-start' : 'justify-end'} items-center h-full`}>
        <div className="flex flex-col gap-5 w-1/2">
          <p className="font-bold text-xl">
            Respublika dermatologiya va venerologiya markazi
          </p>
          <p>
            Terining sog‘lig‘i va go‘zalligiga bag‘ishlangan professional
            xizmatlar.
          </p>
          <div className="flex gap-5">
            <div>
              <p className="text-2xl font-bold">0.35$</p>
              <p>Murojatchilar narxi</p>
            </div>
            <div>
              <p className="text-2xl font-bold">4500</p>
              <p>Murojatlar soni</p>
            </div>
          </div>
          <a
            href="#conatact"
            className="py-1 px-3 bg-none border rounded-2xl hover:bg-[#FEC901] hover:text-black w-36 text-center transition-all"
          >
            Murojat qiling
          </a>
        </div>
      </div>
    </div>
  );
};

const Section3 = () => {
  return (
    <>
      <div className="grid md:grid-cols-3 grid-cols-2 gap-5">
        <div className="uppercase">
          <div className="flex">
            <img
              src="https://static.tildacdn.one/tild6563-3462-4635-b561-623233646531/1.svg"
              alt="svg"
              className="w-6 mr-5"
            />
            <p className="text-[#81A9AF] font-bold">Biz nimalar qila olamiz</p>
          </div>
          <p className="text-4xl leading-relaxed font-bold font-serif">
            6 yildan beri kun u tun nima qilamiz:
          </p>
        </div>
        <div className="shadow flex h-[28rem] flex-col justify-between p-7 rounded-xl">
          <img src={icon1} alt="icon1" className="w-24" />
          <div>
            <h1 className="text-3xl mb-4 font-bold">Digital Marketing</h1>
            <p>
              Ijtimoiy media, kontent va qidiruv tizimini optimallashtirish kabi
              keng qamrovli marketing strategiyalari bilan onlayn
              salohiyatingizni maksimal darajada oshirish.
            </p>
          </div>
        </div>
        <div className="shadow flex h-[28rem] flex-col justify-between p-7 rounded-xl">
          <img src={icon2} alt="icon2" className="w-24" />
          <div>
            <h1 className="text-3xl mb-4 font-bold">Target</h1>
            <p>
              Maqsadli ijtimoiy media va qidiruv kampaniyalari bilan maqsadli
              auditoriyangizga erishing. Maqsadli reklama yordamida
              konversiyalarni oshiring.
            </p>
          </div>
        </div>
        <div className="shadow flex h-[28rem] flex-col justify-between p-7 rounded-xl">
          <img src={icon3} alt="icon3" className="w-24" />
          <div>
            <h1 className="text-3xl mb-4 font-bold">IT yechimlar</h1>
            <p>
              Operatsiyalaringizni optimal-lashtirish uchun moslashtirilgan
              texnologik echimlar, jumladan, dasturiy ta'minot va bulutli
              texnologiyalar.
            </p>
          </div>
        </div>
        <div className="shadow flex h-[28rem] flex-col justify-between p-7 rounded-xl">
          <img src={icon4} alt="icon4" className="w-24" />
          <div>
            <h1 className="text-3xl mb-4 font-bold">Website</h1>
            <p>
              Korporativdan tortib onlayn-do'konlargacha kuchli onlayn mavjudlik
              uchun noyob va funktsional veb-saytlarni yarating.
            </p>
          </div>
        </div>
        <div className="shadow flex h-[28rem] flex-col justify-between p-7 rounded-xl">
          <img src={icon5} alt="icon5" className="w-24" />
          <div>
            <h1 className="text-3xl mb-4 font-bold">Google & Yandex Reklama</h1>
            <p>
              Maqsadli auditoriyangizni jalb qilib, samarali Google va Yandex
              kompaniyalar yordamida brendingizning ko'rinishini maksimal
              darajada oshiring.
            </p>
          </div>
        </div>
      </div>
      <h1 className="text-center uppercase font-semibold">Loyihalar</h1>
      <div className="flex flex-col gap-7">
        <Loyiha direc={true} bg={"/src/assets/ahaaqayum2.jpg"}/>
        <Loyiha direc={false} bg={'/src/assets/aksesuarlar2.jpg'}/>
        <Loyiha direc={true} bg={"/src/assets/anhor2.jpg"}/>
        <Loyiha direc={false} bg={'/src/assets/dermatologiya.jpg'}/>
        <Loyiha direc={true} bg={"/src/assets/honey.jpg"}/>
        <Loyiha direc={false} bg={'/src/assets/imanem.jpg'}/>
        <Loyiha direc={true} bg={"/src/assets/itTime.jpg"}/>
        <Loyiha direc={false} bg={'/src/assets/kasmetolog.jpg'}/>
        <Loyiha direc={true} bg={"/src/assets/ozdvkm.jpg"}/>
        <Loyiha direc={false} bg={'/src/assets/stolotolg3.jpg'}/>
        <Loyiha direc={true} bg={"/src/assets/telefon.jpg"}/>
        <Loyiha direc={false} bg={'/src/assets/uzBisnesCard.jpg'}/>
      </div>
    </>
  );
};

export default Section3;
