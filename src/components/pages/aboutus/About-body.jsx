import React from "react";
import { motion } from "motion/react";
import ChairmanSection from "./Chairman";
import OurHistory from "./OurHistory.jsx";

// Motion variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 },
  },
};

const child = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const AboutBody = () => {
  return (
    <section className="w-full h-full overflow-hidden">

      {/* ====================== INTRO CARD ====================== */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="bg-[#EFE8C6] w-[92%] md:w-[75%] mx-auto mt-16 rounded-3xl p-10 md:p-16 shadow-md"
      >
        <p className="font-messiri text-center text-lg md:text-2xl text-[#3b3900] leading-relaxed">
          Founded in 1925, Meezan Group has grown into a diversified empire rooted in
          tradition, resilience, and excellence. From world-class tea plantations and
          modern manufacturing to hardware distribution and hospitality, our journey
          reflects nearly a century of vision, innovation, and unwavering commitment to quality.
        </p>
      </motion.div>



      {/* ====================== 3-IMAGE SHOWCASE ====================== */}
      <section className="relative w-full mt-28 flex justify-center px-4">
        
        {/* Background Accent */}
        <div className="absolute right-0 inset-y-0 w-[70%] bg-[#E6E6D9] rounded-l-[120px] -z-10"></div>

        <motion.div 
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative flex flex-col md:flex-row items-center gap-10 z-10"
        >
          <motion.img
            variants={child}
            src="/assets/img/img-4.jpg"
            className="w-60 md:w-72 h-80 md:h-96 rounded-3xl object-cover shadow-lg"
          />

          <motion.img
            variants={child}
            src="/assets/img/img-4.jpg"
            className="w-60 md:w-72 h-80 md:h-96 rounded-3xl object-cover shadow-lg md:mt-10"
          />

          <motion.img
            variants={child}
            src="/assets/img/img-4.jpg"
            className="w-60 md:w-72 h-80 md:h-96 rounded-3xl object-cover shadow-lg"
          />
        </motion.div>
      </section>



{/* ===================== VISION + MISSION SECTION ===================== */}
{/* ===================== Vision & Mission (Meezan Version) ===================== */}

{/* MOBILE VERSION */}
<section className="py-16">
  <div
  className="h-[600px] flex-col items-center flex md:hidden relative z-30"
  style={{
    backgroundImage: "url('/assets/img/teaShop/main.jpg')",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  }}
>
  

  {/* Vision */}
  <div className="z-30 bg-[#3F4F2A]/40 h-full uppercase flex flex-col items-center px-10 text-white justify-center">
    <p className="text-lg">Our</p>
    <p className="text-4xl font-messiri">Vision</p>
    <p className="text-xs normal-case text-center mt-5">
      To cultivate a future where Sri Lankan excellence inspires the world —
      nurturing people, preserving heritage, and elevating every industry we
      touch with integrity, craftsmanship, and sustainable progress.
    </p>
  </div>

  {/* Mission */}
  <div className="z-30 bg-[#1E2715]/40 h-full uppercase flex flex-col items-center px-10 text-white justify-center">
    <p className="text-lg">Our</p>
    <p className="text-4xl font-messiri">Mission</p>
    <p className="text-xs normal-case text-center mt-5">
      To craft meaningful products and experiences infused with authenticity and
      care — empowering communities, uplifting industry, and honouring the
      legacy built over generations.
    </p>
  </div>
</div>


{/* DESKTOP VERSION */}
<div
  className="h-[600px] hidden md:flex relative z-30 " 
  style={{
    backgroundImage: "url('/assets/img/teaShop/main.jpg')",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  }}
>
  <div className="absolute inset-0 bg-black/50 z-20"></div>
  {/* Vision Panel */}
  <div className="
    w-[50%] z-30 hover:w-[55%] transition-all duration-500 
    bg-[#3F4F2A]/30 h-full uppercase flex flex-col 
    items-end px-10 text-white justify-center 
    hover:border-white border-r-2 border-transparent group peer
  ">
    <p className="md:text-2xl lg:text-3xl transition-opacity duration-500 opacity-75 group-hover:opacity-100">
      Our
    </p>

    <p className="
      opacity-75 md:text-6xl lg:text-8xl font-bold font-messiri
      transition-all group-hover:text-[#D2E7A6] group-hover:opacity-100 duration-500
    ">
      Vision
    </p>

    <p className="
      max-w-md mt-5 normal-case font-light text-right 
      md:group-hover:h-40 lg:group-hover:h-30  
      group-hover:opacity-100 opacity-0 transition-all duration-500 h-0
    ">
      To cultivate a future where Sri Lankan excellence inspires the world —
      nurturing people, preserving heritage, and elevating every industry we
      touch with integrity, craftsmanship, and sustainable progress.
    </p>
  </div>

  {/* Mission Panel */}
  <div className="
    w-[50%] z-30 hover:w-[55%] transition-all duration-500 
    bg-[#1E2715]/30 h-full uppercase flex flex-col 
    px-10 text-white justify-center hover:border-white 
    border-l-2 border-transparent group peer
  ">
    <p className="md:text-2xl lg:text-3xl transition-opacity duration-500 opacity-75 group-hover:opacity-100">
      Our
    </p>

    <p className="
      opacity-75 md:text-6xl lg:text-8xl font-bold font-messiri
      transition-all group-hover:text-[#D2E7A6] group-hover:opacity-100 duration-500
    ">
      Mission
    </p>

    <p className="
      max-w-md mt-5 normal-case font-light 
      md:group-hover:h-40 lg:group-hover:h-30  
      group-hover:opacity-100 opacity-0 transition-all duration-500 h-0
    ">
      To craft meaningful products and experiences infused with authenticity and
      care — empowering communities, uplifting industry, and honouring the
      legacy built over generations.
    </p>
  </div>

  {/* Hover fade layer (exact behaviour as your uploaded code) */}
  <img
    src="/assets/img/teaShop/main.jpg"
    alt="tea-bg"
    className="absolute z-20 w-full h-full object-cover peer-hover:opacity-10 transition-opacity duration-500"
  />
</div>
</section>




      {/* ====================== CHAIRMAN + HISTORY ====================== */}
      <ChairmanSection />
      <OurHistory />

    </section>
  );
};

export default AboutBody;
