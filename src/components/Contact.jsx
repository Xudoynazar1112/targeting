import React, { useState, useMemo } from "react";
import countryData from "./countries.json";
import axios from "axios";
import { toast } from "react-toastify";

const CountryDropdown = ({
  selectedCountry,
  onSelect,
  dropdownOpen,
  toggleDropdown,
}) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    setPhoneNumber(value);

    // Phone validation: only allow 7 digits as per placeholder
    const phoneRegex = /^\d{9}$/; // 7 digits only
    if (!phoneRegex.test(value)) {
      setPhoneError("Phone number must be exactly 9 digits.");
    } else {
      setPhoneError(""); // Clear error if valid
    }
  };

  return (
    <div className="relative">
      <div className="flex items-center bg-gray-100 p-4 rounded-lg cursor-pointer">
        <div onClick={toggleDropdown} className="flex items-center">
          <img
            src={selectedCountry.flag}
            alt={selectedCountry.name}
            className="w-6 h-6 mr-2"
          />
          <span className="mr-1" id="code">
            {selectedCountry.code}
          </span>
        </div>
        <input
          required
          type="text"
          id="phone"
          name="phone"
          minLength={9}
          maxLength={9}
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          placeholder="99-999-9999"
          className="outline-none w-2/3 bg-gray-100 flex-grow"
        />
      </div>
      {phoneError && <p className="text-red-500 text-sm mt-1">{phoneError}</p>}
      {dropdownOpen && (
        <div className="absolute top-full left-0 bg-white border border-gray-200 rounded-lg mt-2 shadow-lg w-full max-h-60 overflow-y-auto">
          {countryData.map((country) => (
            <div
              key={country.code}
              onClick={() => onSelect(country)}
              className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
            >
              <img
                src={country.flag}
                alt={country.name}
                className="w-6 h-6 mr-2"
              />
              <span>{country.name}</span>
              <span className="ml-auto">{country.code}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Contact = () => {
  const [selectedCountry, setSelectedCountry] = useState(countryData[0]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const toggleModal = () => setModalOpen(!modalOpen);

  const countrySelectHandler = (country) => {
    setSelectedCountry(country);
    setDropdownOpen(false);
  };

  const renderCountryDropdown = useMemo(
    () => (
      <CountryDropdown
        selectedCountry={selectedCountry}
        onSelect={countrySelectHandler}
        dropdownOpen={dropdownOpen}
        toggleDropdown={toggleDropdown}
      />
    ),
    [selectedCountry, dropdownOpen]
  );

  const closeModalOnOutsideClick = (e) => {
    e.stopPropagation();
    setModalOpen(false);
  };

  const [loading, setLoading] = useState(false);

  const SendMessage = (event) => {
    setLoading(true);
    event.preventDefault();
    const token = "7839782206:AAHj7nvJd5DbXGLrjKtAHrjJjfcEbSQJ3rc";
    const chat_id = -1002357634205;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const name = document.getElementById("name").value;
    const code = document.getElementById("code").textContent;
    const phone = document.getElementById("phone").value;
    const business = document.getElementById("business").value;
    const message = `Yangi xabar: \nIsm: ${name} \nTelefon: ${code}${phone} \nBiznes: ${business}`;
    console.log(code);

    // if (phoneError) {
    //   toast.error("Please fix validation errors before submitting.");
    //   setLoading(false);
    //   return;
    // }

    axios({
      url: url,
      method: "POST",
      data: {
        chat_id: chat_id,
        text: message,
      },
    })
      .then((res) => {
        toast.success("Muvaffaqiyatli yuborildi");
        document.getElementById("forma").reset();
      })
      .catch((error) => {
        console.error("Xatolik bor:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div id="contact">
      <div data-aos="fade-up" className="md:w-1/2 w-full">
        <h1 className="md:text-[2.5rem] text-3xl font-semibold mb-10 font-sans leading-10">
          Sotuvlaringizni oshirini istaysizmi?{" "}
          <span className="rang">Bepul audit xizmatimizdan foydalaning!</span>
        </h1>
        <p className="text-xl">
          Bizning jamoamiz har doim yangi loyihalarga tayyor, so'rov qoldiring
          va biz tez orada siz bilan bog'lanamiz!
        </p>
      </div>
      <div data-aos="fade-up" className="mb-52">
        <form
          id="forma"
          onSubmit={SendMessage}
          className="grid md:grid-cols-4 grid-cols-1 gap-5 mt-10"
        >
          <input
            type="text"
            required
            id="name"
            name="name"
            placeholder="Ismingiz"
            className="p-4 bg-gray-100 rounded-lg outline-none"
          />
          {renderCountryDropdown}
          <input
            type="text"
            required
            id="business"
            name="business"
            placeholder="Biznesingiz turi"
            className="p-4 bg-gray-100 rounded-lg outline-none"
          />
          <button
            disabled={loading}
            className="bg-yellow-400 p-4 rounded-lg font-bold"
          >
            {loading ? "Yuborilmoqda..." : "YUBORISH"}
          </button>
        </form>
      </div>
      <div
        data-aos="fade-up"
        className="bg-yellow-400 p-5 py-10 mt-5 rounded-xl flex justify-center flex-col items-center gap-10"
      >
        <div className="text-center flex flex-col justify-center items-center gap-2">
          <h1 className="uppercase font-bold md:text-6xl text-4xl">bu muhim</h1>
          <p className="md:text-2xl text-xl md:w-2/3 w-full">
            Aslo pasdagi tugmani bosmang <b>savdolaringiz</b> katta hajimda{" "}
            <b>oshib ketish</b> ehtimoli bor
          </p>
        </div>
        <button
          className="uppercase bg-[#F64226] text-white text-3xl p-7 px-16"
          onClick={toggleModal}
        >
          Bosmang
        </button>
        {modalOpen && (
          <div
            className="bg-black/50 fixed top-0 right-0 bottom-0 left-0 flex justify-center items-center z-10"
            onClick={closeModalOnOutsideClick}
          >
            <div
              className="bg-white p-5 md:px-12 px-5 md:w-[35vw] w-[90vw] max-h-[90%] overflow-auto"
              onClick={(e) => e.stopPropagation()} // Prevents modal close on content click
            >
              <h1 className="uppercase text-4xl text-center mb-10 font-semibold">
                bosdingizmi - demak:
              </h1>
              <ol className="list-decimal font-semibold font-serif text-sm leading-7 ml-4">
                <li>Hozirgi savdo hajmi sizni qoniqtirmayapti</li>
                <li>
                  Hozirgi reklamaga sarflanayotgan pul o’zini qoplamayapti
                </li>
                <li>
                  Reklamaga pul ko’paytirayapsiz lekin savdo hajmi ko’paymayapti
                </li>
                <li>
                  Sizning Businessingiz taniqliligi sizni qoniqtirmayapti...
                </li>
              </ol>
              <p className="text-red-600 font-semibold font-serif text-sm mt-5 leading-6">
                Bu ro’yxatni juda uzoq davom ettirsak bo’ladi! Agar tepada sanab
                o’tilgan va ularga o’xshagan muammolar bo’lsa Yechim sababchisi
                bo’lishga tayyormiz!
              </p>
              <div>
                <form
                  id="forma"
                  onSubmit={SendMessage}
                  className="mt-10 flex flex-col gap-5"
                >
                  <input
                    type="text"
                    required
                    id="name"
                    name="name"
                    placeholder="Ismingiz"
                    className="p-4 bg-gray-100 rounded-lg outline-none"
                  />
                  {renderCountryDropdown}
                  <input
                    type="text"
                    required
                    id="business"
                    name="business"
                    placeholder="Biznesingiz turi"
                    className="p-4 bg-gray-100 rounded-lg outline-none"
                  />
                  <button
                    disabled={loading}
                    className="bg-yellow-400 p-4 rounded-lg font-bold"
                  >
                    {loading ? "Yuborilmoqda..." : "YUBORISH"}
                  </button>
                </form>
              </div>
              <p className="text-center mt-5">Hoziroq biz bilan bog’laning!</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
