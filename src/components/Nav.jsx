import React, { useEffect, useState, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";

const NavBar = () => {
  const navRef = useRef(null);
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Detect scroll for floating navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsNavOpen(false);
  }, [location.pathname]);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setIsNavOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const NavItems = [
    { lable: "About us", to: "/about" },
    { lable: "Investors", to: "/investors" },
    { lable: "News", to: "/news" },
    { lable: "FAQs", to: "/faqs" },
    { lable: "Contact", to: "/contact" },
  ];

  // Mobile Slide Menu Animation
  const menuVariants = {
    hidden: { x: "100%" },
    visible: {
      x: 0,
      transition: { type: "spring", stiffness: 120, damping: 15 },
    },
    exit: { x: "100%", transition: { type: "spring" } },
  };

  const itemVarians = {
    hidden: { opacity: 0, x: 30 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1 },
    }),
  };

  return (
    <nav
      ref={navRef}
      className={`
        fixed top-0 left-0 w-full z-[9999] 
        transition-all duration-300 
        ${isScrolled
          ? "bg-[#192638]/70 backdrop-blur-xl shadow-lg border-b transition-all duration-300 border-white/10"
          : "bg-[#192638] backdrop-blur-0 shadow-none"
        }
      `}
    >
      <div
        className={`
          flex items-center justify-between
          px-3 md:px-6 
          py-3 md:py-5 
          transition-all duration-500 ease-[cubic-bezier(.4,0,.2,1)]
          ${isScrolled ? "md:mx-auto md:max-w-6xl md:rounded-2xl transition-all duration-300" : ""}
        `}
      >
        {/* LOGO */}
        <Link to="/">
          <div className="flex flex-row items-center transition-all duration-300">
            {/* LEFT ICON */}
            <img
              src="/assets/logo/group-icon.png"
              alt="meezan-logo"
              className="invert brightness-0 h-14 hidden md:block pr-5"
            />

            {/* MAIN LOGO */}
            <img
              src="/assets/logo/Meezanlogo.png"
              alt="meezan-logo"
              className="h-12 opacity-70 hidden md:block"
            />

            {/* MOBILE ICON */}
            <img
              src="/assets/logo/group-icon.png"
              alt="meezan-logo"
              className="invert brightness-0 h-12 md:hidden"
            />
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <div className="gap-10 pr-4 text-md hidden md:flex font-outfit">
          {NavItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.to}
              className={({ isActive }) =>
                `text-white hover:text-gray-300 transition 
                ${isActive ? "font-bold underline underline-offset-8" : ""}`
              }
            >
              {item.lable}
            </NavLink>
          ))}
        </div>

        {/* HAMBURGER BUTTON */}
        <button
          className="p-2 rounded md:hidden z-20"
          onClick={() => setIsNavOpen((v) => !v)}
          aria-expanded={isNavOpen}
          aria-controls="mobile-menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="white" strokeWidth="3">
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

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isNavOpen && (
          <motion.div
            className="fixed rounded-xl top-5 z-10 right-3 shadow-lg w-48 bg-[#192638] p-6"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {NavItems.map((item, i) => (
              <motion.div
                key={i}
                variants={itemVarians}
                custom={i}
                className="text-white text-lg mb-4"
              >
                <Link to={item.to}>{item.lable}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;
