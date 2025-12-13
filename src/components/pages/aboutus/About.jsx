import React from "react";
import { motion } from "motion/react";
import Hero from "../../Hero";
import AboutBody from "./About-body";

const About = () => {
  return (
    <section className="w-full min-h-screen">

      <div className="relative w-full pt-[60px] md:pt-[90px] h-[70vh] overflow-hidden ">
        <img src="/assets/img/banner/about-banner.jpg" alt="Meezan hero banner" 
        className="w-full h-full object-cover" />

        {/* <div className="absolute inset-0 bg-black/40"></div> */}

        {/* <div className="uppercase pt-[60px] md:pt-[90px] absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-5xl md:text-6xl font-messiri">About us</h1>
        </div> */}
        
      </div>
      

      <AboutBody />



    </section>
  );
};

export default About;
