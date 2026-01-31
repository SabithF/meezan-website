import React from "react";
import { motion } from "motion/react";
import { heroContent } from "../const";
import { Link } from "react-router-dom";
import LazyVideo from "./LazyVideo";



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

            <div className="mx-auto grid grid-cols-1 md:grid-cols-2 w-full min-h-[320px] md:h-[520px]">

                {/* TEXT */}
                <motion.div
                    variants={fadeupRight}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="order-2 md:order-1 flex flex-col 
    md:items-start justify-center items-center
    px-8 md:px-20 py-12"
                >
                    <h1
                        style={{ color: fontColor.headingtxt }}
                        className="md:text-3xl text-2xl md:pb-6 pb-2 font-headLine"
                    >
                        {heroContent[1].lable}
                    </h1>

                    <p className="font-outfit text-center md:text-left">
                        {heroContent[1].desc}
                    </p>

                    <Link to="/tea-factory">
                        <button
                            className="
            bg-[#447e9d] w-52 h-9 md:pb-1 md:mt-8 mt-5
            flex justify-center items-center
            font-headLine md:text-lg
            rounded-md text-white
        "
                        >
                            Explore More
                        </button>
                    </Link>
                </motion.div>

                {/* VIDEO */}
                <motion.div className="order-1 md:order-2 w-full h-full overflow-hidden">
                    <LazyVideo
                        src="/assets/vdo/new/tea-fac-vdo.mp4"
                        poster="/assets/img/Plantation.jpg"
                        className="w-full h-full object-cover scale-[1.8]"
                        rootMargin="300px"
                    />

                    {/* <video
                        src="/assets/vdo/new/tea-fac-vdo.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover scale-[1.15]"
                    /> */}
                </motion.div>

            </div>



            {/* ---------------- ROW 2 Plantation ---------------- */}
            <div className="mx-auto grid grid-cols-1 md:grid-cols-2">

                {/* VIDEO */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="order-1 md:order-1 w-full h-full bg-white"
                >
                    <LazyVideo
                        src="/assets/vdo/plantation-vdo.mp4"
                        poster="/assets/img/Plantation.jpg"
                        className="w-full h-full object-center"
                        rootMargin="300px"
                    />
                    {/* <video
                        src="/assets/vdo/plantation-vdo.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-center"
                    /> */}
                </motion.div>

                {/* TEXT */}
                <motion.div
                    variants={fadeupLeft}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="order-2 md:order-2 flex flex-col 
        md:items-start justify-center items-center
        px-8 md:px-20 py-12"
                >
                    <h1
                        style={{ color: fontColor.headingtxt }}
                        className="md:text-3xl text-2xl md:pb-6 pb-2 font-headLine"
                    >
                        {heroContent[2].lable}
                    </h1>

                    <p className="font-outfit text-center md:text-left">
                        {heroContent[2].desc}
                    </p>

                    <Link to="/plantation">
                        <button
                            className="
                bg-[#447e9d] w-52 h-9 md:pb-1 md:mt-8 mt-5
                flex justify-center items-center
                font-headLine md:text-lg tex-md
                rounded-md text-white
            "
                        >
                            Explore More
                        </button>
                    </Link>
                </motion.div>

            </div>




            {/* ---------------- ROW 3 Bunglow---------------- */}
            <div className="mx-auto grid grid-cols-1 md:grid-cols-2">


                <motion.div
                    variants={fadeupLeft}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="order-2 md:order-1 flex flex-col 
                    md:items-start justify-center  items-center
                        px-8
                     md:px-20 py-12"
                >
                    <h1
                        style={{ color: fontColor.headingtxt }}
                        className="md:text-3xl text-2xl md:pb-6 pb-2  font-headLine">{heroContent[0].lable}</h1>
                    <p

                        className="font-outfit  text-center md:text-left">{heroContent[0].desc}</p>
                    <Link to="https://www.meezanbungalows.com/">
                        <button

                            className="
                            bg-[#447e9d] w-52 h-9 md:pb-1 md:mt-8 mt-5
    
                            flex justify-center items-center
                            font-headLine  md:text-lg tex-md
                            rounded-md text-white
                        "
                        >
                            Go to Page
                        </button>
                    </Link>

                </motion.div>


                <motion.div className="order-1 md:order-2 w-full h-full overflow-hidden">
                    <LazyVideo
                        src="/assets/vdo/new/bang-vdo.mp4"
                        poster="/assets/img/bung-02.jpg"
                        className="w-full h-full object-cover scale-[1.15]"
                        rootMargin="300px"
                    />

                    {/* <video
                        src="/assets/vdo/new/bang-vdo.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover scale-[1.15]"
                    /> */}
                </motion.div>

            </div>





            {/* ---------------- ROW 4 ---------------- */}
            <div className="mx-auto grid grid-cols-1 md:grid-cols-2">


                <motion.div

                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="order-1 md:order-1 w-full h-full"
                >
                    <LazyVideo
                        src="/assets/vdo/mz-teas-clip.mp4"
                        poster="/assets/img/teaShop/4.jpg"
                        className="w-full h-full object-cover"
                        rootMargin="300px"
                    />

                    {/* <video
                        src="/assets/vdo/mz-teas-clip.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    ></video> */}
                </motion.div>

                {/* TEXT */}
                <motion.div
                    variants={fadeupRight}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="order-2 md:order-2 flex flex-col 
                    md:items-start justify-center  items-center
                        px-8
                     md:px-20 py-12"
                >
                    <h1
                        style={{ color: fontColor.headingtxt }}
                        className="md:text-3xl text-2xl  md:pb-6 pb-2 font-headLine">{heroContent[3].lable}</h1>
                    <p

                        className="font-outfit  text-center md:text-left">{heroContent[3].desc}</p>

                    <Link to="/tea">
                        <button
                            className="
                            bg-[#447e9d] w-52 h-9 md:pb-1 md:mt-8 mt-5
    
                            flex justify-center items-center
                            font-headLine  md:text-lg tex-md
                            rounded-md text-white
                        "
                        >
                            Explore More
                        </button>


                    </Link>

                </motion.div>
            </div>

            {/* ---------------- ROW 5 ---------------- */}
            <div className="mx-auto grid grid-cols-1 md:grid-cols-2">


                <motion.div
                    variants={fadeupLeft}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="order-2 md:order-1 flex flex-col 
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
                    <Link to="/teas">
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

                    </Link>

                </motion.div>


                <motion.div

                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="order-1 md:order-2 w-full h-full"
                >

                    <LazyVideo
                        src="/assets/vdo/new/Tea-vdo.mp4"
                        poster="/assets/img/teas/tea-main.jpg"
                        className="w-full h-full object-cover"
                        rootMargin="300px"
                    />
                    {/* <video
                        src="/assets/vdo/new/Tea-vdo.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    ></video> */}
                </motion.div>
            </div>

            {/* ---------------- ROW 6 Hardware---------------- */}
            <div className="mx-auto grid grid-cols-1 md:grid-cols-2">


                <motion.div

                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="order-1 md:order-1 w-full h-full"
                >
                    <LazyVideo
                        src="/assets/vdo/mz-hardware.mp4"
                        poster="/assets/img/hardware.jpg"
                        className="w-full h-full object-cover"
                        rootMargin="300px"
                    />
                    {/* <video
                        src="/assets/vdo/mz-hardware.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full  object-center"
                    ></video> */}
                </motion.div>

                {/* TEXT */}
                <motion.div
                    variants={fadeupRight}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="order-2 md:order-2 flex flex-col 
                    md:items-start justify-center  items-center
                        px-8
                     md:px-20 py-12"
                >
                    <h1
                        style={{ color: fontColor.headingtxt }}
                        className="md:text-3xl text-2xl  md:pb-6 pb-2 font-headLine">{heroContent[5].lable}</h1>
                    <p

                        className="font-outfit  text-center md:text-left">{heroContent[5].desc}</p>

                    <Link to="/hardware">
                        <button
                            className="
                            bg-[#447e9d] w-52 h-9 md:pb-1 md:mt-8 mt-5
    
                            flex justify-center items-center
                            font-headLine  md:text-lg tex-md
                            rounded-md text-white
                        "
                        >
                            Explore More
                        </button>
                    </Link>

                </motion.div>
            </div>



            {/* ---------------- ROW 9 Meezaniya inst ---------------- */}
            <div className="mx-auto grid grid-cols-1 md:grid-cols-2">


                <motion.div
                    variants={fadeupLeft}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="order-2 md:order-1 flex flex-col 
                    md:items-start justify-center  items-center
                        px-8
                     md:px-20 py-12"
                >
                    <h1
                        style={{ color: fontColor.headingtxt }}
                        className="md:text-3xl text-2xl md:pb-6 pb-2  
                        font-headLine">{heroContent[8].lable}</h1>
                    <p

                        className="font-outfit  text-center md:text-left">{heroContent[8].desc}</p>
                    <Link to="/csr">
                        <button
                            className="
                            bg-[#447e9d] w-52 h-9 md:pb-1 md:mt-8 mt-5
    
                            flex justify-center items-center
                            font-headLine  md:text-lg tex-md
                            rounded-md text-white
                        "
                        >
                            Explore More
                        </button>
                    </Link>

                </motion.div>


                <motion.div

                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="order-1 md:order-2 w-full h-full"
                >
                    <LazyVideo
                        src="/assets/vdo/mz-inst.mp4"
                        poster="/assets/img/inst.jpg"
                        className="w-full h-full object-cover"
                        rootMargin="300px"
                    />
                    
                    {/* <video
                        src="/assets/vdo/mz-inst.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    ></video> */}
                </motion.div>
            </div>

            {/* ---------------- ROW 10 MIT---------------- */}
            <div className="mx-auto grid grid-cols-1 md:grid-cols-2">


                <motion.div

                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="order-1 md:order-1 w-full h-full"
                >
                     <LazyVideo
                        src="/assets/vdo/mit.mp4"
                        poster="/assets/img/mit-1.jpg"
                        className="w-full h-full object-cover"
                        rootMargin="300px"
                    />

                    {/* <video
                        src="/assets/vdo/mit.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full  object-center"
                    ></video> */}
                </motion.div>

                {/* TEXT */}
                <motion.div
                    variants={fadeupRight}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="order-2 md:order-2 flex flex-col 
                    md:items-start justify-center  items-center
                        px-8
                     md:px-20 py-12"
                >
                    <h1
                        style={{ color: fontColor.headingtxt }}
                        className="md:text-3xl text-2xl  md:pb-6 pb-2 font-headLine">{heroContent[10].lable}</h1>
                    <p

                        className="font-outfit  text-center md:text-left">{heroContent[10].desc}</p>
                    
                    <Link to="/csr">
                        <button
                            className="
                            bg-[#447e9d] w-52 h-9 md:pb-1 md:mt-8 mt-5
    
                            flex justify-center items-center
                            font-headLine  md:text-lg tex-md
                            rounded-md text-white
                        "
                        >
                            Explore More
                        </button>

                    </Link>

                </motion.div>
            </div>

            {/* ---------------- ROW 7 The team---------------- */}
            <div className="mx-auto grid grid-cols-1 md:grid-cols-2">


                <motion.div
                    variants={fadeupRight}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="order-2 md:order-1 flex flex-col 
      md:items-start justify-center items-center
      px-8 md:px-20 py-12"
                >
                    <h1
                        style={{ color: fontColor.headingtxt }}
                        className="md:text-3xl text-2xl md:pb-6 pb-2 font-headLine"
                    >
                        {heroContent[6].lable}
                    </h1>

                    <p className="font-outfit text-center md:text-left">
                        {heroContent[6].desc}
                    </p>

                    <Link to="/chairman-message">
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

                    </Link>
                </motion.div>


                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="order-1 md:order-2 w-full h-full"
                >
                    <img
                        src="/assets/img/team.jpg"
                        alt="Your section image"
                        className="w-full h-full object-cover"
                    />
                </motion.div>
            </div>

            {/* ---------------- ROW 8 Since 1925 ---------------- */}
            <div className="mx-auto grid grid-cols-1 md:grid-cols-2">


                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="order-1 md:order-1 w-full h-full "
                >
                    <img
                        src="/assets/img/haji-2.jpeg"
                        alt="Meezan founder 1925"
                        className="w-full h-full object-cover"
                    />
                </motion.div>


                {/* TEXT */}
                <motion.div
                    variants={fadeupRight}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="order-2 md:order-2 flex flex-col 
                    md:items-start justify-center  items-center
                        px-8
                     md:px-20 py-12"
                >
                    <h1
                        style={{ color: fontColor.headingtxt }}
                        className="md:text-3xl text-2xl  md:pb-6 pb-2 font-headLine">{heroContent[7].lable}</h1>
                    <p

                        className="font-outfit  text-center md:text-left">{heroContent[7].desc}</p>

                    <Link to="/about">
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

                    </Link>

                </motion.div>
            </div>

        </section>
    );
};

export default Portfolio;
