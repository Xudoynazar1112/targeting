import React from "react";
import icon1 from "/src/assets/icon1.png";
import icon2 from "/src/assets/icon2.png";
import icon3 from "/src/assets/icon3.png";
import icon4 from "/src/assets/icon4.png";
import icon5 from "/src/assets/icon5.png";

const Loyiha = ({ direc, bg, head, body, price, count }) => {
  return (
    <div
      className="relative w-full h-80 bg-cover bg-center rounded-xl text-white px-5"
      style={{ backgroundImage: `url(${bg})` }} data-aos="fade-up"
    >
      {/* White to transparent gradient overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-r ${
          direc
            ? "from-black via-vlack/70 to-transparent"
            : "from-transparent via-black/70 to-black"
        }`}
      ></div>

      {/* Content above the overlay */}
      <div
        className={`relative z-10 flex ${
          direc ? "justify-start" : "justify-end"
        } items-center h-full`}
      >
        <div className="flex flex-col md:gap-5 gap-1 w-1/2">
          <p className="font-bold md:text-xl leading-5 text-lg">{head}</p>
          <p className="md:text-base text-[8px] leading-tight">{body}</p>
          <div className="flex gap-5">
            <div>
              <p className="text-2xl font-bold">{price}</p>
              <p className="md:text-base text-[8px]">Murojatchilar narxi</p>
            </div>
            <div>
              <p className="text-2xl font-bold">{count}</p>
              <p className="md:text-base text-[8px]">Murojatlar soni</p>
            </div>
          </div>
          <a
            href="#contact"
            className="py-1 px-3 md:text-base text-sm bg-none border rounded-2xl hover:bg-[#FEC901] text-white hover:text-black w-36 text-center transition-all"
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
        <div data-aos="fade-up" className="shadow flex md:h-[28rem] h-[20rem] flex-col justify-between p-7 rounded-xl">
          <img src={icon1} alt="icon1" className="md:w-24 w-14" />
          <div>
            <h1 className="md:text-3xl text-xl mb-4 font-bold">
              Digital Marketing
            </h1>
            <p className="md:text-base text-[8px]">
              Ijtimoiy media, kontent va qidiruv tizimini optimallashtirish kabi
              keng qamrovli marketing strategiyalari bilan onlayn
              salohiyatingizni maksimal darajada oshirish.
            </p>
          </div>
        </div>
        <div data-aos="fade-up" className="shadow flex md:h-[28rem] h-[20rem] flex-col justify-between p-7 rounded-xl">
          <img src={icon2} alt="icon2" className="md:w-24 w-14" />
          <div>
            <h1 className="md:text-3xl text-xl mb-4 font-bold">Target</h1>
            <p className="md:text-base text-[8px]">
              Maqsadli ijtimoiy media va qidiruv kampaniyalari bilan maqsadli
              auditoriyangizga erishing. Maqsadli reklama yordamida
              konversiyalarni oshiring.
            </p>
          </div>
        </div>
        <div data-aos="fade-up" className="shadow flex md:h-[28rem] h-[20rem] flex-col justify-between p-7 rounded-xl">
          <img src={icon3} alt="icon3" className="md:w-24 w-14" />
          <div>
            <h1 className="md:text-3xl text-xl mb-4 font-bold">IT yechimlar</h1>
            <p className="md:text-base text-[8px]">
              Operatsiyalaringizni optimal-lashtirish uchun moslashtirilgan
              texnologik echimlar, jumladan, dasturiy ta'minot va bulutli
              texnologiyalar.
            </p>
          </div>
        </div>
        <div data-aos="fade-up" className="shadow flex md:h-[28rem] h-[20rem] flex-col justify-between p-7 rounded-xl">
          <img src={icon4} alt="icon4" className="md:w-24 w-14" />
          <div>
            <h1 className="md:text-3xl text-xl mb-4 font-bold">Website</h1>
            <p className="md:text-base text-[8px]">
              Korporativdan tortib onlayn-do'konlargacha kuchli onlayn mavjudlik
              uchun noyob va funktsional veb-saytlarni yarating.
            </p>
          </div>
        </div>
        <div data-aos="fade-up" className="shadow flex md:h-[28rem] h-[20rem] flex-col justify-between p-7 rounded-xl">
          <img src={icon5} alt="icon5" className="md:w-24 w-14" />
          <div>
            <h1 className="md:text-3xl text-xl mb-4 font-bold">
              Google & Yandex Reklama
            </h1>
            <p className="md:text-base text-[8px]">
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
          direc={true}
          bg={"/src/assets/ahaaqayum2.jpg"}
          head={"Ahad Qayum Producer Actor"}
          body={
            "O'zbek kinosi namoyondalaridan Ahad Qayum ham bizni tavsiya qiladi"
          }
          price={"0.006$"}
          count={25000}
        />
        <Loyiha
          direc={false}
          bg={"/src/assets/aksesuarlar2.jpg"}
          head={"Zamonaviy Aksessuarlar"}
          body={"Zamonaviy aksessuar xizmatlari"}
          price={"0.10$"}
          count={3022}
        />
        <Loyiha
          direc={true}
          bg={"/src/assets/anhor2.jpg"}
          head={"Anhor Park"}
          body={
            "Toshkentdagi eng katta istirohat bog‘laridan biri bo‘lib, ochiq havoda joylashgan va yil davomida faoliyat yuritadi"
          }
          price={"0.17$"}
          count={1500}
        />
        <Loyiha
          direc={false}
          bg={"/src/assets/dermatologiya.jpg"}
          head={"Respublika dermatologiya va venerologiya markazi"}
          body={
            "Terining sog‘lig‘i va go‘zalligiga bag‘ishlangan professional xizmatlar."
          }
          price={"0.35$"}
          count={4500}
        />
        <Loyiha
          direc={true}
          bg={"/src/assets/honey.jpg"}
          head={"Max Power tabiiy tog’ asali"}
          body={"Sifatli asal xizmatlari va max power tabiiy tog’ asali"}
          price={"1$"}
          count={600}
        />
        <Loyiha
          direc={false}
          bg={"/src/assets/imanem.jpg"}
          head={"Ayollar kiyimlari"}
          body={"Istalgan turdagi ayollar kiyimlari"}
          price={"0.33$"}
          count={494}
        />
        <Loyiha
          direc={true}
          bg={"/src/assets/itTime.jpg"}
          head={"O'quvmarkaz It Dasturlash"}
          body={"Ko'p yillik tajribaga ega ustozlardan o'quv"}
          price={"0.32$"}
          count={626}
        />
        <Loyiha
          direc={false}
          bg={"/src/assets/kasmetolog.jpg"}
          head={"Kosmetolog Dietolog"}
          body={"Kosmetolog va dietitologiya bo'yicha mutahasis"}
          price={"0.12$"}
          count={899}
        />
        <Loyiha
          direc={true}
          bg={"/src/assets/ozdvkm.jpg"}
          head={"Respublika dermatologiya va venerologiya markazi"}
          body={
            "Terining sog‘lig‘i va go‘zalligiga bag‘ishlangan professional xizmatlar."
          }
          price={"0.17$"}
          count={500}
        />
        <Loyiha
          direc={false}
          bg={"/src/assets/stolotolg3.jpg"}
          head={"Stomotolog"}
          body={"Stomotolog va pediatr xizmatlari"}
          price={"0.55$"}
          count={100}
        />
        <Loyiha
          direc={true}
          bg={"/src/assets/telefon.jpg"}
          head={"Telefon Oldi sotisi Iphone Samsung"}
          body={"Har hil turdagi telefonlar oldi sotdisi"}
          price={"0.17$"}
          count={1500}
        />
        <Loyiha
          direc={false}
          bg={"/src/assets/uzBisnesCard.jpg"}
          head={"Uybozor"}
          body={"Qulay va zamonaviy uylar sizni kutmoqda!"}
          price={"0.33$"}
          count={1000}
        />
      </div>
    </>
  );
};

export default Section3;
