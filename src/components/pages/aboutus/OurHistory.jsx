import React from "react";
import { motion } from "motion/react";

const historyData = [
  {
    year: "1925",
    title: "The First Shop & Beginning of Meezan",
    description:
      "At the age of 12–14, he began selling betel leaves in Matale, marking the start of his entrepreneurial journey. Later, Meezan Hajiar took over his uncle’s produce shop, where he received a weighing scale called 'Meezān.'in Arabic. This inspired the name Meezan, officially launching the business legacy that continues to this day.",
    image: "/assets/img/history/14.jpg",
  },
  {
    year: "1930's",
    title: "Expansion into Agricultural Trading",
    description:
      "Meezan Hajiar emerged as a leading trader in pepper, cocoa, coffee, cloves, spices and rubber. Known for his fairness, precise weighing, and unwavering integrity, he became one of Matale’s most trusted merchants.",
    image: "/assets/img/history/15.jpg",
  },
  {
    year: "1935",
    title: "Diversification & Community Leadership",
    description:
      "The business expands through strategic trading networks across the Central Province. This decade also strengthens relationships with estate owners, enabling future plantation acquisitions",
    image: "/assets/img/history/13.jpg",
  },
  {
    year: "1938",
    title: "Entry into Plantations",
    description:
      "Meezan Hajiar begins investing in and managing estates, marking the Group’s earliest involvement in agriculture and plantation management.",
    image: "/assets/img/history/6.jpeg",
  },
  {
    year: "1940's",
    title: "Growth of the Meezan Portfolio",
    description:
      "The portfolio expanded to include Ancoombra Estate, Gansarapola Estate, and additional tea, cocoa, and rubber lands. By the mid-1950’s, Meezan Hajiar had become one of the region’s most prominent private planters.",
    image: "/assets/img/history/5.jpeg",
  },
  {
    year: "1965",
    title: "Leadership Transition",
    description:
      "Following the passing of Meezan Hajiar, the next generation steps forward to carry the business forward. The nationalisation era challenges the family with the government takeover of multiple estates.",
    image: "/assets/img/history/8.jpg",
  },
  {
    year: "1975",
    title: "Resilience & Rebuilding",
    description:
      "Despite losing lands to nationalisation, Meezan Hajiar’s sons- Ihithisham Meezan and Ziaudeen Meezan, take over and rebuild the family’s commercial foundation, ensuring the Meezan name remains strong in trading, supply, and service industries",
    image: "/assets/img/history/1.jpg",
  },
  {
    year: "Early 1990’s ",
    title: "Reclamation of Estates",
    description:
      "During President Premadasa’s administration, several estates previously acquired by the government are successfully reclaimed. This marks the rebirth of the Meezan plantation sector.",
    image: "/assets/img/history/2.jpg",
  },
  {
    year: "1990's - 2000's",
    title: "Modernization of the Group",
    description:
      "Under the leadership of Ihithisham Meezan and Ziaudeen Meezan, this period witnessed enhanced management, upgraded manufacturing, stronger governance, and strategic expansion into agriculture, trading, hardware, and real estate laying the foundation for the Group’s modern structure",
    image: "/assets/img/history/12.jpg",
  },
  {
    year: "2011",
    title: "Recognition in Financial Excellence",
    description:
      "A member of the Meezan family is awarded as the Highest Taxpayer in the Matale District, reflecting the Group’s strong business performance and compliance.",
    image: "/assets/img/history/4.jpg",
  },
  {
    year: "2020",
    title: "Growth Into a Multi-Sector Group",
    description:
      "Meezan Group continues to grow steadily under strategic management and new-generation innovation, with diverse operations spanning plantations, hospitality, hardware and building materials, trading, services and agricultural products",
    image: "/assets/img/history/7.jpg",
  },
  {
    year: "2025",
    title: "Celebrating a Golden Legacy (1975-2025)",
    description:
      "Ihithisham Meezan and Ziaudeen Meezan commemorate fifty years of committed service. Their dedicated commitment, guided by unparalleled integrity and visionary leadership, has been instrumental in shaping the Meezan Group and fostering a deep, enduring commitment to the land and its people.",
    image: "/assets/img/history/9.png",
  },
  {
    year: "2025",
    title: "A Century of Excellence: Meezan Group Marks 100 Years (1925-2025) ",
    description:
      "In 2025, the Meezan Group proudly celebrates a significant landmark: 100 years of business excellence since its founding in 1925. This centennial not only honors the heritage and foundational values established a century ago but also underscores the Group's dynamic evolution and readiness to build upon this rich legacy for the next era of growth and leadership.",
    image: "/assets/logo/100-logo.png",
  },
];




