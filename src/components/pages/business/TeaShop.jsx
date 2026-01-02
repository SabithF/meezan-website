import React from "react";
import { motion } from "motion/react";

// ===== Motion Variants =====
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeUpStagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const fadeChild = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const TeaShopsPage = () => {
  return (
    <main className="w-full font-outfit">

      {/* ===================== HERO SECTION ===================== */}
      <section className="relative w-full overflow-hidden md:mt-0 mt-[72px]">
                {/* Image container */}
                <div className="relative w-full">
                    <img
                        src="/assets/img/banner/teaShop-banner.jpg"
                        alt="Meezan Hardware"
                        className="absolute top-0 left-0 w-full h-auto object-contain"
                    />

                </div>

                <img
                    src="/assets/img/banner/teaShop-banner.jpg"
                    alt=""
                    className="w-full h-auto object-contain opacity-0 pointer-events-none"
                />

            </section>

      {/* ===================== INTRO SECTION ===================== */}
      <section className="max-w-6xl mx-auto py-20 px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Text */}
          <motion.div
            variants={fadeUpStagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="space-y-5"
          >
            <motion.h2 variants={fadeChild} className="text-3xl md:text-4xl font-messiri text-slate-900">
              Meezan Hatale Classic Tea Shop
            </motion.h2>

            <motion.p variants={fadeChild} className="text-slate-600 leading-relaxed">
              The Meezan Hatale Classic Tea Shop, perched in the serene environs of the
              Hatale Tea Garden, was established on 6th April 2008 and was ceremonially opened
              by the Commissioner of the Sri Lanka Tea Board, Mr. Nimal Udugampola.
            </motion.p>

            <motion.p variants={fadeChild} className="text-slate-600 leading-relaxed">
              Located just a few yards from the Hatale Tea Factory, the tea shop sits on a higher
              elevation, offering a breathtaking bird’s-eye view of the majestic mountains and lush
              greenery. This tranquil setting naturally puts any visitor’s mind at ease —
              the ideal stopover for nature lovers and wildlife enthusiasts.
            </motion.p>

            <motion.p variants={fadeChild} className="text-slate-600 leading-relaxed">
              Enjoy a cup brewed freshly from leaves harvested at dawn, taste our signature classics,
              or take home premium selections crafted with generations of expertise.
            </motion.p>
          </motion.div>

          {/* Image */}
          <div className="overflow-hidden rounded-3xl shadow-lg">
            <img
              src="/assets/img/teaShop/main.jpg"
              alt="Tea shop exterior"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* ===================== SECOND SECTION ===================== */}
      <section className="max-w-6xl mx-auto pb-20 px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <div className="overflow-hidden rounded-3xl shadow-lg">
            <img
              src="/assets/img/teaShop/3.jpg"
              alt="Tea shop interior"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Text */}
          <motion.div
            variants={fadeUpStagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="space-y-5"
          >
            <motion.h2 variants={fadeChild} className="text-3xl md:text-4xl font-messiri text-slate-900">
            
            </motion.h2>

            <motion.p variants={fadeChild} className="text-slate-600 leading-relaxed">
              At the Hatale Classic Tea Shop, visitors can purchase souvenirs for family and
              friends, including tea packs in assorted varieties and flavors — sourced exclusively
              from our tea estates in Hatale and Ancoombra.
            </motion.p>

            <motion.p variants={fadeChild} className="text-slate-600 leading-relaxed">
              Whether you wish to take a brief respite or simply enjoy a cup of refreshing tea,
              this is the perfect spot to unwind. Experience mid-grown tea like never before in a
              setting of natural beauty and tranquility.
            </motion.p>

            <motion.p variants={fadeChild} className="text-slate-600 leading-relaxed">
              Relax, indulge in our unique blends, and immerse yourself in the magnificent
              surroundings — where every moment feels like a breath of fresh mountain air.
            </motion.p>
          </motion.div>
        </div>
      </section>


      {/* ===================== FEATURES SECTION ===================== */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-messiri text-center mb-10">
            What You Can Expect
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Feature Card */}
            <motion.div
              whileHover={{ scale: 1.03, y: -6 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="p-6 bg-white rounded-3xl shadow-md hover:shadow-xl cursor-pointer"
            >
              <img
                src="/assets/img/teaShop/2.jpg"
                className="w-full h-48 object-cover rounded-2xl mb-4"
              />
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                Tea Tasting
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Enjoy curated tasting sessions featuring our signature and seasonal blends.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03, y: -6 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="p-6 bg-white rounded-3xl shadow-md hover:shadow-xl cursor-pointer"
            >
              <img
                src="/assets/img/teaShop/3.jpg"
                className="w-full h-48 object-cover rounded-2xl mb-4"
              />
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                Premium Products
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                From loose-leaf to packaged tea — bring home authentic plantation flavours.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03, y: -6 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="p-6 bg-white rounded-3xl shadow-md hover:shadow-xl cursor-pointer"
            >
              <img
                src="/assets/img/teaShop/5.jpg"
                className="w-full h-48 object-cover rounded-2xl mb-4"
              />
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                Beautiful Locations
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Our shops are located across breathtaking scenic viewpoints on plantations.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ===================== MODERN COLLAGE GALLERY ===================== */}
      <section className="max-w-6xl mx-auto py-20 px-4">
        <h2 className="text-3xl font-messiri text-center mb-12">
          Tea Shop Gallery
        </h2>

        <div className="grid grid-cols-12 gap-4">

          <div className="col-span-12 sm:col-span-7 row-span-2 overflow-hidden rounded-3xl shadow-md">
            <img
              src="/assets/img/teaShop/2.jpg"
              className="w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-500"
            />
          </div>

          <div className="col-span-12 sm:col-span-5 overflow-hidden rounded-3xl shadow-md">
            <img
              src="/assets/img/teaShop/4.jpg"
              className="w-full h-64 object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-500"
            />
          </div>

          <div className="col-span-12 sm:col-span-5 overflow-hidden rounded-3xl shadow-md">
            <img
              src="/assets/img/teaShop/5.jpg"
              className="w-full h-64 object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-500"
            />
          </div>

        </div>
      </section>

    </main>
  );
};

export default TeaShopsPage;
