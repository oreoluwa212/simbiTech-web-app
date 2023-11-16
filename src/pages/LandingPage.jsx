import React, { useState } from "react";

import HeroSection from "../components/Hero-LandingPage.jsx";
import OurWhySection from "../components/OurWhy-LandingPage.jsx";
import OurServicesSection from "../components/OurServices-LandingPage.jsx";
import SuccessStory from "../components/SuccessStory.jsx";
import Footer from "../components/Footer.jsx";


const LandingPage = () => {
  return (
   <div className="bg-whitebg h-[1500px]">
   <HeroSection/>
   <OurWhySection/>
   <OurServicesSection/>
   <SuccessStory/>
   <Footer/>
   </div>
  );
};

export default LandingPage;