const OurHistory = () => {


  return (
    <main className="w-full min-h-screen bg-[#F7F5EA] py-20">
      <section
        id="ourHistory"
        className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="mt-2 font-messiri text-3xl md:text-4xl text-[#151515]">
            Meezan Group 100 Years Legacy
          </h1>
        </div>
        <div className="text-center mb-10">
          <h1 className="mt-2 font-messiri text-3xl md:text-4xl text-[#151515]">
            1925-2025
          </h1>
        </div>


        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex justify-center mb-14"
        >
          <div className="w-full max-w-3xl">
            <img
              src="/assets/img/history/11.jpg"
              alt="Meezan historical illustration"
              className="w-full h-auto rounded-3xl shadow-md border border-[#D2C9A7]"
            />
          </div>
        </motion.div>


        <div className="relative">
          {/* Vertical line (desktop only) */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-[#D2C9A7]" />

          <div className="space-y-12">
            {historyData.map((item, index) => {
              const isEven = index % 2 === 0;
              const isLastTwo = index >= historyData.length - 2;



              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${!isEven ? "md:flex-row-reverse" : ""
                    }`}
                >

                  {/* Image */}
                  <div
                    className={`w-full md:w-1/2 flex justify-center ${isEven ? "md:justify-end" : "md:justify-start"
                      }`}
                  >
                    <div className="relative w-full max-w-sm">
                      <div className="w-full h-64 md:h-72 overflow-hidden rounded-3xl ">
                        <img
                          src={item.image}
                          alt={item.title}
                          loading="lazy"
                          className={`
    transition-all duration-300
    ${isLastTwo
                              ? "object-contain p-6 md:p-1 scale-100"
                              : "object-cover"}
    w-full h-full
    ${isLastTwo ? "" : "shadow-md"}
  `}
                        />

                      </div>

                      {!isLastTwo && (
                        <div className="absolute -top-4 -left-4 h-20 w-20 rounded-2xl -z-10 " />
                      )}
                    </div>
                  </div>



                  {/* Dot in the middle (desktop) */}
                  <div className="hidden md:flex flex-col items-center justify-center w-10">
                    <div className="h-4 w-4 rounded-full bg-[#C1B479] border-4 border-[#F7F5EA]" />
                  </div>

                  {/* Text */}
                  <div className="w-full md:w-1/2">
                    {/* ✅  */}
                    <p className="font-semibold tracking-[0.2em] uppercase text-[#7E7440] text-base md:text-lg">
                      {item.year}
                    </p>

                    <h2 className="mt-2 font-messiri text-2xl md:text-3xl text-[#151515]">
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
      {/* ---------------- DOWNLOAD SECTION ---------------- */}
      <div className="mt-20 text-center">
        <h2 className="font-messiri text-2xl md:text-3xl text-[#151515] mb-6">
          Download Our 100-Year Legacy
        </h2>

        <p className="text-[#4C4100] mb-8">
          Read the complete Meezan Group history in your preferred language.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/assets/pdf/The Legacy of Meezan Hajiar English.pdf"
            download="Meezan-Legacy-English.pdf"
            className="px-6 py-3 rounded-full border border-[#C1B479]
                 text-[#151515] font-semibold
                 hover:bg-[#C1B479] hover:text-white
                 transition"
          >
            English (PDF)
          </a>

          <a
            href="/assets/pdf/The Legacy of Meezan Hajiar Sinhala.pdf"
            download="Meezan-Legacy-Sinhala.pdf"
            className="px-6 py-3 rounded-full border border-[#C1B479]
                 text-[#151515] font-semibold
                 hover:bg-[#C1B479] hover:text-white
                 transition"
          >
            සිංහල (PDF)
          </a>

          <a
            href="/assets/pdf/The Legacy of Meezan Hajiar Tamil.pdf"
            download="Meezan-Legacy-Tamil.pdf"
            className="px-6 py-3 rounded-full border border-[#C1B479]
                 text-[#151515] font-semibold
                 hover:bg-[#C1B479] hover:text-white
                 transition"
          >
            தமிழ் (PDF)
          </a>
        </div>
      </div>

    </main>
  );
};

export default OurHistory;
