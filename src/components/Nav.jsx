import React, { useEffect, useState, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";

const NavBar = () => {
  const navRef = useRef(null);
  const location = useLocation();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Mobile dropdown state (only one open at a time)
  const [openDropdown, setOpenDropdown] = useState(null);

  // Detect scroll for floating navbar
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
}, [location.pathname]);


  // Close mobile menu on route change
  useEffect(() => {
    setIsNavOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setIsNavOpen(false);
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ✅ Nested structure for dropdowns
  const NavItems = [
    {
      lable: "About us",
      to: "/about",
      children: [
        { lable: "1925", to: "/about" },
        { lable: "Chairman", to: "/chairman-message" },
      ],
    },
    {
      lable: "Business",
      to: "/tea",
      children: [
        { lable: "Bangalows", to: "/tea" },
        { lable: "Tea Factories", to: "/tea-factory" },
        { lable: "Plantation", to: "/hardware" },
        { lable: "Hatale Classic Tea Shop", to: "/tea" },
        { lable: "Hardware", to: "/education" },
      ],
    },
    { lable: "CSR", to: "/news" },
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
      transition: { delay: i * 0.08 },
    }),
  };

  const toggleDropdown = (key) => {
    setOpenDropdown((prev) => (prev === key ? null : key));
  };

  return (
    <nav
      ref={navRef}
      className={`
        fixed top-0 left-0 w-full z-[9999]
        transition-all duration-300
        ${
          isScrolled
            ? "bg-[#192638]/70 backdrop-blur-xl shadow-lg border-b border-white/10"
            : "bg-[#192638] backdrop-blur-0 shadow-none"
        }
      `}
    >
      <div
        className={`
          flex items-center justify-between
          px-3 md:px-6
          py-3 md:py-5
          transition-all md:mx-auto duration-500 ease-[cubic-bezier(.4,0,.2,1)]
          ${isScrolled ? "md:max-w-6xl" : "md:max-w-full"}
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

        {/* ✅ DESKTOP NAV (HOVER DROPDOWNS) */}
        <div className="gap-10 pr-4 text-md hidden md:flex font-outfit items-center">
          {NavItems.map((item, index) => {
            const hasChildren = Array.isArray(item.children);

            if (!hasChildren) {
              return (
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
              );
            }

            return (
              <div key={index} className="relative group">
                {/* Parent */}
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `text-white hover:text-gray-300 transition inline-flex items-center gap-2
                    ${isActive ? "font-bold underline underline-offset-8" : ""}`
                  }
                >
                  {item.lable}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2.5"
                    className="opacity-70"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 9l6 6 6-6"
                    />
                  </svg>
                </NavLink>

                {/* Dropdown */}
                <div
                  className="
                    absolute left-0 top-full mt-3 w-56
                    rounded-2xl bg-[#192638]/95 backdrop-blur-xl
                    border border-white/10 shadow-xl
                    opacity-0 invisible translate-y-2
                    group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                    transition-all duration-200
                  "
                >
                  <div className="p-2">
                    {item.children.map((child) => (
                      <NavLink
                        key={child.to}
                        to={child.to}
                        className={({ isActive }) =>
                          `block rounded-xl px-3 py-2 text-[14px] text-white/90 hover:bg-white/10 transition
                          ${isActive ? "bg-white/10" : ""}`
                        }
                      >
                        {child.lable}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
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

      {/* ✅ MOBILE MENU (CLICK DROPDOWNS) */}
      <AnimatePresence>
        {isNavOpen && (
          <motion.div
            id="mobile-menu"
            className="fixed rounded-2xl top-16 z-10 right-3 shadow-xl w-60 bg-[#192638] p-4 border border-white/10"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="space-y-2">
              {NavItems.map((item, i) => {
                const hasChildren = Array.isArray(item.children);
                const isOpen = openDropdown === item.lable;

                // Normal link (no children)
                if (!hasChildren) {
                  return (
                    <motion.div
                      key={item.lable}
                      variants={itemVarians}
                      custom={i}
                      className="text-white"
                    >
                      <Link
                        to={item.to}
                        className="block rounded-xl px-3 py-2.5 text-[15px] hover:bg-white/10 transition"
                      >
                        {item.lable}
                      </Link>
                    </motion.div>
                  );
                }

                // Dropdown item (with children)
                return (
                  <motion.div
                    key={item.lable}
                    variants={itemVarians}
                    custom={i}
                    className="text-white"
                  >
                    <button
                      type="button"
                      onClick={() => toggleDropdown(item.lable)}
                      className="w-full flex items-center justify-between rounded-xl px-3 py-2.5 text-[15px] hover:bg-white/10 transition"
                      aria-expanded={isOpen}
                    >
                      <span>{item.lable}</span>

                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="opacity-80"
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="white"
                          strokeWidth="2.5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 9l6 6 6-6"
                          />
                        </svg>
                      </motion.span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="dropdown"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="mt-2 rounded-xl bg-white/5 p-2 border border-white/10">
                            {item.children.map((child) => (
                              <Link
                                key={child.to}
                                to={child.to}
                                className="block rounded-lg px-3 py-2 text-[14px] text-white/90 hover:bg-white/10 transition"
                              >
                                {child.lable}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;
