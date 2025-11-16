import React from "react";
import { motion, AnimatePresence } from "motion/react";


const Portfolio = () => {

    const fadeupLeft ={
        hidden: {opacity: 0, x:-50},
        show: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8, ease: "easeOut"
            }
        }
    }
    const fadeupRight ={
        hidden: {opacity: 0, x:50},
        show: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8, ease: "easeOut"
            }
        }
    }

    return (
        <section className=" relative w-full h-full z-0  mt-6  flex flex-col">

            {/* Row 1 */}
            <div className="flex flex-col  md:flex-row justify-between">
                <motion.div
                variants={fadeupLeft}
                initial="hidden"
                whileInView="show"
                viewport={{once: true, amount:0.2}} 
                className="w-full flex-col flex justify-center items-center h-[30rem]">
                    <div className="px-12 ">
                    <h1 className="text-3xl pt-3 pb-6 font-black font-outfit text-[#26759D]
                      ">Meezan Factory</h1>
                    <p className="font-outfit">The Ancoombra Tea Factory is strategically situated in the township of Ankumbura, nestled within the heart of the Central Province. Acquired in 1946 by the late Meezan Hadjiyar, the factory stands at an elevation of 2,600 feet above sea level and has cultivated a distinguished reputation as one of the premier and largest mid-grown tea processing facilities in the Central region</p>
                    <button className="bg-[#26759D]  font-outfit mt-8 py-2 px-12 rounded-md text-white"> Read More</button>
                    </div>
                    </motion.div>
                <div className="w-full flex justify-center items-center 
                 md:h-[30rem] bg-blue-900">
                    <img src="/assets/img/img-4.jpg" alt="Factory" className="object-contain" /></div>
            </div>

            {/* Row 2 */}
            <div className="flex   md:flex-row flex-col-reverse md:mt-14 mt-0 justify-between">
                <div className="w-full flex justify-center items-center 
                md:h-[30rem] bg-blue-900">
                    <img src="/assets/img/img-4.jpg" alt="Factory" className="object-contain" />
                    </div>
                <motion.div
                variants={fadeupRight}
                initial="hidden"
                whileInView="show"
                viewport={{once: true, amount:0.2}} 
                className="w-full flex-col flex justify-center items-center h-[30rem]">
                    <div className="px-12 ">
                    <h1 className="text-3xl pt-3 pb-6 font-black font-outfit text-[#26759D]
                      ">Meezan Bunglow</h1>
                    <p className="font-outfit">
                        Four luxury estate bungalows in four exotic locations for you to choose from. Nestled in scenic tea estates and lush forests, each retreat offers spacious rooms, modern comforts, and breathtaking views.</p>
                    <button className="bg-[#26759D]  font-outfit mt-8 py-2 px-12 rounded-md
                     text-white"> Read More</button>
                    </div>
                    </motion.div>
                
            </div>

            {/* Row 3 */}
            <div className="flex flex-col md:mt-14 mt-0  md:flex-row justify-between">
                <motion.div
                variants={fadeupLeft}
                initial="hidden"
                whileInView="show"
                viewport={{once: true, amount:0.2}} 
                className="w-full flex-col flex justify-center items-center h-[30rem]">
                    <div className="px-12 ">
                    <h1 className="text-3xl pt-3 pb-6 font-black font-outfit
                     text-[#26759D]  ">Meezan Plantation</h1>
                    <p className="font-outfit">Meezan Group proudly cultivates its own tea plantations in the heart of Sri Lanka, the birthplace of Ceylon tea. This direct involvement ensures the exceptional quality and distinctive character that define our premium tea offerings.</p>
                    <button className="bg-[#26759D]  font-outfit mt-8 py-2 px-12 rounded-md text-white"> Read More</button>
                    </div>
                    </motion.div>
                <div className="w-full flex justify-center items-center 
                md:h-[30rem] bg-blue-900">
                    <img src="/assets/img/img-4.jpg" alt="Factory" className="object-contain" /></div>
            </div>

            
            {/* Row 4 */}
            <div className="flex flex-col-reverse  md:flex-row md:mt-14 mt-0 justify-between">
                <div className="w-full flex justify-center items-center 
                md:h-[30rem] bg-blue-900">
                    <img src="/assets/img/img-4.jpg" alt="Factory" className="object-contain" />
                    </div>
                <motion.div
                variants={fadeupRight}
                initial="hidden"
                whileInView="show"
                viewport={{once: true, amount:0.2}} 
                className="w-full flex-col flex justify-center items-center h-[30rem]">
                    <div className="px-12 ">
                    <h1 className="text-3xl pt-3 pb-6 font-black font-outfit text-[#26759D]
                      ">Meezan Hospitality</h1>
                    <p className="font-outfit">
                        Four luxury estate bungalows in four exotic locations for you to choose from. Nestled in scenic tea estates and lush forests, each retreat offers spacious rooms, modern comforts, and breathtaking views.</p>
                    <button className="bg-[#26759D]  font-outfit mt-8 py-2 px-12 rounded-md text-white"> Read More</button>
                    </div>
                    </motion.div>
                
            </div>

            {/* Row 5 */}
            <div className="flex flex-col md:mt-14 mt-0  md:flex-row justify-between">
                <motion.div
                variants={fadeupLeft}
                initial="hidden"
                whileInView="show"
                viewport={{once: true, amount:0.2}} 
                className="w-full flex-col flex justify-center items-center h-[30rem]">
                    <div className="px-12 ">
                    <h1 className="text-3xl pt-3 pb-6 font-black font-outfit
                     text-[#26759D]  ">Meezan Education</h1>
                    <p className="font-outfit">Meezan Group proudly cultivates its own tea plantations in the heart of Sri Lanka, the birthplace of Ceylon tea. This direct involvement ensures the exceptional quality and distinctive character that define our premium tea offerings.</p>
                    <button className="bg-[#26759D]  font-outfit mt-8 py-2 px-12 rounded-md text-white"> Read More</button>
                    </div>
                    </motion.div>
                <div className="w-full flex justify-center items-center 
                md:h-[30rem] bg-blue-900">
                    <img src="/assets/img/img-4.jpg" alt="Factory" className="object-contain" /></div>
            </div>

        </section>

    )
}

export default Portfolio;