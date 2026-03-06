import React from 'react'
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection'
import ServiceSection from "../components/ServicesSection";
import WhyChooseUs from "../components/WhyChooseUs";
import ContactSection from "../components/ContactSection";
import ImageSlider from '../components/ImageSlider';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <ImageSlider />
      <HeroSection />
      <ServiceSection />
      <WhyChooseUs />
      <ContactSection />
      {/* <Footer /> */}
    </>
  )
}

export default Home;