import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const Hero = () => {
  const images = [
    "/assets/img/banner/main-banner.jpg",
    "/assets/img/banner/hero-banner.jpg",
    "/assets/img/banner/tea-factory-banner.jpg",
    "/assets/img/banner/hardware-banner.jpg",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full overflow-hidden">

      {/* Crossfade wrapper */}
      <div className="relative w-full">
        <AnimatePresence mode="sync">
          <motion.img
            key={current}
            src={images[current]}
            alt="Meezan hero banner"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
            }}
            className="absolute top-0 left-0 w-full h-auto object-contain mx-auto"
          />
        </AnimatePresence>
      </div>

      {/* Make sure container height matches image */}
      <img
        src={images[current]}
        className="w-full h-auto object-contain opacity-0 pointer-events-none"
        alt=""
      />

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full transition-all 
              ${current === index ? "bg-white w-6" : "bg-white/60"}
            `}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Hero;
