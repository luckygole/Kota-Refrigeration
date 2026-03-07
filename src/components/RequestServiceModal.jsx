import React, { useState, useEffect } from "react";
import { X, Send, MessageSquare } from "lucide-react";
import emailjs from "emailjs-com";

export default function RequestServiceModal({ isOpen, onClose, defaultService }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    service: "AC Repair",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // Auto-select service name when opened from Service Card
  useEffect(() => {
    if (defaultService) {
      setFormData((prev) => ({ ...prev, service: defaultService }));
    }
  }, [defaultService]);

  if (!isOpen) return null;

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_mpmus7h",
        // "service_6xqn02x", // ✅ Replace with your actual EmailJS Service ID
        "template_4aratxn", // ✅ Replace with your actual EmailJS Template ID
        formData,
        "D_96KYKbyOpMoL-2E" // ✅ Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log(result);
          alert("✅ Request sent successfully!");
          setLoading(false);
          setFormData({
            name: "",
            email: "",
            phone: "",
            location: "",
            service: "AC Repair",
            message: "",
          });
          onClose();
        },
        (error) => {
          console.error(error);
          alert("❌ Failed to send request. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 px-4">
      <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl max-w-md w-full p-8 relative transform scale-95 opacity-0 animate-slideInUp scroll-m-0">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-600 hover:text-red-500 transition"
        >
          <X size={26} />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-blue-700 mb-2">
            Request <span className="text-orange-500">Service</span>
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Fill out the form below and we’ll get back to you quickly!
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full border border-gray-400 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition"
            required
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full border border-gray-400 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition"
            required
          />

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full border border-gray-400 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition"
            required
          />

          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Location"
            className="w-full border border-gray-400 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition"
          />

          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full border border-gray-400 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition bg-white"
            required
          >
            <option>AC Repair</option>
            <option>Refrigerator Repair</option>
            <option>Washing Machine Repair</option>
            <option>Deep Freezer Service</option>
            <option>Water Cooler Repair</option>
            <option>Microwave Oven Repair</option>
            <option>Other Appliances</option>
          </select>

          <textarea
            name="message"
            rows="3"
            value={formData.message}
            onChange={handleChange}
            placeholder="Describe the issue..."
            className="w-full border border-gray-400 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition resize-none"
          ></textarea>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-4 mt-3">
            <button
              type="submit"
              disabled={loading}
              className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-teal-500 text-white py-3 rounded-xl font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300 disabled:opacity-50"
            >
              <Send size={20} />
              {loading ? "Sending..." : "Submit Request"}
            </button>

            <a
              href="https://wa.me/919425131308"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-green-500 text-white py-3 rounded-xl font-semibold hover:bg-green-600 hover:scale-105 transition-all duration-300"
            >
              <MessageSquare size={20} /> WhatsApp
            </a>
          </div>
        </form>
      </div>

      {/* Animation */}
      <style>{`
        @keyframes slideInUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-slideInUp {
          animation: slideInUp 0.4s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
