import React from "react";
import "remixicon/fonts/remixicon.css";
import Plant from "../../public/assets/img/plant.png";
import LeafDecoration from "../../public/assets/img/leaf-decoration.png";
import PlantDecoration from "../../public/assets/img/plant-decoration.png";
import PotPlant1 from "../../public/assets/img/pot-plant-1.png";
import PotPlant2 from "../../public/assets/img/pot-plant-2.png";
import LeafDecoration2 from "../../public/assets/img/leaf-decoration-right.png";
import { popularPlants } from "../data/popularPlants";

const HomeSection = () => {
  return (
    <>
      {/* hero */}
      <section id="home" className="py-20 mx-6 md:pt-36 md:mx-20">
        <div className="home-section flex flex-col justify-center items-center md:flex-row">
          {/* kolom 1 */}
          <div className="kolom-1 text-white md:w-1/2 mb-7">
            <h1 className="text-kanit text-5xl mb-6">
              <span className="text-yellow-500">Plants</span> for a{" "}
              <span className="text-yellow-500">Healthier</span> Home and a{" "}
              <span className="text-yellow-500">Greener</span> World
            </h1>
            <p className="text-lg/6 mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              rerum eaque amet? Fugit, id quidem sunt suscipit ad rerum totam
              minima facere iste ame.
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
              <i className="ri-facebook-line cursor-pointer hover:text-yellow-400 duration-300"></i>
              <i className="ri-twitter-line cursor-pointer hover:text-yellow-400 duration-300"></i>
              <i className="ri-instagram-line cursor-pointer hover:text-yellow-400 duration-300"></i>
              <i className="ri-youtube-line cursor-pointer hover:text-yellow-400 duration-300"></i>
            </div>
          </div>
          {/* kolom 1 end */}

          {/* kolom 2 */}
          <div className="kolom-2 w-full relative md:w-1/2">
            {/* blob */}
            <div className="absolute bottom-1/3 left-1/3 -translate-x-1/2 md:left-2/3 md:bottom-2/4 lg:left-3/4">
              <div className="bg-white rounded-full w-64 h-64 opacity-20 blur-3xl"></div>
            </div>
            {/* blob end */}
            <div className="absolute right-14 opacity-75 md:right-10 lg:right-32">
              <img
                src={LeafDecoration}
                alt="leaf-decoration"
                className="w-12 slow-spin"
              />
            </div>
            <div className="flex justify-center items-center flex-col">
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
      {/* hero end */}

      {/* services */}
      <section className="bg-white w-full p-20">
        <div className="services-section grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {/* card */}
          <div className="card-1 border-dashed border-2 border-green-900 rounded-md p-5 shadow-lg space-y-5 hover:-translate-y-1 duration-300">
            <div className="title-services flex items-center gap-3 mb-3">
              <i className="ri-home-heart-line text-4xl text-green-900"></i>
              <h3 className="text-kanit text-xl font-semibold">
                Indoor Plant Design
              </h3>
            </div>
            <p className="text-lg font-medium">
              Transform your indoor spaces with our expert indoor plant design
              services.
            </p>
          </div>

          <div className="card-2 border-dashed border-2 border-green-900 rounded-md p-5 shadow-lg space-y-5 hover:-translate-y-1 duration-300">
            <div className="title-services flex items-center gap-3 mb-3">
              <i className="ri-tools-line text-4xl text-green-900"></i>
              <h3 className="text-kanit text-xl font-semibold">
                Plant Care and Maintenance
              </h3>
            </div>
            <p className="text-lg font-medium">
              Keep your plants healthy and vibrant with our professional care
              services.
            </p>
          </div>

          <div className="card-3 border-dashed border-2 border-green-900 rounded-md p-5 shadow-lg space-y-5 hover:-translate-y-1 duration-300">
            <div className="title-services flex items-center gap-3 mb-3">
              <i className="ri-leaf-line text-4xl text-green-900"></i>
              <h3 className="text-kanit text-xl font-semibold">
                Plant Consultation
              </h3>
            </div>
            <p className="text-lg font-medium">
              Our expert team provides personalized consultations to help you
              choose the right plants for your space.
            </p>
          </div>

          <div className="card-4 border-dashed border-2 border-green-900 rounded-md p-5 shadow-lg space-y-5 hover:-translate-y-1 duration-300">
            <div className="title-services flex items-center gap-3 mb-3">
              <i className="ri-book-open-line text-4xl text-green-900"></i>
              <h3 className="text-kanit text-xl font-semibold">
                Workshops and Education
              </h3>
            </div>
            <p className="text-lg font-medium">
              Join our engaging workshops and educational sessions to deepen
              your knowledge of plant care and gardening.
            </p>
          </div>
          {/* card end */}
        </div>
      </section>
      {/* services end */}

      {/* about us */}
      <section
        id="about"
        className="relative overflow-hidden py-20 md:py-24"
      >
        <div className="decoration absolute -top-8 -right-12 opacity-50">
          <img
            src={LeafDecoration2}
            alt="leaf-decoration-2"
            className="w-48 md:w-56 lg:w-64"
          />
        </div>
        <div className="about-title text-center mb-5 md:mb-10">
          <h1 className="text-4xl font-bold text-yellow-500 mb-5 md:text-5xl">
            About Us
          </h1>
          <h2 className="text-kanit text-2xl text-white md:text-3xl">
            Follow instruction for more
          </h2>
        </div>
        <div className="flex-1 flex flex-col justify-center items-center px-10 mb-28 md:mb-5 md:px-20 md:flex-row md:py-5">
          <div className="flex justify-center items-center">
            <img src={PotPlant1} alt="pot-plant-1" className="w-full" />
          </div>
          <div className="text-white text-left">
            <h2 className="text-kanit text-2xl mb-5 md:text-4xl">
              Make your <span className="text-yellow-500">organic</span> garden
            </h2>
            <p className="text-xl md:text-2xl">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
              eaque quasi maxime voluptate magni nesciunt ipsam perferendis!
              Sunt, quo inventore dolor quia facere iusto nulla soluta possimus
              necessitatibus non sequi.
            </p>
          </div>
        </div>
        <div className="flex-2 flex flex-col justify-center items-center px-10 md:px-20 md:flex-row-reverse">
          <div className="flex justify-center items-center mb-14">
            <img
              src={PotPlant2}
              alt="pot-plant-2"
              className="w-9/12 md:w-8/12"
            />
          </div>
          <div className="text-white text-left md:text-right">
            <h2 className="text-kanit text-2xl mb-5 md:text-4xl">
              Come with us <span className="text-yellow-500">grow up</span> your
              plant
            </h2>
            <p className="text-xl md:text-2xl">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
              eaque quasi maxime voluptate magni nesciunt ipsam perferendis!
              Sunt, quo inventore dolor quia facere iusto nulla soluta possimus
              necessitatibus non sequi.
            </p>
          </div>
        </div>
      </section>
      {/* about us end */}

      {/* popular */}
      <section id="popular" className="bg-green-800 pt-24 pb-44 px-24 md:p-36">
        <div className="popular-title text-center flex flex-col items-center space-y-5 mb-40 md:mb-28">
          <h1 className="text-kanit text-4xl md:text-6xl text-yellow-500 ">
            Popular Plant
          </h1>
          <h2 className="text-2xl text-white md:text-3xl">
            Follow instruction for more
          </h2>
        </div>
        <div className="container w-full py-0 md:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-36">
          {/* card */}
          {popularPlants.map((data) => {
            return (
              <div
                className="bg-green-950 p-10 pt-24 rounded-md relative text-white hover:-top-8"
                key={data.id}
              >
                <img
                  src={data.image}
                  alt={`img-${data.name}`}
                  className="absolute w-56 -top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                />
                <p className="italic text-2xl">{data.latin}</p>
                <p className="text-lg">{data.name}</p>

                <div className="text-yellow-500 text-xs py-3">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-xl">{`$${data.harga}`}</p>
                  <button className="bg-yellow-500 px-2 py-1 rounded-sm text-xl">
                    <i className="ri-shopping-cart-fill"></i>
                  </button>
                </div>
              </div>
            );
          })}
          {/* card end */}
        </div>
      </section>
      {/* popular end */}
    </>
  );
};

export default HomeSection;
