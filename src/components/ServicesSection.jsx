import React, { useState } from "react";
import RequestServiceModal from "./RequestServiceModal";
import acRepairImg from "../assets/acrepair.webp";
import fridgeRepairImg from "../assets/refrigreatorrepair.webp";
import washingMachineImg from "../assets/WMrepair.webp";
import waterCoolerImg from "../assets/WaterCrepair.webp";
import deepFreezerImg from "../assets/DFrepair.webp";
import microwaveImg from "../assets/microrepair.webp";

export default function ServicesSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const services = [
    {
      title: "AC Repair & Maintenance",
      img: acRepairImg,
      desc: "Expert AC installation, gas refilling, and complete cooling system service for homes and offices.",
    },
    {
      title: "Refrigerator Repair",
      img: fridgeRepairImg,
      desc: "Fast and reliable refrigerator repair — cooling issues, gas leaks, or compressor problems fixed instantly.",
    },
    {
      title: "Washing Machine Repair",
      img: washingMachineImg,
      desc: "Front-load, top-load or semi-auto — we handle all types of washing machine repair and maintenance.",
    },
    {
      title: "Water Cooler Service",
      img: waterCoolerImg,
      desc: "From water leakage to compressor service — complete water cooler maintenance at your doorstep.",
    },
    {
      title: "Deep Freezer Repair Service",
      img: deepFreezerImg,
      desc: "Ensure your deep freezer stays cool and efficient with our expert repair and maintenance services.",
    },
    {
      title: "Microwave Oven Repair",
      img: microwaveImg,
      desc: "We fix heating, display, and power issues in all brands of microwave ovens efficiently and give a best repairing service.",
    },
  ];

  const handleRequestService = (serviceTitle) => {
    setSelectedService(serviceTitle);
    setIsModalOpen(true);
  };

  return (
    <>
      <section
        id="services"
        className="bg-gradient-to-b from-blue-100 via-slate-100 to-slate-200 py-20 text-gray-800 -mt-8"
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-blue-700 mb-5">
            Our <span className="text-orange-500">Services</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-14">
            We provide fast, reliable, and affordable repair and maintenance services
            for all major home appliances — trusted by hundreds of happy clients in Guna.
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white/95 p-8 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-blue-100 backdrop-blur-sm"
              >
                <div className="flex flex-col items-center text-center">
                  {/* Image */ }
                  {/* //border removed from div */}
                  <div className="w-70 h-60 mb-5 shadow-md transition-transform duration-300 group-hover:scale-105  ">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-7">{service.desc}</p>

                  {/* Buttons */}
                  <div className="flex gap-4 justify-center">
                    <button
                      onClick={() => handleRequestService(service.title)}
                      className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 hover:scale-105 transition-transform duration-300"
                    >
                      Request Service
                    </button>
                    <a
                      href="https://wa.me/919425131308"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-500 text-white px-5 py-2 rounded-lg font-medium hover:bg-green-600 hover:scale-105 transition-transform duration-300"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Request Service Modal */}
      <RequestServiceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultService={selectedService}
      />
    </>
  );
}
