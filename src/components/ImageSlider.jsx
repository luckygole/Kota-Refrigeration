import React, { useEffect, useState } from "react";
import img1 from "../assets/slider1.webp";
import img2 from "../assets/slider2.jpg";
import img3 from "../assets/slider3.jpg";
import img4 from "../assets/slider4.webp";
import img5 from "../assets/slider5.webp";
import img6 from "../assets/kotaimg1.jpeg";
// import img7 from "../assets/kotaimg2.jpeg";
// import img8 from "../assets/kotaimg3.jpeg";
// import img9 from "../assets/kotaimg4.jpeg";
import img10 from "../assets/kotaimg6.jpeg";
// import img11 from "../assets/kotaimg7.jpeg";


export default function ImageSlider() {
  const images = [img1, img2, img3, img4, img5, img6,img10];
  const [current, setCurrent] = useState(0);

  // Auto slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-[97%] mx-auto mt-24 md:mt-25 mb-8 rounded-2xl overflow-hidden shadow-[0_0_25px_rgba(0,0,0,0.3)] ">
      {/* Image container */}
      <div className="relative w-full h-[35vh] sm:h-[60vh] md:h-[60vh] overflow-hidden">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={img}
              alt={`slide-${index}`}
              className={`w-full h-full object-fill transform transition-transform duration-[4000ms] ease-in-out ${
                index === current ? "scale-105" : "scale-100"
              }`}
            />
          </div>
        ))}
      </div>

      {/* Blue gradient overlay for brand theme */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-blue-700/20 to-transparent pointer-events-none"></div>

      {/* Animated glowing border (optional aesthetic line) */}
      {/* <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-teal-300 to-orange-400 animate-[pulse_4s_infinite]" /> */}

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3.5 h-3.5 rounded-full border border-white/70 shadow-md transition-all duration-300 ${
              index === current
                ? "bg-gradient-to-r from-orange-400 to-yellow-300 scale-125 shadow-lg shadow-orange-400/70"
                : "bg-white/40 hover:bg-white/80"
            }`}
          ></button>
        ))}
      </div>

    </div>
  );
}
