import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";

const images = [
  "/assets/img/banner/main-banner.jpg",
  "/assets/img/banner/leisure-banner.jpg",
  "/assets/img/banner/plantation-banner.jpg",
  "/assets/img/banner/hardware-banner.jpg",
  "/assets/img/banner/teas-banner.jpg",
  "/assets/img/banner/teaShop-banner.jpg",
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  const changeTo = useCallback((nextIndex) => {
    setCurrent((prev) => (nextIndex === prev ? prev : nextIndex));
  }, []);

  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Auto-rotate (stable interval)
  useEffect(() => {
    // clear any existing interval
    if (timerRef.current) clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  return (
    <section className="relative w-full overflow-hidden">
      
      <div className="relative w-full h-[240px] sm:h-[320px] md:h-[520px]">
        <AnimatePresence mode="sync">
          <motion.img
            key={current}
            src={images[current]}
            alt="Meezan hero banner"
            loading="eager"
            fetchpriority="high"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
          />
        </AnimatePresence>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => changeTo(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-3 w-3 rounded-full transition-all 
                ${current === index ? "bg-white w-6" : "bg-white/60"}
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
