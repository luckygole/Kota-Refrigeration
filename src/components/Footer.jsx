import React from "react";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import img1 from "../assets/footerlogo1.png";
import img2 from "../assets/footerlogo2.png";

export default function Footer() {
  const navigate = useNavigate();

  // Smooth scroll handler
  const handleScroll = (sectionId) => {
    navigate("/"); // Go to Home page first
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  // Navigate directly to About page
  const handleAbout = () => {
    navigate("/about");
  };

  return (
    <footer className="bg-gradient-to-r from-blue-900 via-blue-800 to-teal-800 text-white shadow-lg w-full pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-gray-600 pb-10">
        {/* Company Info */}
        <div>
          <h2 className="text-lg font-bold text-yellow-400 mb-3">
            KOTA REFRIGERATION WORKS
          </h2>
          <p className="text-sm leading-relaxed">
            We offer reliable, fast, and affordable appliance repair services in
            Guna, MP with 20+ years of experience. Customer satisfaction is our
            priority.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-bold text-yellow-400 mb-3">
            QUICK LINKS
          </h2>
          <ul className="space-y-2 text-sm">
            <li
              onClick={() => handleScroll("hero")}
              className="hover:text-yellow-400 transition-colors duration-300 cursor-pointer"
            >
              Home
            </li>
            <li
              onClick={() => handleScroll("services")}
              className="hover:text-yellow-400 transition-colors duration-300 cursor-pointer"
            >
              Services
            </li>
            <li
              onClick={() => handleScroll("brands")}
              className="hover:text-yellow-400 transition-colors duration-300 cursor-pointer"
            >
              Brands
            </li>
            <li
              onClick={() => handleScroll("contact")}
              className="hover:text-yellow-400 transition-colors duration-300 cursor-pointer"
            >
              Contact
            </li>
            <li
              onClick={handleAbout}
              className="hover:text-yellow-400 transition-colors duration-300 cursor-pointer"
            >
              About
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-bold text-yellow-400 mb-3">CONTACT</h2>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <HiLocationMarker className="text-yellow-400 mt-1" />
              <span>
                A B Road, Hanuman Colony, Opp. IDBI Bank, Guna, MP - 473001
              </span>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-yellow-400" /> kotaref@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-yellow-400" /> kotaref@yahoo.com
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-yellow-400" /> +91 94251 31308
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-yellow-400" /> +91 76490 76590
            </li>
            <li className="flex items-center gap-2">
              <FaWhatsapp className="text-green-500" />
              <a
                href="https://wa.me/919425131308"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 cursor-pointer"
              >
                Chat on WhatsApp
              </a>
            </li>
          </ul>
        </div>

        {/* Authorized Partners */}
        <div>
          <h2 className="text-lg font-bold text-yellow-400 mb-3">
            AUTHORISED SERVICE PARTNER
          </h2>
          <div className="space-y-4">
            <img
              src={img1}
              alt="Blue Star"
              className="h-12 p-1 rounded bg-white/10"
            />
            <div className="flex items-center gap-3">
              <img
                src={img2}
                alt="Carrier"
                className="h-18 w-[200px] p-1 rounded bg-none  mix-blend-overlay"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 md:px-10 mt-6 text-sm text-gray-400">
        {/* Social Icons */}
        <div className="flex items-center gap-4 mb-3 md:mb-0">
          <span className="text-yellow-400 font-semibold">FOLLOW US</span>
          <div className="flex gap-3">
            <a
              href="https://www.facebook.com/share/19xqiqJKLH/"
              className="border border-gray-400 p-2 rounded-md hover:bg-yellow-400 hover:text-black transition-all duration-300"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/kota_refrigeration_guna?igsh=azYzNnpsZG1udHlx"
              className="border border-gray-400 p-2 rounded-md hover:bg-yellow-400 hover:text-black transition-all duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/919425131308"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-400 p-2 rounded-md hover:bg-yellow-400 hover:text-black transition-all duration-300"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-center text-gray-500">
          © 2025 Kota Refrigeration Works. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
