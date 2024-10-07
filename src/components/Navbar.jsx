import React from "react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import LeafUp from "../../public/assets/img/leaf-up.png";
import LeafDown from "../../public/assets/img/leaf-down.png";
import { useState } from "react";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  // untuk handle navbar
  const handleClick = () => {
    setNavbarOpen(!navbarOpen);
    console.log("navbarOpen", navbarOpen);
  };

  const showNavbar = () => {
    return navbarOpen ? "left-0" : "-left-full";
  };

  return (
    <header className="fixed w-full top-0 left-0 z-50">
      <nav className="container flex items-center justify-between h-16 mt-1 md:mt-0 md:mx-auto">
        <h1 className="text-2xl text-white mx-6 md:mx-0 italic tracking-widest">
          Plantify
        </h1>
        <div
          className={`navbar-box absolute top-0 ${showNavbar()} min-h-screen w-full bg-green-950/80 backdrop-blur-sm flex items-center justify-center transition-all duration-300 md:static md:min-h-fit md:w-auto md:bg-transparent`}
        >
          <ul className="flex flex-col gap-10 text-white text-center text-xl md:flex-row mx-6">
            <li className="hover:text-yellow-400">Home</li>
            <li className="hover:text-yellow-400">About</li>
            <li className="hover:text-yellow-400">Popular</li>
            <li className="hover:text-yellow-400">Review</li>
          </ul>
          <div className="absolute top-0 left-[-20px] opacity-90 md:hidden">
            <img src={LeafUp} alt="leaf-up" className="w-44" />
          </div>
          <div
            className={`absolute bottom-[-10px] ${
              navbarOpen ? "right-[-20px]" : "right-0"
            } opacity-90 md:hidden`}
          >
            <img src={LeafDown} alt="leaf-down" className="w-44" />
          </div>
        </div>
        {navbarOpen ? (
          <XMarkIcon
            Bars3BottomRightIcon
            className="w-8 mx-6 cursor-pointer text-white z-50 md:hidden"
            onClick={handleClick}
          />
        ) : (
          <Bars3BottomRightIcon
            className="w-8 mx-6 cursor-pointer text-white z-50 md:hidden"
            onClick={handleClick}
          />
        )}
      </nav>
    </header>
  );
};

export default Navbar;
