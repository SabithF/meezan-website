import { motion } from "motion/react";
import React, { useEffect, useState, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

// Motion variants
const fadeChild = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const ChairmanMessagePage = () => {
  const [activeTab, setActiveTab] = useState("chairman");

  
  const location = useLocation();

  
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [location.pathname]);

  
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [activeTab]);

  return (
    <main className="w-full font-outfit">
      {/* ================= HERO ================= */}
      <section className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden">
        <img
          src="/assets/img/banner/team-banner.jpg"
          alt="Chairman banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative h-full w-full flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-messiri tracking-tight">
            The Team Behind the Legacy
          </h1>
          <p className="mt-3 text-sm md:text-base opacity-90 max-w-2xl text-center">
            A reflection on our journey, our values, and the legacy that continues to
            guide Meezan Group forward.
          </p>
        </div>
      </section>

      {/* ================= MAIN LAYOUT ================= */}
      <section className="max-w-6xl mx-auto py-16 px-4 md:px-6 lg:px-10 flex flex-col md:flex-row gap-10">
        {/* LEFT SIDEBAR (DESKTOP ONLY) */}
        <aside className="hidden md:block w-64 shrink-0">
          <div className="sticky top-28 bg-slate-50 rounded-3xl shadow-md p-6 border border-slate-100">
            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-[0.18em] mb-4">
              The Team
            </h3>

            <nav className="space-y-2 text-sm">
              <button
                onClick={() => setActiveTab("chairman")}
                className={`block w-full text-left px-3 py-2 rounded-xl transition font-medium
                  ${
                    activeTab === "chairman"
                      ? "bg-[#3F4F2A] text-white"
                      : "hover:bg-slate-100 text-slate-700"
                  }`}
              >
                Chairman's Message
              </button>

              <button
                onClick={() => setActiveTab("family")}
                className={`block w-full text-left px-3 py-2 rounded-xl transition font-medium
                  ${
                    activeTab === "family"
                      ? "bg-[#3F4F2A] text-white"
                      : "hover:bg-slate-100 text-slate-700"
                  }`}
              >
                Meezan Family
              </button>
            </nav>
          </div>
        </aside>

        {/* MOBILE MENU */}
        <div className="md:hidden mb-8">
          <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
            <button
              onClick={() => setActiveTab("chairman")}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm 
                ${
                  activeTab === "chairman"
                    ? "bg-[#3F4F2A] text-white"
                    : "bg-slate-100 text-slate-700"
                }`}
            >
              Chairman's Message
            </button>

            <button
              onClick={() => setActiveTab("family")}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm 
                ${
                  activeTab === "family"
                    ? "bg-[#3F4F2A] text-white"
                    : "bg-slate-100 text-slate-700"
                }`}
            >
              Meezan Family
            </button>
          </div>
        </div>

        {/* ================= RIGHT CONTENT ================= */}
        <motion.div className="flex-1 space-y-16">
          {/* ================= TAB 1 — CHAIRMAN MESSAGE ================= */}
          {activeTab === "chairman" && (
            <section className="space-y-8">
              {/* Heading */}
              <motion.div variants={fadeChild} className="inline-flex flex-col gap-2">
                <h2 className="text-2xl md:text-3xl font-messiri text-slate-900">
                  A Message from Our Chairman
                </h2>
                <div className="h-[2px] w-16 bg-[#3F4F2A] rounded-full" />
              </motion.div>

              {/* Chairman Image */}
              <motion.div
                variants={fadeChild}
                className="overflow-hidden rounded-3xl shadow-lg max-w-3xl mx-auto"
              >
                <img
                  src="/assets/img/team/chair.jpg"
                  alt="Chairman portrait"
                  className="w-full h-[260px] md:h-[600px] object-cover transition-transform duration-700 hover:scale-105"
                />
              </motion.div>

              {/* --- CONTENT STARTS --- */}
              <motion.p variants={fadeChild} className="text-slate-700 leading-relaxed">
                It is with great pleasure that I, as the Chairman of the Meezan Group of
                Companies, extend this message of greetings and felicitations. Looking back
                through the pages of our history, I feel a deep sense of pride in how far we
                have come since our humble beginnings in 1974. Our journey has been filled
                with both challenges and triumphs, but the defining factor of our success has
                always been our unwavering determination. No matter the obstacles or
                difficulties we faced, my brother Ziaudeen and I stood firm, driven by a
                “never give up” attitude that continues to guide us to this day.
                <br />
                <br />
                As a child, accompanying my elder siblings to various tea plantations, I was
                captivated by their scale, beauty, and potential. Even then, I sensed that
                this industry would one day become my calling and time proved me right.
                Ziaudeen and I began our journey in planting while still in our late teens.
                Though the path was marked with setbacks and moments of disappointment, by
                the grace of Allah, we persevered and remained steadfast through every
                challenge.
              </motion.p>

              {/* Image 2 */}
              <motion.div
                variants={fadeChild}
                className="overflow-hidden rounded-3xl shadow-lg max-w-3xl mx-auto"
              >
                <img
                  src="/assets/img/team/2.jpg"
                  alt="Meezan estates and team"
                  className="w-full h-[260px] md:h-[600px] object-cover transition-transform duration-700 hover:scale-105"
                />
              </motion.div>

              <motion.p variants={fadeChild} className="text-slate-700 leading-relaxed">
                One of the most difficult moments in our journey was when our land was taken
                over by the Land Reform Commission (LRC) in the late 1970’s. It was a loss
                that deeply affected us. Yet, we knew we had been wronged, and we were
                determined not to surrender without a fight. What followed was a twelve year
                legal battle in which both sides did everything possible to assert their
                claims. Ultimately, we regained the Nagalla Plantation in 1986, the Ancoombra
                Plantation in 1990, and finally, in 2002, the Hatale Tea Plantation was
                returned to us as part compensation. In 2009, we further strengthened our
                operations by acquiring the Dartry Tea Factory. Today, when I reflect on
                those years of effort, sacrifice, and resilience, I am reminded that it was
                all worthwhile.
                <br />
                <br />
                With nearly 35 years of experience, a dedicated staff of over 150, and an
                annual black tea production of almost two million kilograms, we continue to
                offer our customers what we have always promised superior quality,
                garden-fresh, handpicked, perfected, and unblended teas. Our pursuit of
                perfection is matched only by the commitment, perseverance, and integrity
                that define every aspect of our work. As I often remind my team:
                <span className="italic">
                  {" "}
                  “If one tries hard enough, the impossible can be made possible.”{" "}
                </span>
              </motion.p>

              <motion.p variants={fadeChild} className="text-slate-700 leading-relaxed">
                We sincerely hope that the Sri Lankan tea industry will continue to grow,
                inspiring tea producers across the nation to strive for the highest standards
                and strengthen Sri Lanka’s competitive position in the global marketplace.
              </motion.p>

              <motion.p variants={fadeChild} className="text-slate-700 leading-relaxed">
                Our vision is to elevate Meezan Plantations to become one of the best in the
                region. To achieve this, we have implemented several initiatives to maximize
                yield. Our plantations in Hatale and Ancoombra currently produce around 2,500
                kg per hectare, and our long-term goal is to increase this to 4,000 kg and
                beyond.
              </motion.p>

              <motion.p variants={fadeChild} className="text-slate-700 leading-relaxed">
                I am pleased to note that we have introduced the CTC (Cut, Twist, Curl)
                method alongside fully automated orthodox manufacturing at our Ancoombra
                factory. This makes us one of the few facilities in the region to operate
                both processes under one roof. Our factories consistently produce some of the
                finest Mid-Grown Teas, highly sought after both locally and internationally.
                It comes as no surprise that our unblended teas are frequently preferred by
                agents and buyers at the Colombo Tea Auction.
              </motion.p>

              <motion.p variants={fadeChild} className="text-slate-700 leading-relaxed">
                Before concluding, I wish to express my heartfelt gratitude on behalf of the
                entire Meezan Group and on a personal note to my brother Ziaudeen for his
                relentless support and unwavering dedication, and to all our shareholders
                for their continued encouragement over the years. Our journey has not been
                without its challenges, but we have always chosen to move forward with
                courage and without regret.
              </motion.p>

              <motion.p variants={fadeChild} className="text-slate-700 leading-relaxed">
                We offer our deepest thanks to Allah for His blessings, and to our late
                father - Meezan Hajiar, whose footsteps we have strived to follow with
                honour. With many dreams already fulfilled, we look forward to achieving
                even more in the years to come, InshaAllah.
              </motion.p>

              {/* Signature */}
              <motion.div variants={fadeChild} className="border-l-4 border-[#3F4F2A] pl-4">
                <p className="font-cursiveFont text-2xl text-[#3B3900]">Imthisham Meezan</p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[#7E7440]">
                  Chairman, Meezan Group of Companies
                </p>
              </motion.div>

              

              {/* ============ TWO LANDSCAPE IMAGES ============ */}
              <motion.div
                variants={fadeChild}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
              >
                
              </motion.div>

              <div className="overflow-hidden rounded-3xl shadow-lg">
                  <img
                    src="/assets/img/team/3.jpg"
                    alt="Historical Meezan moment"
                    className="w-full h-[250px] md:h-[500px] object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>

                <div className="overflow-hidden rounded-3xl shadow-lg">
                  <img
                    src="/assets/img/team/4.jpg"
                    alt="Meezan legacy image"
                    className="w-full h-[250px] md:h-[500px] object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <img
                src="/assets/img/history/9.png"
                alt="Meezan legacy image"
                className="w-80 h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </section>
          )}

          {/* ================= TAB 2 — MEEZAN FAMILY ================= */}
          {activeTab === "family" && (
            <section className="space-y-10">
              {/* Main heading */}
              <motion.div
                variants={fadeChild}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="inline-flex flex-col gap-2"
              >
                <h2 className="text-2xl md:text-3xl font-messiri text-slate-900">
                  The Meezan Family
                </h2>
                <div className="h-[2px] w-20 bg-[#3F4F2A] rounded-full" />
              </motion.div>

              {/* Main banner-style image */}
              <motion.div
                variants={fadeChild}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="overflow-hidden rounded-3xl shadow-lg max-w-4xl mx-auto"
              >
                <img
                  src="/assets/img/family/2.jpg"
                  alt="Meezan family and team"
                  className="w-full h-[260px] md:h-[420px] object-cover transition-transform duration-700 hover:scale-105"
                />
              </motion.div>

              {/* Intro paragraph */}
              <motion.p
                variants={fadeChild}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="text-slate-700 leading-relaxed max-w-3xl"
              >
                At the heart of the Meezan Group is a close-knit family built on dedication, sincerity, and a shared passion for the tea industry. Ihithisham Meezan and Ziaudeen Mohideen, have spent nearly four decades working closely with the land, the people, and the craft of planting. 
                 </motion.p>

              {/* ========== FAMILY LEADER BLOCK ========== */}
              <motion.div
                variants={fadeChild}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="max-w-4xl mx-auto space-y-6"
              >
                {/* BIG IMAGE */}
                <div className="overflow-hidden rounded-3xl shadow-lg">
                  <img
                    src="/assets/img/family/1.jpg"
                    alt="Ziaudeen Mohideen"
                    className="w-full h-[420px] md:h-[520px] object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>

                {/* TEXT SECTION */}
                <div className="space-y-3">
                  <h3 className="font-messiri text-2xl md:text-3xl text-slate-900">
                    Ziaudeen Mohideen
                  </h3>

                  <p className="text-xs uppercase tracking-[0.18em] text-[#7E7440]">
                    Director
                  </p>

                  <p className="text-slate-700 leading-relaxed text-[15px] md:text-[16px]">
                    Their leadership is shaped by humility, hard work, and a deep respect for
                    every individual who contributes to our journey. With their experience and
                    grounded values, they continue to guide and inspire us every day.
                    <br />
                    <br />
                    Supporting them is our General Manager, Mr. M.A.M Akbar, whose extensive
                    experience in the tea trade has been a true blessing to us. Having served
                    in some of Sri Lanka’s finest plantations, his calm leadership, practical
                    insight, and steady presence help ensure that our operations run smoothly
                    and efficiently.
                    <br />
                    <br />
                    We are deeply grateful for our most important strength — our staff. From
                    the factory floors to the tea fields, our dedicated and well-trained team
                    brings heart, pride, and commitment to their work. Their daily
                    contributions, often carried out quietly and with genuine passion, ensure
                    that our teas are crafted with care and that our operations remain
                    consistent and reliable.
                  </p>
                </div>
              </motion.div>

              {/* ========== NEW CHAPTER SECTION ========== */}
              <motion.div
                variants={fadeChild}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="space-y-6"
              >
                {/* Sub heading */}
                <div className="inline-flex flex-col gap-2">
                  <h3 className="text-xl md:text-2xl font-messiri text-slate-900">
                    A New Chapter of the Meezan Family
                  </h3>
                  <div className="h-[2px] w-24 bg-[#3F4F2A] rounded-full" />
                </div>

                {/* Image for new chapter */}
                <div className="overflow-hidden rounded-3xl shadow-lg max-w-4xl mx-auto">
                  <img
                    src="/assets/img/family/3.jpg"
                    alt="Next generation of Meezan family"
                    className="w-full object-contain transition-transform duration-700 hover:scale-105"
                  />
                </div>

                {/* Message */}
                <p className="text-slate-700 leading-relaxed max-w-3xl">
                  As we look ahead, we are thankful to see the next generation step into the fold. Shafraz Meezan and Ijaz Meezan, together with a growing team of young, energetic professionals, are preparing to lead the Meezan Group into its next chapter. Their fresh perspectives, enthusiasm, and respect for the values handed down to them give us great confidence for the future.
Together, this is the Meezan Family- a group of people working with sincerity to produce black tea of the highest quality, taste, and value, while staying true to our principles and serving our stakeholders, both locally and globally with pride, humility, and gratitude.

                </p>
              </motion.div>
            </section>
          )}
        </motion.div>
      </section>
    </main>
  );
};

export default ChairmanMessagePage;
