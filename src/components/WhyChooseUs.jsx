import React from "react";
import { Clock, Users, Tag, Shield } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Fast Service",
      icon: <Clock size={36} className="text-orange-400" />,
      desc: "Quick response and repair solutions to save your time.",
    },
    {
      title: "Trusted Technicians",
      icon: <Users size={36} className="text-orange-400" />,
      desc: "Experienced professionals with years of expertise.",
    },
    {
      title: "Affordable Pricing",
      icon: <Tag size={36} className="text-orange-400" />,
      desc: "High-quality services at reasonable rates.",
    },
    {
      title: "100% Satisfaction",
      icon: <Shield size={36} className="text-orange-400" />,
      desc: "Reliable solutions with guaranteed customer satisfaction.",
    },
  ];

  return (
    <section className="py-20 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
          Why <span className="text-orange-500">Choose Us</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-12">
          We provide top-notch appliance repair services with quality, trust, and speed.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-blue-50 rounded-2xl shadow hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
