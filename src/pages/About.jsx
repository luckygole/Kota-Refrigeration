import React from "react";
import about1 from "../assets/about1.jpg";
import about2 from "../assets/about2.jpg";
import about3 from "../assets/about3.jpg";
import gallery1 from "../assets/gallery1.jpg";
import gallery2 from "../assets/gallery2.jpg";
import gallery3 from "../assets/gallery1.jpg";
import gallery4 from "../assets/gallery2.jpg";
import gallery5 from "../assets/gallery1.jpg";

const About = () => {
  return (
    <div className="bg-white text-gray-800 leading-relaxed mt-8">

      {/* ======= HEADER ======= */}
      <section className="text-center py-16 px-4 border-b border-gray-200">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-3">
          About Kota Refrigeration Works
        </h1>
        <p className="text-lg max-w-3xl mx-auto text-gray-600">
          Delivering trusted appliance repair and maintenance services in Guna and nearby
          regions for over <strong>20 years</strong> — serving thousands of happy customers
          with honesty, experience, and professionalism.
        </p>
      </section>

      {/* ======= WHO WE ARE ======= */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12 items-center">
        <img
          src={about1}
          alt="Technician repairing appliance"
          className="rounded-2xl shadow-md w-full object-cover"
        />
        <div>
          <h2 className="text-3xl font-semibold text-blue-700 mb-4">Who We Are</h2>
          <p className="text-gray-700 text-lg mb-4">
            <strong>Kota Refrigeration Works</strong> is a well-known name in home appliance
            repair across Madhya Pradesh. From air conditioners and refrigerators to washing
            machines, microwaves, deep freezers, and water coolers — we repair it all with
            expert care and genuine spare parts.
          </p>
          <p className="text-gray-700 text-lg">
            Our highly trained technicians provide quick and reliable doorstep service,
            ensuring long-lasting results and complete peace of mind for our customers.
          </p>
        </div>
      </section>

      {/* ======= OUR MISSION ======= */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-semibold text-orange-500 mb-4">Our Mission</h3>
            <p className="text-gray-700 text-lg mb-4">
              Our mission is to provide high-quality, affordable, and fast repair solutions
              for all home appliances. We aim to bring convenience to every household by
              offering <strong>same-day service, expert technicians,</strong> and
              <strong> transparent pricing</strong>.
            </p>
            <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
              <li>Same-day doorstep repair service</li>
              <li>Affordable rates with genuine parts</li>
              <li>Trained and verified staff</li>
              <li>100% customer satisfaction guaranteed</li>
            </ul>
          </div>
          <img
            src={about2}
            alt="Technician repairing AC"
            className="rounded-2xl shadow-md w-full object-cover"
          />
        </div>
      </section>

      {/* ======= OUR VISION ======= */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12 items-center">
        <img
          src={about3}
          alt="Technician team discussion"
          className="rounded-2xl shadow-md w-full object-cover"
        />
        <div>
          <h3 className="text-3xl font-semibold text-orange-500 mb-4">Our Vision</h3>
          <p className="text-gray-700 text-lg mb-4">
            We aim to become the <strong>most trusted appliance service brand</strong> in
            Madhya Pradesh. Our goal is to make appliance repair more professional, reliable,
            and transparent — while keeping customer trust at the heart of everything we do.
          </p>
          <p className="text-gray-700 text-lg">
            We continuously upgrade our skills, technology, and service quality to stay ahead
            in delivering convenience, comfort, and long-term satisfaction to every customer.
          </p>
        </div>
      </section>

      {/* ======= WHY CHOOSE US ======= */}
      <section className="bg-gray-50 py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold text-blue-700 mb-10">Why Choose Us?</h2>
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            {
              title: "20+ Years Experience",
              desc: "Thousands of successful repairs and happy customers across Guna.",
            },
            {
              title: "Trained Technicians",
              desc: "All our professionals are skilled, verified, and customer-friendly.",
            },
            {
              title: "Transparent Pricing",
              desc: "No hidden charges — you pay only for what’s required.",
            },
            {
              title: "Genuine Parts Only",
              desc: "We use high-quality, original spare parts for long-lasting performance.",
            },
            {
              title: "Quick Doorstep Service",
              desc: "We value your time and provide same-day service in most cases.",
            },
            {
              title: "100% Satisfaction",
              desc: "We’re not happy until our customers are fully satisfied with our work.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-all duration-300"
            >
              <h4 className="text-xl font-semibold text-blue-600 mb-2">
                {item.title}
              </h4>
              <p className="text-gray-700 text-base">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ======= GALLERY SECTION ======= */}
      <section className="max-w-6xl mx-auto py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold text-blue-700 mb-10">
          Our Work in Action
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 mb-8 text-lg">
          A glimpse of our team in action — repairing appliances, maintaining equipment,
          and delivering reliable service to homes and offices across Guna.
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[gallery1, gallery2, gallery3, gallery4, gallery5].map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Gallery ${index + 1}`}
              className="rounded-xl shadow-md w-full object-cover h-64 hover:scale-105 transition-transform duration-300"
            />
          ))}
        </div>
      </section>

      {/* ======= CONTACT CTA ======= */}
      <section className="text-center py-16 border-t border-gray-200">
        <h2 className="text-3xl font-semibold text-blue-700 mb-3">
          Need Expert Help?
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Call or WhatsApp us to book a technician — we’re ready to help!
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="tel:+919425131308"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            📞 +91 94251 31308
          </a>
          <a
            href="https://wa.me/919425131308"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition"
          >
            💬 Chat on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
