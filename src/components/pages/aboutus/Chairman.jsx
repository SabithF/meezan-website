// src/components/About/Chairman.tsx
import React from "react";
import { motion } from "motion/react";

const ChairmanSection = () => {
  return (
    <section className="w-full py-24 px-4 bg-[#F7F5EA]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[2.5rem] bg-white/90 border border-[#E5E0C8] shadow-[0_18px_40px_rgba(0,0,0,0.06)] px-8 py-10 md:px-16 md:py-14 flex flex-col md:flex-row items-center gap-10"
        >
          {/* Accent shape */}
          <div className="pointer-events-none absolute -top-8 -right-8 h-28 w-28 rounded-3xl bg-[#EFE8C6] -z-10 opacity-80" />

          {/* Image */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-start">
            <div className="relative w-56 h-64 md:w-64 md:h-72">
              <img
                src="/assets/img/bung-02.jpg" // chairman image
                alt="Chairman of Meezan Group, Imthisham Meezan"
                className="w-full h-full object-cover rounded-3xl shadow-xl"
              />
              <div className="absolute inset-0 rounded-3xl ring-1 ring-black/5 pointer-events-none" />
            </div>
          </div>

          {/* Text */}
          <div className="w-full md:w-2/3 text-left">
            <p className="text-xs font-semibold tracking-[0.22em] uppercase text-[#7E7440] mb-2">
              Leadership
            </p>
            <h2 className="font-messiri text-3xl md:text-4xl text-[#151515]">
              Chairman’s Message
            </h2>

            <div className="mt-4 mb-6">
              <p className="font-cursiveFont text-2xl text-[#3B3900]">
                Imthisham Meezan
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[#7E7440]">
                Chairperson · Meezan Group of Companies
              </p>
            </div>

            <p className="text-[#4C4100] leading-relaxed font-outfit text-sm md:text-base bg-[#FDFBF3] rounded-2xl px-5 py-4">
              “Marking over five decades since our humble inception in 1974, it
              is with great pleasure that I reflect on the remarkable journey of
              the Meezan Group of Companies. What began as a modest family
              venture has grown into a diversified group grounded in integrity,
              resilience, and a ‘never say never’ spirit. My brother Ziaudeen
              Meezan and I look back with gratitude at the many milestones we
              have overcome, and with confidence toward the opportunities that
              lie ahead.”
            </p>

            <button
              type="button"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#D1C89F] bg-[#F5F0D9] px-6 py-2 text-sm font-medium text-[#3B3900] hover:bg-[#EDE4BF] hover:border-[#C5B87D] transition-colors"
            >
              Read full message
              <span aria-hidden="true">↗</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ChairmanSection;
