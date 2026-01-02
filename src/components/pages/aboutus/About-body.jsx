import React from "react";
import { motion } from "motion/react";

import OurHistory from "./OurHistory.jsx";

// Motion variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
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


      <div className="uppercase pt-[60px] md:pt-[90px] flex items-center justify-center">
        <h1 className="text-[#3F4F2A] text-5xl md:text-6xl font-messiri">
          About us
        </h1>
      </div>
      {/* ====================== INTRO CARD WITH LEAF ====================== */}

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"

        className="relative w-[92%] md:w-[75%] mx-auto mt-16"
      >

        <img
          src="/assets/img/leaf.png"
          alt="leaf illustration"
          className="absolute -left-10 md:-left-16 top-1/2 -translate-y-1/2 w-20 md:w-28 opacity-90 pointer-events-none select-none"
        />



        {/* Card */}
        <div className="bg-[#EFE8C6] rounded-3xl p-10 md:p-16 shadow-md">
          <p className="font-messiri text-center text-lg md:text-2xl text-[#3b3900] leading-relaxed">
            Founded in 1925, Meezan Group has grown into a diversified empire rooted in
            tradition, resilience, and excellence. From world-class tea plantations and
            modern manufacturing to hardware distribution and hospitality, our journey
            reflects nearly a century of vision, innovation, and unwavering commitment
            to quality.
          </p>
        </div>
      </motion.div>



      {/* ===================== VISION + MISSION SECTION ===================== */}

      {/* MOBILE VERSION */}
      <section className="py-16">
        <div
          className="h-[600px] flex-col items-center flex md:hidden relative z-30"
          style={{
            backgroundImage: "url('/assets/img/teaShop/about-mission.jpg')",
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
            backgroundImage: "url('/assets/img/teaShop/about-mission.jpg')",
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
              To be a globally recognized brand that inspires trust and admiration by delivering authentic, high-quality experiences nurturing communities,
              advancing industry standards, and carrying forward a legacy of excellence for generations to come
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
              care empowering communities, uplifting industry, and honouring the
              legacy built over generations.
            </p>
          </div>

          {/* Hover fade layer (exact behaviour as your uploaded code) */}
          <img
            src="/assets/img/teaShop/about-mission.jpg"
            alt="tea-bg"
            className="absolute z-20 w-full h-full object-cover peer-hover:opacity-10 transition-opacity duration-500"
          />
        </div>
      </section>


      {/* ====================== MEEZAN LEGACY SECTION ====================== */}

      <section className="max-w-6xl mx-auto pt-10 pb-20 px-4">

        <section className="max-w-6xl mx-auto py-20 px-4 space-y-16">

          {/* ========== MAIN BIG IMAGE ========== */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className=" flex items-center justify-center"
          >
            <img
              src="/assets/img/haji-1.jpeg"
              alt="Meezan founding history"
              className="
              
            w-fit
            h-[220px]        
            sm:h-[280px]
            md:h-[450px]
            lg:h-[650px]
            object-contain
            object-center
            shadow-lg
            transition-transform duration-700 hover:scale-105
    "
            />
          </motion.div>




          {/* ========== PARAGRAPH BELOW IMAGE ========== */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6"
          >
            <p className="text-slate-700 font-outfit leading-relaxed text-[17px] text-justify">
              The Meezan Group was founded in 1925 by the late Mr. S.M. Mohideen,
              affectionately known as “Meezan Hajiar.” A visionary entrepreneur of
              exceptional character, he was widely respected as the driving force and
              guiding spirit behind the business. His journey into the tea industry
              began in 1946 with the acquisition of the Ancoombra Tea Factory and its
              plantations—an iconic region where Mr. Henry Steven first introduced tea
              to Ceylon in 1864. Notably, Mr. Steven was the cousin of James Taylor,
              celebrated today as the Father of Ceylon Tea.
            </p>
          </motion.div>

          {/* ========== ROW 2: IMAGE + TEXT ========== */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Image 2 */}
            <div className="overflow-hidden rounded-3xl shadow-xl">
              <img
                src="/assets/img/1925/1925-haji.jpg"
                alt="Meezan restoration and estates"
                className="w-full h-[350px] md:h-[450px] object-center transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Text */}
            <p className="text-slate-700 font-outfit leading-relaxed text-[17px] text-justify">
              Driven by the challenges and opportunities of managing a tea estate,
              Mr. Mohideen expanded his ventures to include multiple plantations across
              the country. Known for his determination, integrity, and unwavering
              commitment to excellence, he built the foundation for a legacy that would
              endure through generations. Following his passing in 1964, the family
              navigated a period of transition before the stewardship of the estates was
              entrusted to Ziaudeen Meezan and his younger brother in 1974—then just 18
              and 17 years old.
              <br /><br />
              Their promising tenure was abruptly disrupted when the Land Reform
              Commission acquired all family estates in the same year. Over the next
              twelve years, the estates were gradually returned, beginning with Nagalla
              in 1986 and Ancoombra in 1990. Both estates had suffered extensive
              deterioration, but through determined effort, modernization, and
              innovation, the brothers restored the factories and fields to their former
              glory. Today, the Meezan legacy stands as a testament to resilience,
              courage, and a commitment to excellence spanning generations.
            </p>
          </motion.div>

        </section>

      </section>

      <div id="our-history" className="scroll-mt-24">
        <OurHistory />
      </div>


      {/* ====================== HISTORICAL PHOTO ARCHIVE ====================== */}

      <section className="max-w-6xl mx-auto px-6 md:px-12 py-20">
        <h2 className="text-center font-messiri text-3xl md:text-4xl text-[#3F4F2A] mb-10">
          A Glimpse Into Our History
        </h2>

        <div className="grid grid-cols-12 gap-4">
          {/* ================= LARGE IMAGE LEFT ================= */}
          <div className="col-span-12 md:col-span-7 overflow-hidden h-[220px] md:h-fit w-full">
            <img
              src="/assets/img/1925/1.jpg"
              className="w-full h-full object-center grayscale hover:grayscale-0 hover:scale-[1.03] transition-all duration-700"
              alt="Meezan historical photo 1"
            />
          </div>

          {/* ========== STACKED RIGHT IMAGES ========== */}
          <div className="col-span-12 md:col-span-5 flex flex-col gap-4">
            <div className="overflow-hidden h-[220px] md:h-1/2">
              <img
                src="/assets/img/1925/8.jpg"
                className="w-full h-full object-fill grayscale hover:grayscale-0 hover:scale-[1.03] transition-all duration-700"
                alt="Meezan historical photo 2"
              />
            </div>

            <div className="overflow-hidden h-[220px] md:h-[220px]">
              <img
                src="/assets/img/1925/9.jpg"
                className="w-full h-full object-fill grayscale hover:grayscale-0 hover:scale-[1.03] transition-all duration-700"
                alt="Meezan historical photo 3"
              />
            </div>
          </div>

          {/* ========== TWO BOTTOM WIDE IMAGES ========== */}
          <div className="col-span-12 md:col-span-6 overflow-hidden h-[220px] md:h-[300px] md:-mt-6">
            <img
              src="/assets/img/1925/4.jpeg"
              className="w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-[1.03] transition-all duration-700"
              alt="Meezan historical photo 4"
            />
          </div>

          <div className="col-span-12 md:col-span-6 overflow-hidden h-[220px] md:h-[300px] md:-mt-6">
            <img
              src="/assets/img/1925/5.jpg"
              className="w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-[1.03] transition-all duration-700"
              alt="Meezan historical photo 5"
            />
          </div>
        </div>


      </section>




    </section>
  );
};

export default AboutBody;
