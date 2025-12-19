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

const Plantations = () => {
    const [activeFactory, setActiveFactory] = useState("ancoombra");

    // ✅ Scroll to top on tab change
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
                    src="/assets/img/banner/plantation-banner.jpg"
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
                            Meezan Plantations
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
                                Ancoombra Plantation
                            </button>

                            <button
                                onClick={() => setActiveFactory("hatale")}
                                className={`block w-full text-left px-3 py-2 rounded-xl transition font-medium
                  ${activeFactory === "hatale"
                                        ? "bg-[#3F4F2A] text-white"
                                        : "hover:bg-slate-100 text-slate-700"
                                    }`}
                            >
                                Hatale Plantations
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
                            Ancoombra Plantation
                        </button>

                        <button
                            onClick={() => setActiveFactory("hatale")}
                            className={`whitespace-nowrap px-4 py-2 rounded-full text-sm 
                ${activeFactory === "hatale"
                                    ? "bg-[#3F4F2A] text-white"
                                    : "bg-slate-100 text-slate-700"
                                }`}
                        >
                            Hatale Plantations
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
                                        src="/assets/img/plantation/ancom/4.jpg"
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
                                        Ancoombra Plantation
                                    </motion.h2>

                                    <motion.p
                                        variants={fadeChild}
                                        className="text-slate-600 leading-relaxed"
                                    >
                                        The Ancoombra Tea Plantation, located beside the historic Ancoombra Tea Factory, traces its roots back to 1864 when tea was first introduced to the area by Mr. Henry Steven, cousin of Mr. James Taylor the father of Ceylon Tea. As one of Sri Lanka’s earliest established plantations, Ancoombra gained renewed growth after its acquisition by Meezan Hajiar in 1946. Today, it proudly produces a remarkable yield of 3,500 - 4,000 kg per hectare, achieved through modern cultivation techniques, efficient plucking systems, continuous field maintenance, and strict quality management.
                                    </motion.p>

                                    <motion.p
                                        variants={fadeChild}
                                        className="text-slate-600 leading-relaxed"
                                    >
                                        The plantation supplies nearly 10% of the factory’s green leaf requirement, while the remainder is sourced from surrounding smallholders. Freshly plucked green leaf from our estate enhances the flavor and consistency of the black tea manufactured at the factory contributing to the strong domestic and international demand for our trusted Meezan tea brand.
                                    </motion.p>

                                    <motion.p
                                        variants={fadeChild}
                                        className="text-slate-600 leading-relaxed"
                                    >
                                        In addition to tea, the plantation cultivates seasonal minor crops such as pepper, cloves, cinnamon, and coffee. Ongoing efforts to clear and develop underutilized areas aim to further increase green leaf production, supporting the growing demand for black tea and ensuring long term sustainability and value for all stakeholders.
                                    </motion.p>
                                </motion.div>
                            </section>

                            {/* ===== Gallery ===== */}
                            {/* ===== Gallery (Ancoombra) ===== */} <section className="max-w-5xl mx-auto py-16 px-2 md:px-0"> <h2 className="text-3xl font-messiri text-center mb-10"> Ancoombra Factory Gallery </h2> <div className="bg-slate-50 rounded-3xl p-4 md:p-6 shadow-sm"> <div className="grid grid-cols-12 gap-4 md:auto-rows-[190px] lg:auto-rows-[220px]" > {/* Large main tile (left, 2 rows high) */} <div className="col-span-12 md:col-span-7 md:row-span-2 overflow-hidden rounded-2xl md:rounded-3xl shadow-md"> <img src="/assets/img/plantation/ancom/1.jpeg" alt="Ancoombra exterior" className="w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-500" /> </div> {/* Right top */} <div className="col-span-12 md:col-span-5 overflow-hidden rounded-2xl md:rounded-3xl shadow-md"> <img src="/assets/img/plantation/ancom/2.jpg" alt="Withering section" className="w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-500" /> </div> {/* Right middle */} <div className="col-span-12 md:col-span-5 overflow-hidden rounded-2xl md:rounded-3xl shadow-md"> <img src="/assets/img/plantation/ancom/5.jpeg" alt="Leaf handling" className="w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-500" /> </div> {/* Bottom left */} <div className="col-span-12 md:col-span-6 overflow-hidden rounded-2xl md:rounded-3xl shadow-md"> <img src="/assets/img/plantation/ancom/6.jpg" alt="Factory interior" className="w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-500" /> </div> {/* Bottom right */} <div className="col-span-12 md:col-span-6 overflow-hidden rounded-2xl md:rounded-3xl shadow-md"> <img src="/assets/img/plantation/ancom/4.jpg" alt="Estate surroundings" className="w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-500" /> </div> </div> </div> </section>
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
                                        src="/assets/img/plantation/hatale/5.jpg"
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
                                        Hatale Plantation
                                    </motion.h2>

                                    <motion.p
                                        variants={fadeChild}
                                        className="text-slate-600 leading-relaxed"
                                    >
                                        The Hatale Tea Plantation, situated in the upper reaches of Sri Lanka’s Central Province within the Madulkelle region of Kandy, rises to an elevation of approximately 3,500 ft. With its ideal combination of consistent rainfall and ample sunshine, it provides a perfect environment for growing premium tea.
                                    </motion.p>
                                    <motion.p
                                        variants={fadeChild}
                                        className="text-slate-600 leading-relaxed"
                                    >
                                        Since coming under Meezan management in 2002, Hatale has been revitalized with modern planting techniques, timely fertilization, and continuous supervision, boosting yields from around 2,000 to 4,000 kg of green leaf per hectare. Over 100 acres have been replanted to further enhance productivity, enabling the plantation to achieve an annual Made Tea production exceeding 70,000 kg.
                                    </motion.p>
                                    <motion.p
                                        variants={fadeChild}
                                        className="text-slate-600 leading-relaxed"
                                    >
                                        Hatale supplies 50% of its factory’s green-leaf requirements, with the remainder sourced from local suppliers. A well-developed road network ensures efficient transport, timely plucking, and close supervision benefiting both production and visitors staying at nearby Holiday Bungalows.
                                    </motion.p>
                                    <motion.p
                                        variants={fadeChild}
                                        className="text-slate-600 leading-relaxed"
                                    >
                                        In just eight years, Hatale has established itself as one of the region’s premier plantations, recognized not only for its productivity but more importantly for the high-quality tea it produces, delighting consumers locally and internationally. </motion.p>
                                </motion.div>
                            </section>

                            {/* ===== Gallery ===== */}
                            <section className="max-w-5xl mx-auto py-16 px-2 md:px-0"> <h2 className="text-3xl font-messiri text-center mb-10"> Hatale Plantation Gallery </h2> <div className="bg-slate-50 rounded-3xl p-4 md:p-6 shadow-sm"> <div className="grid grid-cols-12 gap-4 md:auto-rows-[190px] lg:auto-rows-[220px]" > {/* Large main tile (left, 2 rows high) */} <div className="col-span-12 md:col-span-7 md:row-span-2 overflow-hidden rounded-2xl md:rounded-3xl shadow-md"> <img src="/assets/img/plantation/hatale/1.jpg" alt="Ancoombra exterior" className="w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-500" /> </div> {/* Right top */} <div className="col-span-12 md:col-span-5 overflow-hidden rounded-2xl md:rounded-3xl shadow-md"> <img src="/assets/img/plantation/hatale/1.jpg" alt="Withering section" className="w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-500" /> </div> {/* Right middle */} <div className="col-span-12 md:col-span-5 overflow-hidden rounded-2xl md:rounded-3xl shadow-md"> <img src="/assets/img/plantation/hatale/2.jpeg" alt="Leaf handling" className="w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-500" /> </div> {/* Bottom left */} <div className="col-span-12 md:col-span-6 overflow-hidden rounded-2xl md:rounded-3xl shadow-md"> <img src="/assets/img/plantation/hatale/3.jpg" alt="Factory interior" className="w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-500" /> </div> {/* Bottom right */} <div className="col-span-12 md:col-span-6 overflow-hidden rounded-2xl md:rounded-3xl shadow-md"> <img src="/assets/img/plantation/hatale/4.jpg" alt="Estate surroundings" className="w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-500" /> </div> </div> </div> </section>
                        </>
                    )}
                </div>
            </section>
        </main>
    );
};

export default Plantations;
