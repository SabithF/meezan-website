import React from "react";
import { motion } from "motion/react";

const AboutBody = () => {
  return (
    <section className="w-full h-full overflow-hidden">

      {/* INTRO CARD */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-[#EFE8C6] w-[90%] md:w-[75%] mr-auto mt-12 rounded-r-3xl py-16 shadow-sm"
      >
        <p className="font-messiri text-center text-lg md:text-2xl px-6 md:px-20 text-[#3b3900]">
          Our core values shape our approach to tea production, hardware supply,
          export activities, and our hospitality offerings. Our dedicated leadership
          team fosters sustainable growth and ensures superior quality and enduring
          value in all our endeavors by committing to these values.
        </p>
      </motion.div>



      {/* 3 IMAGE DISPLAY */}
      <div className="relative w-full mt-20 mb-20 flex justify-center">
        
        {/* Background Shape */}
        <div className="absolute inset-y-0 right-0 w-[70%] bg-[#E6E6D9] rounded-l-[120px]"></div>

        <div className="relative flex flex-col md:flex-row translate-y-10 items-center gap-10 z-10">
          <motion.img
            src="/assets/img/img-4.jpg"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-60 md:w-72 h-80 md:h-96 rounded-3xl object-cover shadow-md"
          />

          <motion.img
            src="/assets/img/img-4.jpg"
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-60 md:w-72 h-80 md:h-96 rounded-3xl object-cover shadow-md md:mt-10"
          />

          <motion.img
            src="/assets/img/img-4.jpg"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="w-60 md:w-72 h-80 md:h-96 rounded-3xl object-cover shadow-md"
          />
        </div>
      </div>



      {/* VISION SECTION */}
      <div className="relative w-full mt-7 pt-20 pb-32">
        
        {/* Background Shape */}
        <div className="absolute left-0 top-0 w-[70%] h-[380px] bg-[#bdca9a] rounded-r-[150px] -z-10"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-20"
        >
          <h1 className="text-[#0C1167] font-messiri 
          md:pl-24 text-[3.5rem] md:text-[7rem] leading-none">
            Our <br /> Vision
          </h1>

          <p className="md:w-[45%] mt-10 md:mt-0 text-[#4C4100] text-xl md:text-3xl font-messiri text-center md:text-right">
            “Cultivate excellence and deliver value across our diverse portfolio,
            empowering progress in the communities we serve.”
          </p>
        </motion.div>
      </div>



      {/* MISSION SECTION */}
      <div className="relative w-full pt-20 pb-32">
        
        {/* Background Shape */}
        <div className="absolute right-0 top-0 w-[70%] h-[380px] bg-[#DBE0D5] rounded-l-[150px] -z-10"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="w-full flex flex-col md:flex-row-reverse items-center justify-between px-6 md:px-20"
        >
          <h1 className="text-[#0C5967] md:pr-24 font-messiri text-[3.5rem] md:text-[7rem] leading-none text-center md:text-left">
            Our <br /> Mission
          </h1>

          <p className="md:w-[45%] mt-10 md:mt-0 text-[#4C4100] text-xl md:text-3xl font-messiri text-center md:text-left">
            “Be a dynamic and respected Sri Lankan conglomerate, renowned for our
            commitment to quality, innovation, and sustainable development.”
          </p>
        </motion.div>
      </div>



      {/* CHAIRMAN SECTION */}
      <div className="w-full flex justify-center mt-20 pb-40">
        <div className="bg-[#D5DAE0] rounded-[3rem] w-[90%] md:w-[80%] py-16 px-6 md:px-20 flex flex-col items-center">

          <img
            src="/assets/img/chair.jpg"
            className="w-72 md:w-96 h-auto rounded-3xl shadow-md"
          />

          <div className="mt-10 bg-white px-6 py-4 rounded-2xl shadow text-center">
            <h2 className="font-messiri text-3xl">Meet Our Chairman</h2>
            <p className="font-cursiveFont text-4xl">Inthisham Meezan</p>
          </div>

          <p className="mt-6 font-messiri text-center md:text-lg bg-white rounded-2xl px-6 py-6 leading-relaxed shadow max-w-4xl">
            "Marking over five decades since our humble inception in 1974, it is with great
            pleasure that I, as Chairperson of the Meezan Group of Companies, reflect on our
            remarkable journey…"
          </p>

          <button className="mt-8 px-6 py-2 bg-gray-300 rounded-full hover:bg-gray-400 transition">
            See more..
          </button>
        </div>
      </div>

    </section>
  );
};

export default AboutBody;
