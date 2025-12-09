import React from "react";
import { motion } from "motion/react";

const historyData = [
  {
    year: "1925",
    title: "Humble Beginnings",
    description:
      "Our journey begins in 1925 with a small family-led venture rooted in the hills of Sri Lanka, cultivating a deep respect for the land and the people who worked it.",
    image: "/assets/img/history-1925.jpg",
  },
  {
    year: "1974",
    title: "Formation of Meezan Group",
    description:
      "In 1974, the Meezan Group of Companies was formally established, bringing together our early tea, agriculture, and trading operations under one vision.",
    image: "/assets/img/history-1974.jpg",
  },
  {
    year: "1990s",
    title: "Diversification & Expansion",
    description:
      "Through the 1990s, the Group expanded into hardware, exports, and supporting services, strengthening our reputation as a reliable, quality-driven partner.",
    image: "/assets/img/history-1990s.jpg",
  },
  {
    year: "Today",
    title: "A Diversified Conglomerate",
    description:
      "Meezan Group stands today as a diversified conglomerate with interests in plantations, manufacturing, hardware, exports, and hospitality—guided by the same values that shaped our beginnings.",
    image: "/assets/img/history-today.jpg",
  },
];

const OurHistory = () => {
  return (
    <main className="w-full min-h-screen bg-[#F7F5EA] py-20">
      <section className="max-w-6xl mx-auto px-6 md:px-10">
        
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#7E7440]">
            Our Journey
          </p>
          <h1 className="mt-2 font-messiri text-3xl md:text-4xl text-[#151515]">
            Our History
          </h1>
          <p className="mt-4 text-sm md:text-base text-[#4C4100] max-w-3xl mx-auto font-outfit">
            From a modest beginning in the early 20th century to a diversified
            group of companies today, Meezan Group has evolved with time while
            staying true to its founding values of integrity, resilience, and
            respect for people and place.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical line (desktop only) */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-[#D2C9A7]" />

          <div className="space-y-12">
            {historyData.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    !isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  
                  {/* Image */}
                  <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                    <div className="relative w-full max-w-sm">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-64 md:h-72 object-cover rounded-3xl shadow-md"
                      />
                      <div className="absolute -top-4 -left-4 h-10 w-10 rounded-2xl bg-[#EFE8C6] -z-10 opacity-70" />
                    </div>
                  </div>

                  {/* Dot in the middle (desktop) */}
                  <div className="hidden md:flex flex-col items-center justify-center w-10">
                    <div className="h-4 w-4 rounded-full bg-[#C1B479] border-4 border-[#F7F5EA]" />
                  </div>

                  {/* Text */}
                  <div className="w-full md:w-1/2">
                    <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#7E7440]">
                      {item.year}
                    </p>
                    <h2 className="mt-2 font-messiri text-2xl text-[#151515]">
                      {item.title}
                    </h2>
                    <p className="mt-3 text-sm md:text-base text-[#4C4100] font-outfit leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default OurHistory;
