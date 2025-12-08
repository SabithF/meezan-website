import React from "react";
import { motion } from "motion/react";
import { heroContent } from "../const";

const Portfolio = () => {

    const fadeupLeft = { hidden: { opacity: 0, x: -50 }, show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } } };
    const fadeupRight = { hidden: { opacity: 0, x: 50 }, show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } } };

    const fontColor = {
        headingtxt: "#5a676c",
        bodytext: "#5a676c",
        buttontext: ""
    }

    return (
        <section className="w-full flex flex-col overflow-hidden">

            {/* ---------------- ROW 1 ---------------- */}
            <div className="mx-auto grid grid-cols-1 md:grid-cols-2">

                {/* TEXT first on mobile */}
                <motion.div
                    variants={fadeupLeft}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="order-1 md:order-none flex flex-col 
                    md:items-start justify-center  items-center
                        px-8
                     md:px-20 py-12"
                >
                    <h1
                        style={{ color: fontColor.headingtxt }}
                        className="md:text-3xl text-2xl md:pb-6 pb-2  font-headLine">{heroContent[0].lable}</h1>
                    <p

                        className="font-outfit  text-center md:text-left">{heroContent[0].desc}</p>
                    <button
                        className="
                            bg-[#447e9d] w-52 h-9 md:pb-1 md:mt-8 mt-5
    
                            flex justify-center items-center
                            font-headLine  md:text-lg tex-md
                            rounded-md text-white
                        "
                    >
                        Read More
                    </button>

                </motion.div>

                {/* Video s*/}
                <motion.div

                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="order-2 md:order-none w-full h-full"
                >
                    <video
                        src="/assets/vdo/bang-vdo.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    ></video>
                </motion.div>
            </div>

            {/* ---------------- ROW 2 ---------------- */}
            <div className="mx-auto grid grid-cols-1 md:grid-cols-2">

                {/* IMAGE should be second on mobile */}
                <motion.div

                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="order-2 md:order-none w-full h-full"
                >
                    <video
                        src="/assets/vdo/tea-fac-vdo.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    ></video>
                </motion.div>

                {/* TEXT should be first on mobile */}
                <motion.div
                    variants={fadeupRight}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="order-1 md:order-none flex flex-col 
                    md:items-start justify-center  items-center
                        px-8
                     md:px-20 py-12"
                >
                    <h1
                        style={{ color: fontColor.headingtxt }}
                        className="md:text-3xl text-2xl  md:pb-6 pb-2 font-headLine">{heroContent[1].lable}</h1>
                    <p

                        className="font-outfit  text-center md:text-left">{heroContent[1].desc}</p>
                    {/* <div className="">
                        <img src="/assets/img/logoLine.png" alt="logos" className="object-cover  md:h-32 py-4" />
                    </div> */}
                    <button
                        className="
                            bg-[#447e9d] w-52 h-9 md:pb-1 md:mt-8 mt-5
    
                            flex justify-center items-center
                            font-headLine  md:text-lg tex-md
                            rounded-md text-white
                        "
                    >
                        Read More
                    </button>

                </motion.div>
            </div>
            {/* ---------------- ROW 3 ---------------- */}
            <div className="mx-auto grid grid-cols-1 md:grid-cols-2">

                {/* TEXT first on mobile */}
                <motion.div
                    variants={fadeupLeft}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="order-1 md:order-none flex flex-col 
                    md:items-start justify-center  items-center
                        px-8
                     md:px-20 py-12"
                >
                    <h1
                        style={{ color: fontColor.headingtxt }}
                        className="md:text-3xl text-2xl md:pb-6 pb-2  font-headLine">{heroContent[2].lable}</h1>
                    <p

                        className="font-outfit  text-center md:text-left">{heroContent[2].desc}</p>
                    <button
                        className="
                            bg-[#447e9d] w-52 h-9 md:pb-1 md:mt-8 mt-5
    
                            flex justify-center items-center
                            font-headLine  md:text-lg tex-md
                            rounded-md text-white
                        "
                    >
                        Read More
                    </button>

                </motion.div>

                {/* Video s*/}
                <motion.div

                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="order-2 md:order-none w-full h-full bg-white"
                >
                    <video
                        src="/assets/vdo/mz-teas-clip.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full  object-center"
                    ></video>
                </motion.div>
            </div>
            
            {/* ---------------- ROW 4 ---------------- */}
             <div className="mx-auto grid grid-cols-1 md:grid-cols-2">

                {/* IMAGE should be second on mobile */}
                <motion.div

                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="order-2 md:order-none w-full h-full"
                >
                    <video
                        src="/assets/vdo/mz-teas-clip.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    ></video>
                </motion.div>

                {/* TEXT should be first on mobile */}
                <motion.div
                    variants={fadeupRight}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="order-1 md:order-none flex flex-col 
                    md:items-start justify-center  items-center
                        px-8
                     md:px-20 py-12"
                >
                    <h1
                        style={{ color: fontColor.headingtxt }}
                        className="md:text-3xl text-2xl  md:pb-6 pb-2 font-headLine">{heroContent[3].lable}</h1>
                    <p

                        className="font-outfit  text-center md:text-left">{heroContent[3].desc}</p>
                    
                    <button
                        className="
                            bg-[#447e9d] w-52 h-9 md:pb-1 md:mt-8 mt-5
    
                            flex justify-center items-center
                            font-headLine  md:text-lg tex-md
                            rounded-md text-white
                        "
                    >
                        Read More
                    </button>

                </motion.div>
            </div>

            {/* ---------------- ROW 5 ---------------- */}
            <div className="mx-auto grid grid-cols-1 md:grid-cols-2">

                {/* TEXT first on mobile */}
                <motion.div
                    variants={fadeupLeft}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="order-1 md:order-none flex flex-col 
                    md:items-start justify-center  items-center
                        px-8
                     md:px-20 py-12"
                >
                    <h1
                        style={{ color: fontColor.headingtxt }}
                        className="md:text-3xl text-2xl md:pb-6 pb-2  
                        font-headLine">{heroContent[4].lable}</h1>
                    <p

                        className="font-outfit  text-center md:text-left">{heroContent[4].desc}</p>
                    <button
                        className="
                            bg-[#447e9d] w-52 h-9 md:pb-1 md:mt-8 mt-5
    
                            flex justify-center items-center
                            font-headLine  md:text-lg tex-md
                            rounded-md text-white
                        "
                    >
                        Read More
                    </button>

                </motion.div>

                {/* Video*/}
                <motion.div

                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="order-2 md:order-none w-full h-full"
                >
                    <video
                        src="/assets/vdo/Tea-vdo.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    ></video>
                </motion.div>
            </div>

            {/* ---------------- ROW 6 ---------------- */}
             <div className="mx-auto grid grid-cols-1 md:grid-cols-2">

                {/* IMAGE should be second on mobile */}
                <motion.div

                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="order-2 md:order-none w-full h-full"
                >
                    <video
                        src="/assets/vdo/mz-hardware.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    ></video>
                </motion.div>

                {/* TEXT should be first on mobile */}
                <motion.div
                    variants={fadeupRight}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="order-1 md:order-none flex flex-col 
                    md:items-start justify-center  items-center
                        px-8
                     md:px-20 py-12"
                >
                    <h1
                        style={{ color: fontColor.headingtxt }}
                        className="md:text-3xl text-2xl  md:pb-6 pb-2 font-headLine">{heroContent[5].lable}</h1>
                    <p

                        className="font-outfit  text-center md:text-left">{heroContent[5].desc}</p>
                    {/* <div className="">
                        <img src="/assets/img/logoLine.png" alt="logos" className="object-cover  md:h-32 py-4" />
                    </div> */}
                    <button
                        className="
                            bg-[#447e9d] w-52 h-9 md:pb-1 md:mt-8 mt-5
    
                            flex justify-center items-center
                            font-headLine  md:text-lg tex-md
                            rounded-md text-white
                        "
                    >
                        Read More
                    </button>

                </motion.div>
            </div>


            

        </section>
    );
};

export default Portfolio;
