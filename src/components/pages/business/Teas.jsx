import React, {
    useState,
    useRef,
    useLayoutEffect,
} from "react";
import {
    motion,
    useMotionValue,
    useAnimationFrame,
} from "motion/react";

// ===== Motion Variants =====
const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
    },
};

const fadeUpStagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.25 } },
};

const fadeChild = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: "easeOut" },
    },
};

const MeezanTeasPage = () => {
    const [isPaused, setIsPaused] = useState(false);

    // ===== Slider motion logic =====
    const trackRef = useRef(null);
    const x = useMotionValue(0);
    const [halfWidth, setHalfWidth] = useState(0);

    const SPEED = 90;
    useLayoutEffect(() => {
        const measure = () => {
            if (!trackRef.current) return;
            const w = trackRef.current.scrollWidth / 2;
            setHalfWidth(w);
        };

        measure();
        window.addEventListener("resize", measure);
        return () => window.removeEventListener("resize", measure);
    }, []);

    useAnimationFrame((_, delta) => {
        if (isPaused || !halfWidth) return;

        const moveBy = (delta / 1000) * SPEED;
        let next = x.get() - moveBy;

        // seamless loop
        if (next <= -halfWidth) next += halfWidth;

        x.set(next);
    });

    // ===== Tea Data =====
    const teaItems = [
        {
            title: "Meezan Black Tea",
            desc: "A bold, aromatic blend with deep color and a strong finish.",
            img: "/assets/img/teas/2.png",
        },
        {
            title: "Meezan Premium Blend",
            desc: "Smooth taste crafted for everyday comfort and consistency.",
            img: "/assets/img/teas/3.png",
        },
        {
            title: "Meezan Gold",
            desc: "Refined flavor profile with a premium aroma and rich brew.",
            img: "/assets/img/teas/4.png",
        },
        {
            title: "Meezan Special",
            desc: "Strong and satisfying — ideal for classic milk tea.",
            img: "/assets/img/teas/5.png",
        },
        {
            title: "Meezan Classic",
            desc: "A timeless blend with balanced notes and a smooth finish.",
            img: "/assets/img/teas/6.png",
        },
        {
            title: "Meezan Supreme",
            desc: "An elevated blend for refined tea moments.",
            img: "/assets/img/teas/7.png",
        },
        {
            title: "Meezan Heritage",
            desc: "Celebrating generations of tea craftsmanship.",
            img: "/assets/img/teas/8.png",
        },
    ];

    return (
        <main className="w-full font-outfit">
            {/* ===================== HERO ===================== */}
            <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
                <img
                    src="/assets/img/banner/teas-banner.jpg"
                    alt="Meezan Teas"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/35" />
            </section>

            {/* ===================== INTRO ===================== */}
            <section className="max-w-6xl mx-auto py-16 px-4 md:px-6 lg:px-10 space-y-16">
                <section className="max-w-5xl mx-auto">
                    <motion.div
                        variants={fadeUpStagger}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.4 }}
                        className="space-y-5"
                    >
                        

                        <section className="max-w-5xl mx-auto">
                            <motion.div
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.4 }}
                                className="overflow-hidden rounded-3xl shadow-lg"
                            >
                                <img
                                    src="/assets/img/teas/1.jpg"
                                    alt="Meezan Tea"
                                    className="w-full h-[260px] md:h-[700px] object-cover"
                                />
                            </motion.div>
                        </section>
                        <motion.h2
                            variants={fadeChild}
                            className="text-3xl md:text-4xl font-messiri text-slate-900"
                        >
                            A Legacy in Every Cup
                        </motion.h2>

                        <motion.p
                            variants={fadeChild}
                            className="text-slate-600 leading-relaxed"
                        >
                            For nearly a century, Meezan Ceylon Tea has been closely connected to the heritage, craftsmanship, and purity of Sri Lankan tea. From the mist-covered hills of Kandy to the lush estates nurtured by generations, Meezan Ceylon Tea reflects a tradition built on integrity, expertise, and an unwavering commitment to quality.
                            Our teas are carefully handpicked, expertly processed, and graded to preserve the natural character of Ceylon tea its bright color, rich aroma, and distinctive flavor. Whether it is the refined depth of our Orthodox teas, the strength of our CTC blends, or the delicate notes of our premium specialty teas, each cup represents the essence of Sri Lanka’s finest produce.
                            Meezan Ceylon Tea is more than a beverage; it is a legacy of excellence shared from our family to yours.

                        </motion.p>
                    </motion.div>
                </section>

                <section className="max-w-5xl mx-auto">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.4 }}
                        className="overflow-hidden rounded-3xl shadow-lg"
                    >
                        <img
                            src="/assets/img/teas/tea-main.jpg"
                            alt="Meezan Tea"
                            className="w-full h-[260px] md:h-[700px] object-cover"
                        />
                    </motion.div>
                </section>
            </section>

            {/* ===================== AUTO SLIDER ===================== */}
            <section className="w-full py-20">
                <h2 className="text-3xl md:text-4xl text-center font-messiri text-slate-900 mb-14">
                    Our Tea Collection
                </h2>

                <div className="relative overflow-hidden w-full">
                    <motion.div
                        ref={trackRef}
                        className="flex gap-10 px-6 md:px-12 lg:px-20"
                        style={{ x }}
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                        onTouchStart={() => setIsPaused(true)}
                        onTouchEnd={() => setIsPaused(false)}
                    >
                        {[...teaItems, ...teaItems].map((tea, idx) => (
                            <motion.div
                                key={`${tea.title}-${idx}`}
                                whileHover="hover"
                                className="
            relative
            min-w-[240px]
            md:min-w-[280px]
            lg:min-w-[320px]
            xl:min-w-[340px]
            2xl:min-w-[360px]
            flex flex-col items-center
            group
          "
                            >
                                <motion.img
                                    src={tea.img}
                                    alt={tea.title}
                                    draggable="false"
                                    variants={{ hover: { scale: 0.97 } }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                    className="
              max-h-[260px]
              md:max-h-[300px]
              lg:max-h-[340px]
              xl:max-h-[360px]
              object-contain
            "
                                />

                                <h3 className="mt-5 text-center text-lg font-semibold text-slate-900">
                                    {tea.title}
                                </h3>

                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    variants={{ hover: { opacity: 1, y: 0 } }}
                                    transition={{ duration: 0.25 }}
                                    className="
              mt-2
              max-w-[300px]
              text-center
              text-sm
              text-slate-600
              md:opacity-0 md:group-hover:opacity-100
            "
                                >
                                    {tea.desc}
                                </motion.p>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* EDGE FADES */}
                    <div className="pointer-events-none absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-white to-transparent" />
                    <div className="pointer-events-none absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-white to-transparent" />
                </div>
            </section>

        </main>
    );
};

export default MeezanTeasPage;
