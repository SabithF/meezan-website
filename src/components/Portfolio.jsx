import React from "react";
import { motion, AnimatePresence } from "motion/react";


const Portfolio = () => {
    return (
        <section className=" relative w-full h-full  flex flex-col">

            {/* Row 1 */}
            <div className="flex flex-col  md:flex-row justify-between">
                <div className="w-full flex justify-center items-center h-[25rem]">
                    Text</div>
                <div className="w-full flex justify-center items-center h-[25rem] bg-blue-900">
                    img</div>
            </div>

        </section>

    )
}

export default Portfolio;