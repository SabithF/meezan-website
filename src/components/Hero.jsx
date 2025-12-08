import React from "react";
import { motion } from "motion/react";

const Hero = ({title="Leisure", className= ""}) => {
  return (
    <section className="relative w-full overflow-hidden ">

      <img src="/assets/img/main-banner.jpg" 
      alt="Meezan hero banner"
      className="w-full h-full object-cover" />
      


      {/* <div className="w-full h-full flex flex-col md:flex-row">

        {/* LEFT GREEN AREA  */}
        {/* <div className="bg-[#828D62] w-full md:w-[35%] h-[10rem] md:h-full relative">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className={`absolute font-cursiveFont left-6 md:left-24 text-8xl 
            md:text-[10rem] z-20 top-32 md:top-60 text-white ${className}`}
          >
            {title}
          </motion.h1>
        </div>

        {/* RIGHT IMAGE AREA  */}
        {/* <div className="w-full md:w-[65%] h-[30rem] md:h-full relative">
          <img
            src="/assets/img/bung-02.jpg"
            alt="hero"
            className="w-full h-full object-cover"
          /> */}

          {/* Transparent overlay logo */}
          {/* <img
            src="/assets/logo/group-icon.png"
            alt="overlay"
            className="absolute md:right-20 -right-1 top-24 w-full h-full  object-contain opacity-50 invert brightness-0"
          />
        </div> */} 

      {/* </div> */} 

      

    </section>
  );
};

export default Hero;
