import React from "react";
import Logo from "../../public/assets/img/logo.png";
import Floral from "../../public/assets/img/floral.png";

const Footer = () => {
  return (
    <footer className="bg-yellow-100 relative">
      <div className="w-3/4 lg:container absolute top-0 right-0 left-0 mx-auto -translate-y-1/2 bg-green-900 text-white px-10 pt-5 pb-10 space-y-1 rounded-xl">
        <h1 className="text-3xl text-kanit mb-5">
          <span className="text-yellow-500">Subscribe</span> to our newsletter
        </h1>
        <div className="flex justify-between flex-col md:flex-row gap-3">
          <input
            type="text"
            placeholder="Enter your email"
            className="w-full border border-green-900 px-5 py-2 rounded-md text-kanit text-lg text-black"
          />
          <button className="text-white border bg-green-950 bg-opacity-75 border-green-950 py-2 px-5 rounded-md w-full md:mx-2 md:w-auto">
            Subscribe
          </button>
        </div>
      </div>
      <div className="pt-44 md:pt-40 pb-5 mx-14 md:mx-48 md:pb-10">
        <div className="border-b border-green-500 relative">
          <div className="absolute top-0 transform -translate-y-1/2 left-0 right-0 max-w-36 md:max-w-48 mx-auto">
            <div className="bg-yellow-100 space-x-2 text-center text-2xl text-green-900">
              <i className="ri-facebook-fill cursor-pointer hover:text-yellow-400 duration-300"></i>
              <i className="ri-twitter-fill cursor-pointer hover:text-yellow-400 duration-300"></i>
              <i className="ri-instagram-fill cursor-pointer hover:text-yellow-400 duration-300"></i>
              <i className="ri-youtube-fill cursor-pointer hover:text-yellow-400 duration-300"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="p-10 text-kanit text-green-900 flex flex-col justify-center items-center">
        <div className="text-center gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div className="item-1 flex items-center justify-center">
            <img src={Logo} alt="logo" className="w-2/3 md:w-1/2" />
          </div>
          <div className="item-1 mb-5">
            <h2 className="font-semibold text-2xl md:text-3xl mb-5">
              Quick Link
            </h2>
            <ul className="text-lg md:text-xl space-y-1">
              <li className="hover:text-yellow-400">
                <a href="#">Home</a>
              </li>
              <li className="hover:text-yellow-400">
                <a href="#about-us">About</a>
              </li>
              <li className="hover:text-yellow-400">
                <a href="#popular">Popular</a>
              </li>
              <li className="hover:text-yellow-400">
                <a href="#testimoni">Testimoni</a>
              </li>
            </ul>
          </div>
          <div className="item-2 mb-5">
            <h2 className="font-semibold text-2xl md:text-3xl mb-5">
              Popular Services
            </h2>
            <ul className="text-lg md:text-xl space-y-1">
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
            </ul>
          </div>
          <div className="item-3 mb-5">
            <h2 className="font-semibold text-2xl md:text-3xl mb-5">
              Contact Us
            </h2>
            <ul className="text-lg md:text-xl space-y-1">
              <li>+62</li>
              <li>kakgits@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="copyright text-center mt-10 md:mt-20">
          <h1 className="text-lg md:text-xl text-black">
            Copyright © 2024. All rights reserved.
          </h1>
        </div>
      </div>

      <div className="absolute opacity-45 bottom-0 left-0 z-0 pointer-events-none">
        <img src={Floral} alt="floral" className="w-full lg:w-1/2" />
      </div>
    </footer>
  );
};

export default Footer;
