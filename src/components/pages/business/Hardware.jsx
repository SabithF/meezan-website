import React from "react";
import { motion } from "motion/react";

// ===== Motion Variants =====
const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
    },
};

const fadeUpStagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.25 } },
};

const fadeChild = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: "easeOut" },
    },
};

const MeezanHardwarePage = () => {
    return (
        <main className="w-full font-outfit">
          
            <section className="relative w-full overflow-hidden md:mt-0 mt-[72px]">
                {/* Image container */}
                <div className="relative w-full">
                    <img
                        src="/assets/img/banner/hardware-banner.jpg"
                        alt="Meezan Hardware"
                        className="absolute top-0 left-0 w-full h-auto object-contain"
                    />

                </div>

                <img
                    src="/assets/img/banner/hardware-banner.jpg"
                    alt=""
                    className="w-full h-auto object-contain opacity-0 pointer-events-none"
                />

            </section>
        


            {/* ===================== INTRO ===================== */ }
    <section className="max-w-6xl mx-auto py-16 px-4 md:px-6 lg:px-10 space-y-16">
        <section className="max-w-5xl mx-auto">
            <motion.div
                variants={fadeUpStagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                className="space-y-5"
            >
                {/* ===== Big Featured Image (same as teas page) ===== */}
                <section className="max-w-5xl mx-auto">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.4 }}
                        className="overflow-hidden rounded-3xl shadow-lg"
                    >
                        <img
                            src="/assets/img/hardware.jpg"
                            alt="Meezan Hardware Store"
                            className="w-full h-[260px] md:h-[700px] object-cover"
                        />
                    </motion.div>
                </section>

                {/* ===== Big Topic Heading ===== */}
                <motion.h2
                    variants={fadeChild}
                    className="text-3xl md:text-4xl font-messiri text-slate-900"
                >
                    Meezan Hardware Store
                </motion.h2>

                {/* ===== Content (same paragraph style) ===== */}
                <motion.p
                    variants={fadeChild}
                    className="text-slate-600 leading-relaxed"
                >
                    Meezan Hardware Store, situated in the heart of Matale City,
                    traces its roots back to the property originally named PSKV
                    Pallaklebbe. The business was purchased by the late Meezan Hajiar
                    in the mid-1950s. Following the acquisition, the store was managed
                    by a succession of individuals, including Mr. Saleem and Mr.
                    Hanifa, until 1969. In 1969, the operations were formally taken
                    over and handed to Mr. Marjan, the brother of the former Minister
                    Mr. Hameed and Mr. Mausooof.
                </motion.p>

                <motion.p
                    variants={fadeChild}
                    className="text-slate-600 leading-relaxed"
                >
                    The business was firmly and permanently re-established on June 10,
                    1975, when it was taken over by Meezan Hajiar&apos;s sons, Mr.
                    Ziaudeen and Mr. Ihithisham Meezan. Upon this takeover, the name
                    was officially changed to Meezan Hardware Store. Mr. Ziaudeen has
                    been actively managing the business for the past five decades,
                    guiding its growth and transformation into a trusted and respected
                    brand in the region.
                </motion.p>

                {/* ===== Highlight Block (optional but matches your clean style) ===== */}
                <motion.div
                    variants={fadeChild}
                    className="mt-6 bg-slate-50 border border-slate-100 rounded-3xl p-8 shadow-sm"
                >
                    <h3 className="text-2xl font-messiri text-slate-900">
                        A Matale Landmark
                    </h3>

                    <div className="mt-4 space-y-4">
                        <p className="text-slate-600 leading-relaxed">
                            Meezan Hardware Stores stands as the oldest hardware store in
                            the Matale District. This longevity is a testament to its
                            resilience: in 1975, there were eight other hardware stores in
                            Matale, yet today, Meezan is one of only two remaining.
                        </p>

                        <p className="text-slate-600 leading-relaxed">
                            With more than five decades of industry experience, Meezan
                            Hardware has consistently met the construction needs of its
                            customers by offering a comprehensive range of quality
                            products from reputable local and international brands.
                        </p>
                    </div>
                </motion.div>
            </motion.div>
        </section>


    </section>
        </main >
    );
};

export default MeezanHardwarePage;
