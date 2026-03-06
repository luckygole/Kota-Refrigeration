import React, { useState } from "react";
import { Phone, Mail, MapPin, Send, Instagram } from "lucide-react";
import emailjs from "emailjs-com";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_6xqn02x", // Replace with your EmailJS Service ID
        "template_g5vc5eg", // Replace with your EmailJS Template ID
        formData,
        "D_96KYKbyOpMoL-2E" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log(result);
          alert("Message sent successfully!");
          setLoading(false);
          setFormData({
            name: "",
            phone: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          setLoading(false);
          console.error(error);
        }
      );
  };

  return (
    <section id="contact" className="bg-gradient-to-b from-blue-100 via-slate-100 to-slate-200 py-10 text-gray-800">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6">
            Get In <span className="text-orange-500">Touch</span>
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            Have a question or need quick help with your appliance?  
            Our experts are ready to assist you — call or message us anytime!
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Phone className="text-orange-500" size={28} />
              <a href="tel:+919425131308" className="text-lg font-medium hover:text-blue-700 transition-colors">
                +91 9425 131 308
              </a>
            </div>

            <div className="flex items-center gap-4">
              <Mail className="text-orange-500" size={28} />
              <a href="mailto:kotaref@gmail.com" className="text-lg font-medium hover:text-blue-700 transition-colors">
                kotaref@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-orange-500" size={28} />
              <p className="text-lg font-medium">
                A B Road, Hanuman Colony, Opp. IDBI Bank, Guna, MP - 473001
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Instagram className="text-orange-500" size={28} />
              <a href="https://www.instagram.com/kotarefrigerationguna/" target="_blank" rel="noopener noreferrer" className="text-lg font-medium hover:text-blue-700 transition-colors">
                @kotarefrigerationguna
              </a>
            </div>
          </div>

          <div className="mt-10">
            <a href="https://wa.me/916265580736" target="_blank" rel="noopener noreferrer" className="inline-block bg-green-500 text-white px-6 py-3 rounded-full shadow-md font-semibold hover:bg-green-600 hover:scale-105 transition-all duration-300">
              💬 Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Right Form */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-400">
          <h3 className="text-2xl font-semibold text-blue-700 mb-6 test-center">
            Send us your feedback
          </h3>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message..."
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-teal-500 text-white py-3 rounded-lg font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300 disabled:opacity-50"
            >
              <Send size={20} /> {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

