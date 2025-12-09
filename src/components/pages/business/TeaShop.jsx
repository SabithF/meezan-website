import React from "react";

const TeaShopsPage = () => {
  return (
    <main className="w-full font-outfit">

      {/* ===================== HERO SECTION ===================== */}
      <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
        <img
          src="/assets/img/tea-hero-banner.jpg"
          alt="Tea Plantation"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative h-full w-full flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-messiri tracking-tight">
            Our Tea Shops
          </h1>
          <p className="mt-4 text-lg opacity-90 max-w-2xl text-center">
            Experience the finest flavours of Sri Lankan tea from our heritage shops,
            nestled across stunning plantation landscapes.
          </p>
        </div>
      </section>

      {/* ===================== INTRO SECTION ===================== */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Text */}
          <div>
            <h2 className="text-3xl font-messiri text-slate-900 mb-4">
              Taste the Tradition
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Our tea shops are more than just retail spaces — they are an immersion
              into the culture, flavour, and history of tea. Whether you are on a
              scenic hill country drive or visiting our plantations, each tea shop
              offers a warm welcome, authentic blends, and unforgettable views.
            </p>

            <p className="text-slate-600 leading-relaxed mt-4">
              Enjoy a cup brewed freshly from leaves harvested at dawn, taste our
              signature classics, or take home premium selections that reflect
              generations of expertise.
            </p>
          </div>

          {/* Image */}
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <img
              src="/assets/img/teashop-1.jpg"
              alt="Tea shop exterior"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ===================== FEATURE SECTION ===================== */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-messiri text-center mb-10">
            What You Can Expect
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-6 bg-white rounded-3xl shadow-md">
              <img
                src="/assets/img/tea-tasting.jpg"
                className="w-full h-48 object-cover rounded-2xl mb-4"
              />
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                Tea Tasting
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Enjoy curated tasting sessions featuring our signature and seasonal blends.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 bg-white rounded-3xl shadow-md">
              <img
                src="/assets/img/tea-products.jpg"
                className="w-full h-48 object-cover rounded-2xl mb-4"
              />
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                Premium Products
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                From loose-leaf to packaged tea — bring home authentic plantation flavours.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 bg-white rounded-3xl shadow-md">
              <img
                src="/assets/img/tea-scenery.jpg"
                className="w-full h-48 object-cover rounded-2xl mb-4"
              />
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                Beautiful Locations
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Our shops are located across breathtaking scenic viewpoints on plantations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== IMAGE GALLERY ===================== */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-messiri text-center mb-10">
          Tea Shop Gallery
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <img
            src="/assets/img/teashop-2.jpg"
            className="rounded-3xl shadow-md w-full h-64 object-cover"
          />
          <img
            src="/assets/img/teashop-3.jpg"
            className="rounded-3xl shadow-md w-full h-64 object-cover"
          />
          <img
            src="/assets/img/teashop-4.jpg"
            className="rounded-3xl shadow-md w-full h-64 object-cover"
          />
        </div>
      </section>

    </main>
  );
};

export default TeaShopsPage;
