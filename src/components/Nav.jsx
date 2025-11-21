import React, { useEffect, useState, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";


const NavBar = () =>{

     const navRef = useRef(null);
     const location = useLocation();
     const [isScrolled, setIsScrolled] = useState(false);
     const [isNavOpen, setIsNavOpen] = useState(false);
     const MotionLink = motion(Link);


     // Menu on route change 
     useEffect(()=>{
        setIsScrolled(false);
     },[location.pathname]);

     useEffect(()=>{
        const handleScroll = ()=> {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
     }, []);

      // Close when clicking outside
    useEffect(() => {
        function handleClickOutside(e) {
        if (navRef.current && !navRef.current.contains(e.target)) {
            setIsNavOpen(false);
            setIsPresenceOpen(false);
            setIsPresenceHoverOpen(false);
        }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    //Animation
    const menuVariants = {
        hidden: {x: "100%"},
        visible: { 
            x: 0,
            transition: {type: "sprint", stiffness:120, damping:15}
        },
        exit: {x: "100%", transition:{type: "sprint"}}
    };

    const itemVarians = {
        hidden: {opacity: 0, x:30},
        visible: (i)=> ({
            opacity: 1,
            x:0,
            transition: {delay: i * 0.1}

        })
    }

     const NavItems = [
        {lable:"About us" , to:"/about"},
        {lable:"Investors" , to:"/inverstors"},
        {lable:"News" , to:"/news"},
        {lable:"FAQs" , to:"/faqs"},
        {lable:"Contact" , to:"/contact"}]

        return(
            <nav
            ref={navRef}
            className={`w-full fixed top-0 z-[9999] transition-colors duration-300 bg-[#192638]
            ${isScrolled ? "":""}`}>

                <div className="w-full flex items-center justify-between px-3 md:px-4 py-2 md:py-3">
                
                 {/*Main logo  */} 
                 <Link to="/">
                    <div className=" flex flex-row">
                    <img to="/" src="/assets/logo/meez-logo.png" alt="meezan-logo" className="invert brightness-0 h-14 hidden md:block" />
                    <img src="/assets/logo/group-icon.png" alt="meezan-logo" className="invert brightness-0 h-16 block md:hidden" />
                    
                 </div>
                 
                 </Link>
                 <div className=" gap-10 pr-14 text-md hidden md:flex  font-outfit">
                    {NavItems.map((item, index)=> (
                        <NavLink
                        key={index}
                        to={item.to}
                        className={({isActive})=>`text-white hover:text-gray-400
                        transition ${isActive ? "font-bold underline": ""}`}>
                            {item.lable}

                        </NavLink>
                    ))}
                    
                    

                 </div>

                 {/* Hamburger menu */}
                 <button
                 className={`p-2 rounded md:hidden z-20 `}
                 onClick={() => setIsNavOpen((v) => !v)}
                 aria-expanded={isNavOpen}
                 aria-controls="mobile-menu">
                    <svg
                className="w-8 h-8"
                fill="none"
                stroke="white"
                strokeWidth="3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={
                    isNavOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>

                 </button>
                   
                </div>

                {/* mobile menu */}
                <AnimatePresence>
                    {isNavOpen && (
                        <motion.div
                            className="fixed rounded-xl top-5 z-10 -right-1 
                            shadow-lg w-48 bg-[#192638] p-6"
                            variants={menuVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit">
                                {NavItems.map((item, i)=> (
                                    <motion.div
                                    key={i}
                                    to={item.to} variants={itemVarians} custom={i}
                                    className="text-white text-lg mb-4">
                                        {item.lable}
                                    </motion.div>
                                ))}

                        </motion.div>
                    )}
                </AnimatePresence>

                

            </nav>
        )
}

export default NavBar;