import React, { useState, useEffect } from "react";
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

const CSR = () => {
    const [activeFactory, setActiveFactory] = useState("ancoombra");

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, [activeFactory]);

    return (
        <main className="w-full font-outfit">
            {/* ===================== HERO SECTION ===================== */}
            <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
                <img
                    src="/assets/img/banner/team-banner.jpg"
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
                            CSR Projects
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
                                MIT
                            </button>

                            <button
                                onClick={() => setActiveFactory("hatale")}
                                className={`block w-full text-left px-3 py-2 rounded-xl transition font-medium
                  ${activeFactory === "hatale"
                                        ? "bg-[#3F4F2A] text-white"
                                        : "hover:bg-slate-100 text-slate-700"
                                    }`}
                            >
                                Meezaniyyah Institute
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
                            MIT
                        </button>

                        <button
                            onClick={() => setActiveFactory("hatale")}
                            className={`whitespace-nowrap px-4 py-2 rounded-full text-sm 
                ${activeFactory === "hatale"
                                    ? "bg-[#3F4F2A] text-white"
                                    : "bg-slate-100 text-slate-700"
                                }`}
                        >
                            Meezaniyyah Institute
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
                                        src="/assets/img/csr/mit/mit-2.jpg"
                                        alt="MIT"
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
                                        Meezan Institute of Technology (MIT)
                                    </motion.h2>

                                    <motion.p
                                        variants={fadeChild}
                                        className="text-slate-600 leading-relaxed"
                                    >
                                        Meezan Institute of Technology (MIT) is a leading provider of computer education in Sri Lanka, offering courses from beginner to advanced levels in programming, software development, web design, networking, and security.With experienced faculty and hands on teaching, MIT equips students with practical skills for the digital world, supported by tutoring, career guidance, and job placement services. </motion.p>

                                    
                                </motion.div>
                            </section>

                            
                            {/* ===== Gallery (Ancoombra) ===== */} 
                            
                            <section className="max-w-5xl mx-auto py-16 px-2 md:px-0"> 
                                <h2 className="text-3xl font-messiri text-center mb-10"> 
                                    Meezan Institute of Technology (MIT) </h2> 
                                    <div className="bg-slate-50 rounded-3xl p-4 md:p-6 shadow-sm"> 
                                        <div className="grid grid-cols-12 gap-4 md:auto-rows-[190px] 
                                        lg:auto-rows-[220px]" > {/* Large main tile (left, 2 rows high) */} 
                                        <div className="col-span-12 md:col-span-7 md:row-span-2 overflow-hidden rounded-2xl md:rounded-3xl shadow-md"> 
                                            <img src="/assets/img/csr/mit/mit-1.jpg" alt="Ancoombra exterior" className="w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-500" /> </div> {/* Right top */}
                                             <div className="col-span-12 md:col-span-5 overflow-hidden rounded-2xl md:rounded-3xl shadow-md"> 
                                                <img src="/assets/img/csr/mit/mit-2.jpg" alt="Withering section" className="w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-500" />
                                                 </div> {/* Right middle */} 
                                                 <div className="col-span-12 md:col-span-5 overflow-hidden rounded-2xl md:rounded-3xl shadow-md"> 
                                                    <img src="/assets/img/csr/mit/mit-3.jpg" alt="Leaf handling" className="w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-500" /> 
                                                    </div>  </div> </div> </section>
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
                                        src="/assets/img/csr/inst/inst-1.jpg"
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
                                        Meezaniyyah Institute
                                    </motion.h2>

                                    <motion.p
                                        variants={fadeChild}
                                        className="text-slate-600 leading-relaxed"
                                    >
                                        Meezaniyyah Institute, a non-profit founded in 1954 and based in Kurugoda, Kandy, focuses on teaching the Holy Quran and Arabic while fostering an inclusive, supportive learning environment. Other subjects are taught using modern technology and advanced educational methods to ensure a comprehensive education for students from all walks of life. </motion.p>
                                     </motion.div>
                            </section>

                            {/* ===== Gallery ===== */}
                            <section className="max-w-5xl mx-auto py-16 px-2 md:px-0"> 
                                <h2 className="text-3xl font-messiri text-center mb-10"> 
                                    Meezaniyyah Institute </h2> 
                                    <div className="bg-slate-50 rounded-3xl p-4 md:p-6 shadow-sm"> 
                                        <div className="grid grid-cols-12 gap-4 md:auto-rows-[190px] 
                                        lg:auto-rows-[220px]" > {/* Large main tile (left, 2 rows high) */} 
                                        <div className="col-span-12 md:col-span-7 md:row-span-2 overflow-hidden rounded-2xl md:rounded-3xl shadow-md"> 
                                            <img src="/assets/img/csr/inst/inst-1.jpg" alt="Ancoombra exterior" className="w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-500" /> </div> {/* Right top */}
                                             <div className="col-span-12 md:col-span-5 overflow-hidden rounded-2xl md:rounded-3xl shadow-md"> 
                                                <img src="/assets/img/csr/inst/inst-2.jpg" alt="Withering section" className="w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-500" />
                                                 </div> {/* Right middle */} 
                                                 <div className="col-span-12 md:col-span-5 overflow-hidden rounded-2xl md:rounded-3xl shadow-md"> 
                                                    <img src="/assets/img/csr/inst/inst-3.jpg" alt="Leaf handling" className="w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-500" /> 
                                                    </div>  </div> </div> </section></>
                    )}
                </div>
            </section>
        </main>
    );
};

export default CSR;
