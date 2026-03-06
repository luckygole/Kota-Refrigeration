import React,{useState} from "react";
import RequestServiceModal from "./RequestServiceModal";
import ApplianceImg from "../assets/HomeAppliance.png";

export default function HeroSection() {
  const[isModalOpen, setIsModalOpen] = useState(false);

  const handleRequestService = () => {
    setIsModalOpen(true);
  }
  return (
    <>
      <section className="relative bg-gradient-to-r from-blue-600 via-blue-500 to-teal-400 text-white pt-24 md:pt-28 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-20">
          
          {/* Left Content */}
          <div className="md:w-1/2 text-center md:text-left z-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Reliable{" "}
              <span className="text-orange-300">
                Appliance & AC Repair
              </span>{" "}
              Services in Guna
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-100 mb-8 max-w-lg mx-auto md:mx-0">
              Fast, professional, and affordable repair solutions for all your
              home appliances — including ACs, refrigerators, and washing machines.
            </p>

            <button
              onClick = {handleRequestService}
              className="inline-block bg-gradient-to-r from-orange-400 to-orange-500 text-white font-semibold px-10 sm:px-12 py-4 sm:py-5 rounded-full shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 text-base sm:text-lg"
            >
              Request Service
            </button>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 flex justify-center z-10">
            <img
              src={ApplianceImg}
              alt="Appliance Repair Illustration"
              className="w-[90%] sm:w-[85%] md:w-[95%] lg:w-[90%] max-w-2xl drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Decorative bottom gradient */}
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-blue-600 to-transparent pointer-events-none"></div>
      </section>

      <RequestServiceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
