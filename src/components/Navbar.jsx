import React from "react";
import LeafUp from "../../public/assets/img/leaf-up.png";
import LeafDown from "../../public/assets/img/leaf-down.png";
import { useState, useEffect } from "react";

const Navbar = () => {
  // untuk handle navbar
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleClick = () => {
    setNavbarOpen(!navbarOpen);
  };
  const showNavbar = () => {
    return navbarOpen ? "left-0" : "-left-full";
  };

  // untuk menambahkan decoration navbar ketika di scroll
  const [scrollY, setScrollY] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 3) {
        setScrollY(true);
      } else {
        setScrollY(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const showDecoration = scrollY ? "border-b border-yellow-500" : "";

  // active link
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        // cek apakah posisi scroll berada dalam jangkauan section
        if (
          window.scrollY >= sectionTop - sectionHeight / 3 &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          currentSection = section.getAttribute("id");
        }
      });

      // update activeLink dengan section yang sedang active
      setActiveLink(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 bg-green-950 ${showDecoration}`}
    >
      <nav className="navbar flex items-center justify-between h-16 mt-1 px-7 md:px-20 md:mt-0">
        <h1 className="text-2xl text-white italic tracking-widest">Plantify</h1>
        <div
          className={`navbar-box absolute top-0 ${showNavbar()} min-h-screen w-full bg-green-950/80 backdrop-blur-sm flex items-center justify-center transition-all duration-300 md:static md:min-h-fit md:w-auto md:bg-transparent`}
        >
          <ul className="flex flex-col gap-10 text-white text-center text-xl md:mx-0 lg:mx-14 md:flex-row">
            {/* gunakan map */}
            {["home", "about", "popular", "testimoni"].map((s, index) => {
              return (
                <li
                  key={index}
                  className={`hover:text-yellow-400 ${
                    activeLink === s ? "text-yellow-400" : ""
                  }`}
                >
                  <a
                    href={`#${s}`}
                    onClick={() => {
                      // tutup navbar setelah di klik
                      handleClick();
                      // set active link ke section
                      setActiveLink(s);
                    }}
                  >
                    {/* untuk nama nya sesuaikan dengan id */}
                    {s.charAt(0).toUpperCase() + s.slice(1)}
                  </a>
                </li>
              );
            })}
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
          <i
            className="ri-close-fill text-white text-3xl cursor-pointer z-50 md:hidden"
            onClick={handleClick}
          ></i>
        ) : (
          <i
            className="ri-menu-3-fill text-white text-3xl cursor-pointer z-50 md:hidden"
            onClick={handleClick}
          ></i>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
