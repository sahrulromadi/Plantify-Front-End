import React from "react";
import { TestimonialsData } from "../data/TestimonialsData.jsx";
import { useState } from "react";
import Decoration from "../../public/assets/img/leaf-decoration-right.png";

const TestimonialSection = () => {
  // menyimpan indeks aktif
  const [indexActive, setIndexActive] = useState(0);
  // animasi
  const [Fade, setFade] = useState(true);

  const handleBulletClick = (index) => {
    setFade(false);
    setTimeout(() => {
      setIndexActive(index); // ganti index setelah animasi selesai
      setFade(true); // set fade kembali ke true
    }, 300); // waktu delay
  };

  // ambil seluruh total data
  const totalTesti = TestimonialsData.length;

  // item untuk ditampilkan
  const testimonialShow =
    window.innerWidth < 1024
      ? [TestimonialsData[indexActive]]
      : [
          TestimonialsData[indexActive],
          TestimonialsData[(indexActive + 1) % totalTesti],
          TestimonialsData[(indexActive + 2) % totalTesti],
        ];

  return (
    <section
      id="testimoni"
      className="relative overflow-hidden bg-green-950 px-10 pt-20 pb-56 md:px-20"
    >
      <div className="testimoni-title flex flex-col items-center justt0fy-center space-y-4 mb-24 md:mb-32">
        <h1 className="text-kanit text-4xl md:text-6xl text-yellow-500 ">
          Testimonials
        </h1>
        <h2 className="text-2xl text-white md:text-3xl">
          Follow instruction for more
        </h2>
      </div>
      <div className="testimoni-grid grid gap-10 grid-cols-1 lg:grid-cols-3">
        {/* reviewer list */}
        {testimonialShow.map((data, index) => (
          <div
            key={index}
            className={`testimoni-item-1 bg-green-900 py-5 px-7 rounded-lg text-white space-y-5 transition-opacity duration-300 ${
              Fade ? "opacity-100" : "opacity-10"
            }`}
          >
            <p className="text-semibold text-xl">{data.testi}</p>
            <div className="reviewer text-kanit flex flex-row items-center justify-between gap-3">
              <div className="w-20 h-20 rounded-full overflow-hidden">
                <img
                  src={data.image}
                  alt={`image-${data.name}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mr-auto">
                <p className="text-xl text-yellow-500">{data.name}</p>
                <p className="text-lg">{data.job}</p>
              </div>
              <div>
                <p className="text-6xl">&#8220;</p>
              </div>
            </div>
          </div>
        ))}
        {/* reviewer list end */}
      </div>
      {/* bullets */}
      <div className="flex justify-center mt-7 gap-3">
        {TestimonialsData.map((_, index) => {
          return (
            <button
              key={index}
              className={`bg-green-500/80 rounded-full p-2 transition duration-300 ease-in-out ${
                indexActive === index ? "opacity-100" : "opacity-30"
              }`}
              onClick={() => handleBulletClick(index)}
            ></button>
          );
        })}
      </div>
      {/* bullets end */}

      {/* decoration */}
      <div className="absolute -top-5 -left-5 transform -translate-x-10 -translate-y-10 md:-left-2">
        <img
          src={Decoration}
          alt="plant-decoration"
          className="w-60 md:w-80 opacity-40"
        />
      </div>
      {/* decoration end */}
    </section>
  );
};

export default TestimonialSection;
