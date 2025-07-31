# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


{/*  <div className="">

 <div className="lang flex gap-2">
     <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/1280px-Flag_of_Russia.svg.png" alt="russian flag" className="w-8 cursor-pointer" />
     <h2 className="cursor-pointer">RU</h2>
     <img src="/icons/Vector.svg" alt="Language Icon" className={`cursor-pointer ${showFlags ? 'rotate-180' : 'rotate-0'}`}  onClick={variants}/>
 </div>
 <div className={`flex gap-2 mt-3 ` + (showFlags ? 'opacity-100 scale-100 max-h-40' : 'opacity-0 scale-95 max-h-0')}>
     <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/2560px-Flag_of_the_United_States.svg.png" alt="american flag" className="w-8 cursor-pointer" />   
  <h2 className="cursor-pointer">EN</h2>
 </div>
 </div> */}















 import { useState } from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const [showVariants, setShowVariants] = useState(false);
  const [showFlags, setShowFlags] = useState(false);
  

  const toggleVariants = () => {
    setShowVariants((prev) => !prev);
  };
  const variants = () => {
    setShowFlags((prev) => !prev);
  };

  return (
    <div className="navbar p-4 me-24 ms-24 ">
      <div className="flex items-center ">

      {/* Верхняя панель */}
      <div className="flex items-center gap-1.5 bg-white rounded-xl pe-7 ps-4 pb-5 pt-5">
        <div className="">
          
        </div>
        <img className="cursor-pointer" src="/images/logo.png" alt="Logo" />
        <div
          className="bg-gray-300 w-8 rounded-[8px] flex justify-center cursor-pointer"
          onClick={toggleVariants}
        >
          <img src="/icons/Vector.svg" alt="Toggle Menu" className={`m-3  ${showVariants ? 'rotate-180' : 'rotate-0'} `} />
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
      <div className="">

      <div className="lang flex gap-2">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/1280px-Flag_of_Russia.svg.png" alt="russian flag" className="w-8 cursor-pointer" />
          <h2 className="cursor-pointer">RU</h2>
          <img src="/icons/Vector.svg" alt="Language Icon" className={`cursor-pointer ${showFlags ? 'rotate-180' : 'rotate-0'}`}  onClick={variants}/>
      </div>
      <div className={`flex gap-2 mt-3 ` + (showFlags ? 'opacity-100 scale-100 max-h-40' : 'opacity-0 scale-95 max-h-0')}>
          <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/2560px-Flag_of_the_United_States.svg.png" alt="american flag" className="w-8 cursor-pointer" />   
       <h2 className="cursor-pointer">EN</h2>
      </div>
      </div>
          </div>
          </div>
    </div>
  );
};

export default Navbar;
