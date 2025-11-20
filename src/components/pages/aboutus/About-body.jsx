import React from "react";
import { motion } from "motion/react";

const AboutBody = () => {
  return (
    <section className="h-full w-full overflow-hidden z-10">
      
      <motion.div 
        initial={{ opacity: 0, y: 40 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.4 }}
        className="relative bg-[#BFA60E] bg-opacity-20 md:w-[75%] py-12 rounded-r-[60px] my-12"
      >
        <p className="md:w-[70%] px-4 md:ml-auto font-messiri text-center text-lg md:text-2xl pr-10">
          Our core values shape our approach to tea production, hardware supply, 
          export activities, and our hospitality offerings. Our dedicated leadership 
          team fosters sustainable growth and ensures superior quality and enduring 
          value in all our endeavors by committing to these values.
        </p>
      </motion.div>

      <div className="flex flex-row justify-center">

        <motion.div 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-center items-center md:mt-10 mx-3 md:mx-0 gap-3 xl:gap-20 2xl:gap-48 absolute z-20"
        >
          <motion.img 
            src="/assets/img/bung-02.jpg"
            initial={{ opacity: 0, y: 40 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.1 }}
            className="w-86 md:w-[20rem] md:h-[30rem] rounded-3xl shadow-lg object-cover"
          />

          <motion.img 
            src="/assets/img/bung-02.jpg"
            initial={{ opacity: 0, y: 60 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-86 md:w-[20rem] md:h-[30rem] md:translate-y-40 rounded-3xl shadow-lg object-cover"
          />

          <motion.img 
            src="/assets/img/bung-02.jpg"
            initial={{ opacity: 0, y: 40 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-86 md:w-[20rem] md:h-[30rem] rounded-3xl shadow-lg object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-[70%] h-[55rem] ml-auto bg-[#E8E7DC] rounded-l-[150px] mt-[7rem] relative z-0"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="h-fit relative w-full z-50"
      >
        <h1 className="text-[#0C1167] md:-translate-x-48 xl:-translate-y-56 font-messiri flex justify-center items-center w-full text-[4rem] md:text-[10rem] md:leading-[7rem]">
          Our <br className="hidden md:block" /> Vision
        </h1>

        <p className="md:w-[50rem] text-[#4C4100] px-6 lg:pr-56 md:-translate-y-52 md:ml-auto text-2xl md:text-4xl font-messiri text-center md:text-right">
          “Cultivate excellence and deliver value across our diverse portfolio, empowering progress in the communities we serve."
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-[50%] h-[55rem] mr-auto bg-[#E8E7DC] rounded-r-[150px] relative -mt-20 z-0"
      />

      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative h-fit w-full md:pt-0 pt-12 z-50"
      >
        <h1 className="text-[#0C5967] md:translate-x-20 -translate-y-[50rem] font-messiri flex justify-center items-center w-full text-[4rem] md:text-[10rem] md:leading-[7rem]">
          Our <br className="hidden md:block" /> Mission
        </h1>

        <p className="md:w-[50rem] text-[#4C4100] px-6 lg:pr-56 -translate-y-[50rem] md:-translate-y-[48rem] md:-translate-x-24 md:ml-auto text-2xl md:text-4xl font-messiri text-center md:text-left">
          “Be a dynamic and respected Sri Lankan conglomerate, renowned for our commitment to quality, innovation, and sustainable development."
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full h-[30rem] flex justify-center md:px-16 pb-10 mb-56 -mt-24"
      >
        <div className="bg-[#D5DAE0] rounded-[3rem] w-full md:mx-0 mx-3 flex flex-col justify-center items-center">

          <motion.img
            src="/assets/img/chair.jpg"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-auto h-[30rem] m-6 md:m-0 translate-y-8 rounded-[2rem] object-cover"
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-28"
          >
            <div className="flex flex-col items-center bg-white px-1 md:mx-72 py-3 rounded-[1rem]">
              <h2 className="font-messiri text-3xl">Meet our Chairman</h2>
              <p className="font-cursiveFont text-4xl">Inthisham Meean</p>
            </div>

            <p className="font-messiri pt-5 md:px-10 text-center md:text-xl bg-white">
              "Marking over five decades since our humble inception in 1974, it is with 
              great pleasure that I, as Chairperson of the Meezan Group of Companies…
            </p>

            <div className="mt-8 flex items-center justify-center">
              <button className="px-6 py-2 bg-gray-300 rounded-full hover:bg-gray-400 transition">
                See more..
              </button>
            </div>
          </motion.div>

        </div>
      </motion.div>

    </section>
  );
};

export default AboutBody;
