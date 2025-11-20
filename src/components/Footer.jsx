import { section } from "motion/react-client";
import React from "react";


const Footer = () => {

    return (

        <section className="relative bg-[#101824] h-auto font-outfit  mt-3  py-16 md:px-28 px-10 text-white overflow-hidden ">

            <div className="flex flex-col ">

                <div className="flex md:flex-row flex-col justify-between ">

                    <div className="flex flex-col">
                        <div className="w-52 pb-8">
                            <img src="/assets/logo/meez-logo.png" alt="" />
                        </div>
                        
                        <div className="flex   flex-row md:gap-64 gap-12">
                            <div className="">
                                <h2 className="pb-5 font-bold">Company</h2>
                                <ol className="space-y-1 text-gray-600">
                                    <li className="hover:text-white cursor-pointer ">History</li>
                                    <li className="hover:text-white cursor-pointer ">Our presense</li>
                                    <li className="hover:text-white cursor-pointer ">About us</li>
                                </ol>
                            </div>
                            <div className="">
                                <h2 className="pb-5 font-bold">Services</h2>
                                <ol className="space-y-1 text-gray-600">
                                    <li className="hover:text-white cursor-pointer ">History</li>
                                    <li className="hover:text-white cursor-pointer ">Our presense</li>
                                    <li className="hover:text-white cursor-pointer ">About us</li>
                                </ol>
                            </div>
                        </div>

                    </div>
                    <div className="tracking-widest mt-5 md:mt-0 text-sm font-montserrat text-[#67645E] md:mr-10">
                        <div className="bg-[#373225] rounded-lg px-9 py-9">
                            <h2>0775555555</h2>
                            <p className="font-bold">Address</p>
                            <p>Address</p>
                        </div>
                        <div className="flex flex-row">
                            <ol className="flex flex-row pt-5 space-x-2">

                                <li className="bg-[#373225] hover:bg-white  p-1 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" 
                                x="0px" y="0px" 
                                width="25" height="25" viewBox="0 0 24 24">
    <path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"></path>
</svg></li>
                                <li className="p-1 bg-[#373225] hover:bg-white rounded-full h-[2rem] w-[2rem]"><img src="/assets/logo/fb.svg" alt=""  className="p-1" /></li>
                                <li className="p-1 bg-[#373225] hover:bg-white rounded-full h-[2rem] w-[2rem]"><img src="/assets/logo/linkedin.svg" alt=""  className=" p-1" /></li>
                                <li className="p-1 bg-[#373225] font hover:bg-white rounded-full h-[2rem] w-[2rem]"><img src="/assets/logo/twitter.svg" alt=""  className=" p-1" /></li>
                            
                            </ol>
                        </div>
                        
                    </div>
                </div>

                <div className="pt-24 tracking-wider text-gray-600">
                    <h2>Meezan Group LTD </h2>
                   
                    
                    
                </div>
            </div>

        </section>

    )
}

export default Footer;
