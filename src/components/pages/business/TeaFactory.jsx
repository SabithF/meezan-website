import React, { useState } from "react";
import { motion } from "motion/react";

// ===== Motion Variants =====
const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeUpStagger = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.25,
        },
    },
};

const fadeChild = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: "easeOut" },
    },
};

const TeaFactoriesPage = () => {
    const [activeFactory, setActiveFactory] = useState("ancoombra"); // "hatale" | "ancoombra"

    return (
        <main className="w-full font-outfit">
            {/* ===================== HERO SECTION ===================== */}
            <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
                <img
                    src="/assets/img/banner/factory-banner.jpg"
                    alt="Tea Factory Banner"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/35" />
            </section>

            {/* ===================== MAIN LAYOUT (MENU + CONTENT) ===================== */}
            <section className="max-w-6xl mx-auto py-16 px-4 md:px-6 lg:px-10 flex flex-col md:flex-row gap-10">
                {/* ===== LEFT SIDEBAR MENU (Desktop) ===== */}
                <aside className="hidden md:block w-64 shrink-0">
                    <div className="sticky top-28 bg-slate-50 rounded-3xl shadow-md p-6 border border-slate-100">
                        <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-[0.18em] mb-4">
                            Tea Factories
                        </h3>

                        <nav className="space-y-2 text-sm">
                            <button
                                onClick={() => setActiveFactory("ancoombra")}
                                className={`block w-full text-left px-3 py-2 rounded-xl transition font-medium
                  ${activeFactory === "ancoombra"
                                        ? "bg-[#3F4F2A] text-white"
                                        : "hover:bg-slate-100 text-slate-700"
                                    }`}
                            >
                                Ancoombra Tea Factory
                            </button>
                            <button
                                onClick={() => setActiveFactory("hatale")}
                                className={`block w-full text-left px-3 py-2 rounded-xl transition font-medium
                  ${activeFactory === "hatale"
                                        ? "bg-[#3F4F2A] text-white"
                                        : "hover:bg-slate-100 text-slate-700"
                                    }`}
                            >
                                Hatale Tea Factory
                            </button>


                        </nav>
                    </div>
                </aside>

                {/* ===== MOBILE MENU (Top pills) ===== */}
                <div className="md:hidden mb-4">
                    <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">

                        <button
                            onClick={() => setActiveFactory("ancoombra")}
                            className={`whitespace-nowrap px-4 py-2 rounded-full text-sm 
                ${activeFactory === "ancoombra"
                                    ? "bg-[#3F4F2A] text-white"
                                    : "bg-slate-100 text-slate-700"
                                }`}
                        >
                            Ancoombra Tea Factory
                        </button>
                        <button
                            onClick={() => setActiveFactory("hatale")}
                            className={`whitespace-nowrap px-4 py-2 rounded-full text-sm 
                ${activeFactory === "hatale"
                                    ? "bg-[#3F4F2A] text-white"
                                    : "bg-slate-100 text-slate-700"
                                }`}
                        >
                            Hatale Tea Factory
                        </button>
                    </div>
                </div>

                {/* ===================== RIGHT CONTENT (TABS) ===================== */}
                <div className="flex-1 space-y-16">
                    {/* ========== ANCOOMBRA FACTORY CONTENT ========== */}
                    {activeFactory === "ancoombra" && (
                        <>
                            {/* ===== Big Hero Image ===== */}
                            <section className="max-w-5xl mx-auto">
                                <motion.div
                                    variants={fadeUp}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true, amount: 0.4 }}
                                    className="overflow-hidden rounded-3xl shadow-lg"
                                >
                                    <img
                                        src="/assets/img/tea-fac/ancoombra/1.jpg"
                                        alt="Ancoombra Tea Factory"
                                        className="w-full h-[260px] md:h-[420px] object-cover transition-transform duration-700 hover:scale-105"
                                    />
                                </motion.div>
                            </section>

                            {/* ===== Text Section ===== */}
                            <section className="max-w-5xl mx-auto pt-10">
                                <motion.div
                                    variants={fadeUpStagger}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true, amount: 0.4 }}
                                    className="space-y-5"
                                >
                                    <motion.h2
                                        variants={fadeChild}
                                        className="text-3xl md:text-4xl font-messiri text-slate-900"
                                    >
                                        Ancoombra Tea Factory
                                    </motion.h2>

                                    {/* your long Ancoombra content from before */}
                                    <motion.p
                                        variants={fadeChild}
                                        className="text-slate-600 leading-relaxed"
                                    >
                                        The Ancoombra Tea Factory, located in the quaint town of Ankumbura in Sri Lanka’s Central Province, stands as a proud legacy purchased in 1946 by the late Meezan Hadjiyar. Built at an elevation of 2,600 ft above sea level, it has grown into one of the largest and most respected mid-grown tea factories in the region.
                                    </motion.p>

                                    <motion.p
                                        variants={fadeChild}
                                        className="text-slate-600 leading-relaxed"
                                    >
                                        Equipped with state-of-the-art technology, Ancoombra is among the few factories in the country that operates fully automated Orthodox tea-processing systems alongside the C.T.C. (Cut, Twist & Curl) method. With a green-leaf processing capacity exceeding 52,000 kg per day, we continue to adapt to global market trends while maintaining our commitment to producing premium unblended tea. Today, Ancoombra proudly offers some of the finest black teas, celebrated for their rich aroma and exceptional flavor.
                                    </motion.p>

                                    <motion.p
                                        variants={fadeChild}
                                        className="text-slate-600 leading-relaxed"
                                    >
                                        Our dedication to excellence has been recognized with numerous prestigious awards, including the 5S and 2-Star Awards for Good Manufacturing Practices, the HACCP Food Safety Management System certification for outstanding hygiene standards, and the Entrepreneur of the Year (National) award presented in 2007 to our Chairman, Mr. Ihithisham Meezan. These accolades stand as a testament to our unwavering pursuit of quality.
                                    </motion.p>

                                    <motion.p
                                        variants={fadeChild}
                                        className="text-slate-600 leading-relaxed"
                                    >
                                        As the saying goes, <span className="italic"> “Seeing is believing.”</span> We warmly invite you to
                                        visit the Ancoombra Tea Factory and witness firsthand the
                                        remarkable journey of crafting some of the world’s finest teas.
                                    </motion.p>
                                </motion.div>
                            </section>

                            {/* ===== Gallery (Ancoombra) ===== */}
                            <section className="max-w-5xl mx-auto py-16 px-2 md:px-0">
                                <h2 className="text-3xl font-messiri text-center mb-10">
                                    Ancoombra Factory Gallery
                                </h2>

                                <div className="bg-slate-50 rounded-3xl p-4 md:p-6 shadow-sm">
                                    <div
                                        className="grid grid-cols-12 gap-4
                 md:auto-rows-[190px] lg:auto-rows-[220px]"
                                    >
                                        {/* Large main tile (left, 2 rows high) */}
                                        <div className="col-span-12 md:col-span-7 md:row-span-2 overflow-hidden rounded-2xl md:rounded-3xl shadow-md">
                                            <img
                                                src="/assets/img/tea-fac/ancoombra/2.JPG"
                                                alt="Ancoombra exterior"
                                                className="w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-500"
                                            />
                                        </div>

                                        {/* Right top */}
                                        <div className="col-span-12 md:col-span-5 overflow-hidden rounded-2xl md:rounded-3xl shadow-md">
                                            <img
                                                src="/assets/img/tea-fac/ancoombra/3.jpg"
                                                alt="Withering section"
                                                className="w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-500"
                                            />
                                        </div>

                                        {/* Right middle */}
                                        <div className="col-span-12 md:col-span-5 overflow-hidden rounded-2xl md:rounded-3xl shadow-md">
                                            <img
                                                src="/assets/img/tea-fac/ancoombra/4.jpg"
                                                alt="Leaf handling"
                                                className="w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-500"
                                            />
                                        </div>

                                        {/* Bottom left */}
                                        <div className="col-span-12 md:col-span-6 overflow-hidden rounded-2xl md:rounded-3xl shadow-md">
                                            <img
                                                src="/assets/img/tea-fac/ancoombra/5.jpg"
                                                alt="Factory interior"
                                                className="w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-500"
                                            />
                                        </div>

                                        {/* Bottom right */}
                                        <div className="col-span-12 md:col-span-6 overflow-hidden rounded-2xl md:rounded-3xl shadow-md">
                                            <img
                                                src="/assets/img/tea-fac/ancoombra/1.jpg"
                                                alt="Estate surroundings"
                                                className="w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-500"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </section>


                        </>
                    )}
                    {/* ========== HATALE FACTORY CONTENT ========== */}
                    {activeFactory === "hatale" && (
                        <>
                            {/* ===== Big Hero Image ===== */}
                            <section className="max-w-5xl mx-auto">
                                <motion.div
                                    variants={fadeUp}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true, amount: 0.4 }}
                                    className="overflow-hidden rounded-3xl shadow-lg"
                                >
                                    <img
                                        src="/assets/img/tea-fac/hatale/17.jpg"
                                        alt="Hatale Tea Factory"
                                        className="w-full h-[260px] md:h-[420px] object-cover transition-transform duration-700 hover:scale-105"
                                    />
                                </motion.div>
                            </section>

                            {/* ===== Text Section ===== */}
                            <section className="max-w-5xl mx-auto pt-10">
                                <motion.div
                                    variants={fadeUpStagger}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true, amount: 0.4 }}
                                    className="space-y-5"
                                >
                                    <motion.h2
                                        variants={fadeChild}
                                        className="text-3xl md:text-4xl font-messiri text-slate-900"
                                    >
                                        Hatale Tea Factory
                                    </motion.h2>

                                    <motion.p
                                        variants={fadeChild}
                                        className="text-slate-600 leading-relaxed"
                                    >
                                        Nestled amidst the mist-laden hills of Hatale, this factory
                                        stands at the heart of our mid-grown tea operations. Here,
                                        carefully handpicked leaves are transformed into rich, flavourful
                                        teas that capture the character of the region.
                                    </motion.p>

                                    <motion.p
                                        variants={fadeChild}
                                        className="text-slate-600 leading-relaxed"
                                    >
                                        With a blend of traditional expertise and automated precision,
                                        Hatale Tea Factory maintains rigorous quality standards from
                                        withering to packing, ensuring every batch meets export-grade
                                        excellence.
                                    </motion.p>

                                    <motion.p
                                        variants={fadeChild}
                                        className="text-slate-600 leading-relaxed"
                                    >
                                        Over the years, it has become a symbol of resilience and
                                        innovation within the Meezan Group, continuously evolving while
                                        keeping its plantation roots alive.
                                    </motion.p>
                                </motion.div>
                            </section>

                            {/* ===== Gallery (Hatale) ===== */}
                            <section className="max-w-5xl mx-auto py-16 px-2 md:px-0">
                                <h2 className="text-3xl font-messiri text-center mb-10">
                                    Hatale Factory Gallery
                                </h2>

                                <div className="bg-slate-50 rounded-3xl p-4 md:p-6 shadow-sm">
                                    <div
                                        className="grid grid-cols-12 gap-4
                 md:auto-rows-[190px] lg:auto-rows-[220px]"
                                    >
                                        {/* Large main tile (left, 2 rows high) */}
                                        <div className="col-span-12 md:col-span-7 md:row-span-2 overflow-hidden rounded-2xl md:rounded-3xl shadow-md">
                                            <img
                                                src="/assets/img/tea-fac/ancoombra/2.JPG"
                                                alt="Ancoombra exterior"
                                                className="w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-500"
                                            />
                                        </div>

                                        {/* Right top */}
                                        <div className="col-span-12 md:col-span-5 overflow-hidden rounded-2xl md:rounded-3xl shadow-md">
                                            <img
                                                src="/assets/img/tea-fac/ancoombra/3.jpg"
                                                alt="Withering section"
                                                className="w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-500"
                                            />
                                        </div>

                                        {/* Right middle */}
                                        <div className="col-span-12 md:col-span-5 overflow-hidden rounded-2xl md:rounded-3xl shadow-md">
                                            <img
                                                src="/assets/img/tea-fac/ancoombra/4.jpg"
                                                alt="Leaf handling"
                                                className="w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-500"
                                            />
                                        </div>

                                        {/* Bottom left */}
                                        <div className="col-span-12 md:col-span-6 overflow-hidden rounded-2xl md:rounded-3xl shadow-md">
                                            <img
                                                src="/assets/img/tea-fac/ancoombra/5.jpg"
                                                alt="Factory interior"
                                                className="w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-500"
                                            />
                                        </div>

                                        {/* Bottom right */}
                                        <div className="col-span-12 md:col-span-6 overflow-hidden rounded-2xl md:rounded-3xl shadow-md">
                                            <img
                                                src="/assets/img/tea-fac/hatale/1.jpg"
                                                alt="Estate surroundings"
                                                className="w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-500"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </>
                    )}


                </div>
            </section>
        </main>
    );
};

export default TeaFactoriesPage;
