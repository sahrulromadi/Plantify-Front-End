import React from "react";
import "remixicon/fonts/remixicon.css";
import Plant from "../../public/assets/img/plant.png";
import LeafDecoration from "../../public/assets/img/leaf-decoration.png";
import PlantDecoration from "../../public/assets/img/plant-decoration.png";

const HomeSection = () => {
  return (
    <section className="py-20 mx-6 md:py-36 md:mx-20">
      <div className="home-section flex flex-col justify-center items-center md:flex-row">
        {/* kolom 1 */}
        <div className="kolom-1 text-white md:w-1/2 mb-7">
          <h1 className="text-kanit text-5xl mb-6">
            <span className="text-yellow-500">Plants</span> for a{" "}
            <span className="text-yellow-500">Healthier</span> Home and a{" "}
            <span className="text-yellow-500">Greener</span> World
          </h1>
          <p className="text-lg/6 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro rerum
            eaque amet? Fugit, id quidem sunt suscipit ad rerum totam minima
            facere iste ame.
          </p>
          <div className="flex justify-center items-center gap-5 text-kanit text-xl mb-5">
            <button className="border border-yellow-500 bg-yellow-500 py-2 px-5 rounded-md w-full">
              Shop Now
            </button>
            <button className="border border-yellow-500 py-2 px-5 rounded-md w-full">
              Know More
            </button>
          </div>
          <p className="text-lg tracking-wider italic mb-5">
            Lorem ipsum dolor sit amet{" "}
          </p>
          <div className="flex gap-6 text-xl">
            <i className=" ri-facebook-line hover:text-yellow-500"></i>
            <i className="ri-twitter-line hover:text-yellow-500"></i>
            <i className="ri-instagram-line hover:text-yellow-500"></i>
            <i className="ri-linkedin-line hover:text-yellow-500"></i>
          </div>
        </div>
        {/* kolom 1 end */}

        {/* kolom 2 */}
        <div className="kolom-2 w-full relative md:w-1/2">
          <div className="absolute right-14 opacity-75 md:right-10 lg:right-32">
            <img
              src={LeafDecoration}
              alt="leaf-decoration"
              className="w-12 slow-spin"
            />
          </div>
          <div>
            <img src={Plant} alt="plant" className="w-full" />
          </div>
          <div className="absolute left-16 top-3/4 opacity-75 md:left-28 md:top-[350px] lg:top-3/4">
            <img
              src={PlantDecoration}
              alt="plant-decoration"
              className="w-10 animate-bounce"
            />
          </div>
        </div>
        {/* kolom 2 end */}
      </div>
    </section>
  );
};

export default HomeSection;
