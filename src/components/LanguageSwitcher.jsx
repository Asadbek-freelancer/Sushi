import { useState } from "react";

const LanguageSwitcher = () => {
  const [currentLang, setCurrentLang] = useState("RU");
  const [showFlags, setShowFlags] = useState(false);

  const toggleFlags = () => setShowFlags(prev => !prev);

  const switchLang = () => {
    setCurrentLang(currentLang === "RU" ? "EN" : "RU");
    setShowFlags(false); // скрываем список после выбора
  };

  return (
    <div className="relative mt-2">
      {/* Верхний активный язык */}
      <div className="lang flex gap-2 items-center">
        {currentLang === "RU" ? (
          <>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/1280px-Flag_of_Russia.svg.png"
              alt="russian flag"
              className="w-8 cursor-pointer"
            />
            <h2 className="cursor-pointer">RU</h2>
          </>
        ) : (
          <>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/2560px-Flag_of_the_United_States.svg.png"
              alt="american flag"
              className="w-8 cursor-pointer"
            />
            <h2 className="cursor-pointer">EN</h2>
          </>
        )}
        <img
          src="/icons/Vector.svg"
          alt="Toggle"
          className={`cursor-pointer transition-transform duration-200 ${
            showFlags ? "rotate-180" : "rotate-0"
          }`}
          onClick={toggleFlags}
        />
      </div>

      {/* Выпадающее меню с альтернативным языком */}
      <div
        className={`flex gap-2 mt-3 transition-all duration-300 overflow-hidden ${
          showFlags ? "opacity-100 scale-100 max-h-40" : "opacity-0 scale-95 max-h-0"
        }`}
      >
        {currentLang === "RU" ? (
          <>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/2560px-Flag_of_the_United_States.svg.png"
              alt="american flag"
              className="w-8 cursor-pointer"
              onClick={switchLang}
            />
            <h2 className="cursor-pointer" onClick={switchLang}>
              EN
            </h2>
          </>
        ) : (
          <>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/1280px-Flag_of_Russia.svg.png"
              alt="russian flag"
              className="w-8 cursor-pointer"
              onClick={switchLang}
            />
            <h2 className="cursor-pointer" onClick={switchLang}>
              RU
            </h2>
          </>
        )}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
