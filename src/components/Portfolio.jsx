import React from "react";
import { motion } from "motion/react";
import { heroContent } from "../const";

const Portfolio = () => {

    const fadeupLeft = { hidden:{opacity:0,x:-50}, show:{opacity:1,x:0, transition:{duration:0.8,ease:"easeOut"}} };
    const fadeupRight = { hidden:{opacity:0,x:50}, show:{opacity:1,x:0, transition:{duration:0.8,ease:"easeOut"}} };

    

    return (
        <section className="w-full flex flex-col">

            {/* ---------------- ROW 1 ---------------- */}
            <div className="mx-auto grid grid-cols-1 md:grid-cols-2">

                {/* TEXT first on mobile */}
                <motion.div
                    variants={fadeupLeft}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once:true, amount:0.2 }}
                    className="order-1 md:order-none flex flex-col justify-center px-12 py-10"
                >
                    <h1 className="text-3xl pb-6 font-semibold font-poppins text-[#26759D]">{heroContent[0].lable}</h1>
                    <p className="font-outfit">{heroContent[0].desc}</p>
                    <button className="bg-[#26759D] w-52 font-outfit mt-8 py-2 rounded-md text-white">Read More</button>
                </motion.div>

                {/* IMAGE second on mobile */}
                <motion.div
                    variants={fadeupRight}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once:true, amount:0.2 }}
                    className="order-2 md:order-none w-full h-full"
                >
                    <img src="/assets/img/img-4.jpg" className="w-full h-full object-cover" />
                </motion.div>
            </div>

            {/* ---------------- ROW 2 ---------------- */}
            <div className="mx-auto grid grid-cols-1 md:grid-cols-2">

                {/* IMAGE should be second on mobile */}
                <motion.div
                    variants={fadeupLeft}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once:true, amount:0.2 }}
                    className="order-2 md:order-none w-full h-full"
                >
                    <img src="/assets/img/img-4.jpg" className="w-full h-full object-cover" />
                </motion.div>

                {/* TEXT should be first on mobile */}
                <motion.div
                    variants={fadeupRight}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once:true, amount:0.2 }}
                    className="order-1 md:order-none flex flex-col justify-center px-12 py-10"
                >
                    <h1 className="text-3xl pb-6 font-semibold font-poppins text-[#26759D]">{heroContent[1].lable}</h1>
                    <p className="font-outfit">{heroContent[1].desc}</p>

                    <div className="flex flex-row pt-4">
                        <img src="/assets/img/sls.png" className="h-24" />
                        <img src="/assets/img/sls.png" className="h-24" />
                        <img src="/assets/img/sls.png" className="h-24" />
                        <img src="/assets/img/sls.png" className="h-24" />
                    </div>

                    <button className="bg-[#26759D] w-52 font-outfit mt-8 py-2 px-12 rounded-md text-white">Read More</button>
                </motion.div>
            </div>

            {/* ---------------- ROW 3 ---------------- */}
            <div className="mx-auto grid grid-cols-1 md:grid-cols-2">

                {/* TEXT first on mobile */}
                <motion.div
                    variants={fadeupLeft}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once:true, amount:0.2 }}
                    className="order-1 md:order-none flex flex-col justify-center px-12 py-10"
                >
                    <h1 className="text-3xl pb-6 font-semibold font-poppins text-[#26759D]">{heroContent[2].lable}</h1>
                    <p className="font-outfit">{heroContent[2].desc}</p>
                    <button className="bg-[#26759D] w-52 font-outfit mt-8 py-2 px-12 rounded-md text-white">Read More</button>
                </motion.div>

                {/* IMAGE second on mobile */}
                <motion.div
                    variants={fadeupRight}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once:true, amount:0.2 }}
                    className="order-2 md:order-none w-full h-full"
                >
                    <img src="/assets/img/img-4.jpg" className="w-full h-full object-cover" />
                </motion.div>
            </div>

            {/* ---------------- ROW 4 ---------------- */}
            <div className="mx-auto grid grid-cols-1 md:grid-cols-2">

                {/* IMAGE second on mobile */}
                <motion.div
                    variants={fadeupLeft}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once:true, amount:0.2 }}
                    className="order-2 md:order-none w-full h-full"
                >
                    <img src="/assets/img/img-4.jpg" className="w-full h-full object-cover" />
                </motion.div>

                {/* TEXT first on mobile */}
                <motion.div
                    variants={fadeupRight}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once:true, amount:0.2 }}
                    className="order-1 md:order-none flex flex-col justify-center px-12 py-10"
                >
                    <h1 className="text-3xl pb-6 font-semibold font-poppins text-[#26759D]">{heroContent[3].lable}</h1>
                    <p className="font-outfit">{heroContent[3].desc}</p>
                    <button className="bg-[#26759D] w-52 font-outfit mt-8 py-2 px-12 rounded-md text-white">Read More</button>
                </motion.div>
            </div>

            {/* ---------------- ROW 5 ---------------- */}
            <div className="mx-auto grid grid-cols-1 md:grid-cols-2">

                {/* TEXT first on mobile */}
                <motion.div
                    variants={fadeupLeft}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once:true, amount:0.2 }}
                    className="order-1 md:order-none flex flex-col justify-center px-12 py-10"
                >
                    <h1 className="text-3xl pb-6 font-semibold font-poppins text-[#26759D]">{heroContent[4].lable}</h1>
                    <p className="font-outfit">{heroContent[4].desc}</p>
                    <button className="bg-[#26759D] w-52 font-outfit mt-8 py-2 px-12 rounded-md text-white">Read More</button>
                </motion.div>

                {/* IMAGE second on mobile */}
                <motion.div
                    variants={fadeupRight}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once:true, amount:0.2 }}
                    className="order-2 md:order-none w-full h-full"
                >
                    <img src="/assets/img/img-4.jpg" className="w-full h-full object-cover" />
                </motion.div>
            </div>

        </section>
    );
};

export default Portfolio;
