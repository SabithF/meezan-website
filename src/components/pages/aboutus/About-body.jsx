import React from "react";


const AboutBody = () => {
    return (
        <section className="h-full w-full overflow-hidden">
            {/* About us box */}
            <div className="relative bg-[#BFA60E] bg-opacity-20 
            md:w-[75%] py-12 rounded-r-[60px] my-12">
                <p className="md:w-[70%] px-4 md:ml-auto font-messiri text-center 
                 text-lg md:text-2xl pr-10  ">Our core values shape our approach to tea production,
                    hardware supply, export activities, and our hospitality offerings.
                    Our dedicated leadership team fosters sustainable growth and ensures superior quality and enduring value in all our endeavors by committing to these values.</p>
            </div>

            <div className=" flex flex-row justify-center">

                {/* Image grid */}
                <div className=" flex flex-col md:flex-row justify-center items-center md:mt-10 mx-3 md:mx-0 gap-3 xl:gap-20 2xl:gap-48 absolute z-20">
                    <img src="/assets/img/bung-02.jpg" className="w-86  md:w-[20rem] md:h-[30rem] rounded-3xl shadow-lg object-cover" />
                    <img src="/assets/img/bung-02.jpg" className="w-86  md:w-[20rem] md:h-[30rem] md:translate-y-40 rounded-3xl shadow-lg object-cover" />
                    <img src="/assets/img/bung-02.jpg" className="w-86  md:w-[20rem] md:h-[30rem] rounded-3xl shadow-lg object-cover" />
    
                
                </div>

                
                {/* bg */}
                <div className=" w-[70%] h-[50rem] 
                ml-auto bg-[#E8E7DC] rounded-l-[150px] mt-[7rem] relative mb-[4rem] z-0">
                

                </div>




            </div>

               <div className=""></div>








        </section>
    )
}

export default AboutBody