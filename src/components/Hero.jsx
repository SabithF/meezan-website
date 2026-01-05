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

  const changeTo = useCallback(
    (nextIndex) => {
      if (nextIndex === current) return;

      const img = new Image();
      img.src = images[nextIndex];

      const done = () => setCurrent(nextIndex);

      if (img.decode) {
        img.decode().then(done).catch(done);
      } else {
        img.onload = done;
        img.onerror = done;
      }
    },
    [current]
  );

  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      const next = (current + 1) % images.length;
      changeTo(next);
    }, 5000);

    return () => clearInterval(timerRef.current);
  }, [current, changeTo]);

  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative w-full aspect-[16/9] md:aspect-[21/9]">
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
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => changeTo(index)}
            className={`h-3 w-3 rounded-full transition-all 
              ${current === index ? "bg-white w-6" : "bg-white/60"}
            `}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;