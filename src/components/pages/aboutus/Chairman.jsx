import React from "react";

const ChairmanSection = () => {
  return (
    <section className="w-full bg-[#F8F8F8] py-16 px-4">
      <div className="mx-auto max-w-5xl bg-white shadow-xl rounded-3xl p-8 md:p-10 lg:p-12 grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.6fr)] items-center">
        {/* Image + badge */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-1 text-xs font-medium tracking-wide uppercase text-gray-600">
            Chairman’s Message
          </div>

          <div className="relative w-56 h-56 md:w-64 md:h-64">
            <img
              src="/assets/img/chair.jpg"
              alt="Chairman of Meezan Group, Imthisham Meezan"
              className="w-full h-full object-cover rounded-3xl shadow-lg"
            />
            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-black/5" />
          </div>
        </div>

        {/* Content */}
        <div className="text-left">
          <h2 className="text-3xl md:text-4xl font-messiri tracking-tight text-gray-900">
            Meet Our Chairman
          </h2>

          <div className="mt-3 flex flex-wrap items-center gap-3 text-gray-700">
            <p className="font-cursiveFont text-2xl">Imthisham Meezan</p>
            <span className="h-5 w-px bg-gray-300" />
            <p className="text-sm uppercase tracking-[0.15em] text-gray-500">
              Chairperson · Meezan Group of Companies
            </p>
          </div>

          <div className="mt-6 border-l-4 border-gray-300 pl-5">
            <p className="text-gray-700 leading-relaxed font-outfit text-sm md:text-base">
              “Marking over five decades since our humble inception in 1974, it is with
              great pleasure that I reflect on our remarkable journey. This message of
              felicitation and greetings comes with a deep sense of pride as my brother
              Ziaudeen Meezan and I recall the many milestones we have overcome, guided
              by an unwavering ‘Never Say Never’ spirit. Looking back, vivid childhood
              memories of visiting sprawling tea plantations with my elder…”
            </p>
          </div>

          <div className="mt-8">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-gray-50 px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-100 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
            >
              See full message
              <span aria-hidden="true">↗</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChairmanSection;
