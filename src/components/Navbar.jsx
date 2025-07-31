import { useState } from "react";
import { Link, NavLink } from "react-router";
import LanguageSwitcher from "./LanguageSwitcher";
import Alert from "../sections/Alert";

const Navbar = () => {
  const [showVariants, setShowVariants] = useState(false);
 

  const toggleVariants = () => {
    setShowVariants((prev) => !prev);
  };

 
const navItems = [
  { name: "главная", path: "/" },
  { name: "Доставка", path: "/delivery" },
  { name: "О нас", path: "/about" },
  { name: "Новости", path: "/news" },
];
  

  return (
    <div className="navbar p-4 me-24 ms-24 ">
      <div className="">
        
      </div>
      {/* Верхняя панель */}
      <div className="flex items-center gap-11 bg-white rounded-xl pe-7 ps-4 pb-5 pt-5">
        <div className="flex items-center gap-2">

      
        <img className="cursor-pointer w-48" src="/images/logo.png" alt="Logo" />
        <div
          className="bg-gray-300 w-8 rounded-[8px] flex justify-center cursor-pointer"
          onClick={toggleVariants}
        >
          <img src="/icons/Vector.svg" alt="Toggle Menu" className={`m-3  ${showVariants ? 'rotate-180' : 'rotate-0'} `} />
        </div>
  </div>
         
      <LanguageSwitcher />
       <div className="flex gap-10">
    {navItems.map((item) =>(
 
    <NavLink 
    key={item.path}
    to={item.path} 
    className={({ isActive }) =>
      `text-[16px] ${isActive ? "text-amber-500": "text-gray-950"}`}>
        <h3>{item.name}</h3>
      </NavLink>
    ))}
   </div>
      <div className="flex items-center gap-2">
    <img src="../../icons/phone.svg" alt="" />
    <a href="tel: +380976993438" className="text-gray-950 hover:underline hover:text-blue-800">
      +38 097 699 34 38
    </a>
      </div>
      <div className="flex gap-2">
        <Link to="/alert">
        <div className="border-2 border-gray-300 rounded-md p-2 cursor-pointer">
          <img src="../../icons/bell.svg" alt="" />
        </div>
        </Link>
        <Link to="/like">
        <div className="border-2 border-gray-300 rounded-md p-2 cursor-pointer">
          <img src="../../icons/heart.svg" alt="" />
        </div>
        </Link>
         <Link to="/profile">
        <div className="border-2 border-gray-300 rounded-md p-2 cursor-pointer">
          <img src="../../icons/profile.svg" alt="" />
        </div>
       </Link>
       <Link to="/buscket">
        <div className="flex items-center gap-1 border-2 border-gray-300 rounded-md p-2 cursor-pointer">
          <h3 className="text-gray-500">Корзина</h3>
          <img src="../../icons/Иконка.svg" alt="" />
        </div>
       </Link>
        
      </div>
      </div>
      {/* Варианты меню */}
      <div
        className={`brand flex items-center mt-2 gap-3 transition-all duration-300 ease-in-out overflow-hidden ${
          showVariants ? 'opacity-100 scale-100 max-h-40' : 'opacity-0 scale-95 max-h-0'
        }`}
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            `p-2 rounded-lg cursor-pointer transition ${
              isActive ? "bg-gray-300 w-16 h-16" : "bg-white"
            }`
          }
        >
          <img src="/icons/NinjaSushi.svg" alt="Ninja Sushi" />
        </NavLink>

        <NavLink
          to="/Wok"
          className={({ isActive }) =>
            `p-2 rounded-lg cursor-pointer transition ${
              isActive ? "bg-gray-300 w-16 h-16" : "bg-white"
            }`
          }
        >
          <img src="/icons/NInjaWok.svg" alt="Ninja Wok" />
        </NavLink>

        <NavLink
          to="/Pizza"
          className={({ isActive }) =>
            `p-2 rounded-lg cursor-pointer transition ${
              isActive ? "bg-gray-300 w-16 h-16" : "bg-white"
            }`
          }
        >
          <img src="/icons/NInjaPizza.svg" alt="Ninja Pizza" />
        </NavLink>
      </div>
   
 
    </div>
  );
};

export default Navbar;
