import React from "react";
import { motion, AnimatePresence } from "motion/react";

const Hero =() =>{
    return(
        <>
            {/* Hero banner */}
            <section className="relative z-10  w-full h-[40rem] md:h-[43rem] overflow-hidden ">
                <div className="text-white text-4xl mt-20   w-full flex  "> 
                    
                    
                    <div className="flex flex-row justify-start items-start w-full h-[35rem] md:h-[43rem]">

                        <div className="bg-[#828D62] w-[25rem] h-[35rem] md:h-[43rem] flex justiify-between">
                            <motion.h1
                            initial={{opacity:0, y:40}}
                            animate={{opacity:1, y:0}}
                            transition={{duration:1.2, ease:"easeOut"}}
                            className="absolute md:text-[10rem] text-8xl flex items-center 
                            justify-start md:left-24 left-4  w-full 
                            h-full font-cursiveFont -bottom-44 md:top-5">Leisure</motion.h1>
                            
                        </div>
                        
                        <div className="">
                        <img src="/assets/logo/group-icon.png" alt="hero-logo" className="
                            absolute md:h-[51rem] flex items-start md:left-[21.8rem]
                            -left-3 justify-start invert brightness-0 opacity-50" />

                            <img src="/assets/img/bung-02.jpg" alt="hero-img" className="object-cover h-[35rem] md:h-[43rem] overflow-hidden"/>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Hero;