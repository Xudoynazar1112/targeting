import React, { useState } from "react";
import countryData from "./countries.json"; // Import the JSON file

const Contact = () => {
  const [selectedCountry, setSelectedCountry] = useState(countryData[0]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Handle country selection
  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setDropdownOpen(false); // Close dropdown after selection
  };

  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div id="contact">
      <div className="w-1/2">
        <h1 className="text-[2.5rem] font-semibold mb-10 font-sans">
          Sotuvlaringizni oshirini istaysizmi?{" "}
          <span className="rang">Bepul audit xizmatimizdan foydalaning!</span>
        </h1>
        <p className="text-xl">
          Bizning jamoamiz har doim yangi loyihalarga tayyor, so'rov qoldiring
          va biz tez orada siz bilan bog'lanamiz!
        </p>
      </div>
      <div className="grid grid-cols-4 gap-5 mt-10">
        {/* Name Input */}
        <input
          type="text"
          placeholder="Ismingiz"
          className="p-4 bg-gray-100 rounded-lg outline-none"
        />

        {/* Country Code and Phone Input */}
        <div className="relative">
          {/* Selected Country Display */}
          <div
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center bg-gray-100 p-4 rounded-lg cursor-pointer"
          >
            <img
              src={selectedCountry.flag}
              alt={selectedCountry.name}
              className="w-6 h-6 mr-2"
            />
            <span className="mr-1">{selectedCountry.code}</span>
            <input
              type="tel"
              placeholder="99-999-9999"
              className="outline-none w-2/3 bg-gray-100 flex-grow"
            />
          </div>

          {/* Dropdown Menu */}
          {dropdownOpen && (
            <div className="absolute top-full left-0 bg-white border border-gray-200 rounded-lg mt-2 shadow-lg w-full max-h-60 overflow-y-auto h-32">
              {countryData.map((country) => (
                <div
                  key={country.code}
                  onClick={() => handleCountrySelect(country)}
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

        {/* Business Type Input */}
        <input
          type="text"
          placeholder="Biznesingiz turi"
          className="p-4 bg-gray-100 rounded-lg outline-none"
        />

        {/* Submit Button */}
        <button className="bg-yellow-400 p-4 rounded-lg font-bold">
          YUBORISH
        </button>
      </div>
      <div className="bg-yellow-400 p-5 py-10 mt-5 rounded-xl flex justify-center flex-col items-center gap-10">
        <div className="text-center flex flex-col justify-center items-center gap-2">
          <h1 className="uppercase font-bold">bu muhim</h1>
          <p className="text-2xl w-2/3">
            Aslo pasdagi tugmani bosmang <b>savdolaringiz</b> katta hajimda{" "}
            <b>oshib ketish</b> ehtimoli bor
          </p>
        </div>
        <div>
          <button className="uppercase bg-[#F64226] text-white text-3xl p-7 px-16" onClick={handleToggle}>
            Bosmang
          </button>
          {isOpen && (
            <div
              className="bg-black/50 fixed top-0 right-0 bottom-0 left-0 flex justify-center items-center z-10"
              onClick={handleToggle}
            >
              <div className="bg-white p-5 px-12 w-[35vw] max-h-[90%] overflow-auto">
                <h1 className="uppercase text-4xl text-center mb-10 font-semibold">
                  bosdingizmi - demak:
                </h1>
                <i>
                  <ol className="list-decimal font-semibold font-serif text-sm leading-7 ml-4">
                    <li>Hozirgi savdo hajmi sizni qoniqtirmayapti</li>
                    <li>
                      Hozirgi reklamaga sarflanayotgan pul o’zini qoplamayapti
                    </li>
                    <li>
                      Reklamaga pul ko’paytirayapsiz lekin savdo hajmi
                      ko’paymayapti
                    </li>
                    <li>
                      Sizning Businessingiz taniqliligi sizni qoniqtirmayapti
                      ...
                    </li>
                  </ol>
                </i>
                <p className="text-red-600 font-semibold font-serif text-sm mt-5 leading-6">
                  Bu ro’yxatni juda uzoq davom ettirsak bo’ladi! Agar tepada
                  sanab o’tilgan va ularga o’xshagan muammolar bo’lsa Yechim
                  sababchisi bo’lishga tayyormiz!
                </p>
                <div className="mt-10 flex flex-col gap-5">
                  {/* Name Input */}
                  <input
                    type="text"
                    placeholder="Ismingiz"
                    className="p-4 w-full rounded-lg outline-none border"
                  />

                  {/* Country Code and Phone Input */}
                  <div className="relative">
                    {/* Selected Country Display */}
                    <div
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className="flex items-center border p-4 rounded-lg cursor-pointer"
                    >
                      <img
                        src={selectedCountry.flag}
                        alt={selectedCountry.name}
                        className="w-6 h-6 mr-2"
                      />
                      <span className="mr-1">{selectedCountry.code}</span>
                      <input
                        type="tel"
                        placeholder="99-999-9999"
                        className="outline-none w-2/3 flex-grow"
                      />
                    </div>

                    {/* Dropdown Menu */}
                    {dropdownOpen && (
                      <div className="absolute top-full left-0 bg-white border border-gray-200 rounded-lg mt-2 shadow-lg w-full max-h-60 overflow-y-auto h-32">
                        {countryData.map((country) => (
                          <div
                            key={country.code}
                            onClick={() => handleCountrySelect(country)}
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

                  {/* Business Type Input */}
                  <input
                    type="text"
                    placeholder="Biznesingiz turi"
                    className="p-4 border w-full rounded-lg outline-none"
                  />

                  {/* Submit Button */}
                  <button className="bg-yellow-400 p-4 rounded-lg font-bold">
                    ARIZA YUBORISH
                  </button>
                </div>
                <p className="text-center mt-5">Hoziroq biz bilan bog’laning!</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
