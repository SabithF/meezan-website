import React from "react";
import { motion } from "motion/react";

const Portfolio = () => {

    const fadeupLeft = {
        hidden: { opacity: 0, x: -50 },
        show: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    const fadeupRight = {
        hidden: { opacity: 0, x: 50 },
        show: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        <section className="w-full flex flex-col">

            {/* ---------------- ROW 1 ---------------- */}
            <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 ">

                {/* TEXT */}
                <motion.div
                    variants={fadeupLeft}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="flex flex-col justify-center px-12 py-10"
                >
                    <h1 className="text-3xl pb-6 font-black font-outfit text-[#26759D]">
                        Meezan Factory
                    </h1>
                    <p className="font-outfit">
                        The Ancoombra Tea Factory is strategically situated in the township of Ankumbura,
                        nestled within the heart of the Central Province. Acquired in 1946 by the late Meezan Hadjiyar,
                        the factory stands at an elevation of 2,600 feet above sea level and has cultivated a
                        distinguished reputation as one of the premier and largest mid-grown tea processing
                        facilities in the Central region
                    </p>
                    <button className="bg-[#26759D] font-outfit mt-8 py-2 px-12 rounded-md text-white">
                        Read More
                    </button>
                </motion.div>

                {/* IMAGE */}
                <motion.div
                    variants={fadeupRight}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="w-full h-full"
                >
                    <img
                        src="/assets/img/img-4.jpg"
                        className="w-full h-full object-cover"
                        alt="Factory"
                    />
                </motion.div>
            </div>

            {/* ---------------- ROW 2 ---------------- */}
            <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 ">

                {/* IMAGE LEFT */}
                <motion.div
                    variants={fadeupLeft}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="w-full h-full"
                >
                    <img
                        src="/assets/img/img-4.jpg"
                        className="w-full h-full object-cover"
                        alt="Factory"
                    />
                </motion.div>

                {/* TEXT RIGHT */}
                <motion.div
                    variants={fadeupRight}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="flex flex-col justify-center px-12 py-10"
                >
                    <h1 className="text-3xl pb-6 font-black font-outfit text-[#26759D]">
                        Meezan Bungalow
                    </h1>
                    <p className="font-outfit">
                        Four luxury estate bungalows in four exotic locations for you to choose from.
                        Nestled in scenic tea estates and lush forests, each retreat offers spacious rooms,
                        modern comforts, and breathtaking views.
                    </p>
                    <button className="bg-[#26759D] font-outfit mt-8 py-2 px-12 rounded-md text-white">
                        Read More
                    </button>
                </motion.div>
            </div>

            {/* ---------------- ROW 3 ---------------- */}
            <div className=" mx-auto grid grid-cols-1 md:grid-cols-2">

                {/* TEXT LEFT */}
                <motion.div
                    variants={fadeupLeft}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="flex flex-col justify-center px-12 py-10"
                >
                    <h1 className="text-3xl pb-6 font-black font-outfit text-[#26759D]">
                        Meezan Plantation
                    </h1>
                    <p className="font-outfit">
                        Meezan Group proudly cultivates its own tea plantations in the heart of Sri Lanka,
                        the birthplace of Ceylon tea. This direct involvement ensures the exceptional quality and
                        distinctive character that define our premium tea offerings.
                    </p>
                    <button className="bg-[#26759D] font-outfit mt-8 py-2 px-12 rounded-md text-white">
                        Read More
                    </button>
                </motion.div>

                {/* IMAGE RIGHT */}
                <motion.div
                    variants={fadeupRight}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="w-full h-full"
                >
                    <img
                        src="/assets/img/img-4.jpg"
                        className="w-full h-full object-cover"
                        alt="Factory"
                    />
                </motion.div>
            </div>

            {/* ---------------- ROW 4 ---------------- */}
            <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 ">

                {/* IMAGE LEFT */}
                <motion.div
                    variants={fadeupLeft}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="w-full h-full"
                >
                    <img
                        src="/assets/img/img-4.jpg"
                        className="w-full h-full object-cover"
                        alt="Factory"
                    />
                </motion.div>

                {/* TEXT RIGHT */}
                <motion.div
                    variants={fadeupRight}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="flex flex-col justify-center px-12 py-10"
                >
                    <h1 className="text-3xl pb-6 font-black font-outfit text-[#26759D]">
                        Meezan Hospitality
                    </h1>
                    <p className="font-outfit">
                        Four luxury estate bungalows in four exotic locations for you to choose from…
                    </p>
                    <button className="bg-[#26759D] font-outfit mt-8 py-2 px-12 rounded-md text-white">
                        Read More
                    </button>
                </motion.div>
            </div>

            {/* ---------------- ROW 5 ---------------- */}
            <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 ">

                {/* TEXT LEFT */}
                <motion.div
                    variants={fadeupLeft}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="flex flex-col justify-center px-12 py-10"
                >
                    <h1 className="text-3xl pb-6 font-black font-outfit text-[#26759D]">
                        Meezan Education
                    </h1>
                    <p className="font-outfit">
                        Meezan Group proudly cultivates its own tea plantations…
                    </p>
                    <button className="bg-[#26759D] font-outfit mt-8 py-2 px-12 rounded-md text-white">
                        Read More
                    </button>
                </motion.div>

                {/* IMAGE RIGHT */}
                <motion.div
                    variants={fadeupRight}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="w-full h-full"
                >
                    <img
                        src="/assets/img/img-4.jpg"
                        className="w-full h-full object-cover"
                        alt="Factory"
                    />
                </motion.div>
            </div>

        </section>
    );
};

export default Portfolio;
