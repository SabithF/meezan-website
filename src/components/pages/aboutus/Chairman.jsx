import React from "react";

const ChairmanSection = () => {
  return (
    <section className="w-full flex justify-center py-16 px-4">
      {/* Card Wrapper */}
      <div className="w-full md:w-[60%] bg-[#F3F3F3] shadow-md rounded-3xl pb-10 text-center relative">

        {/* Chairman Image */}
        <div className="w-full flex justify-center -mt-20">
          <img
            src="/assets/img/bung-02.jpg"  // change to chairman image
            alt="Chairman"
            className="w-[18rem] h-[18rem] object-cover rounded-3xl shadow-lg"
          />
        </div>

        {/* Title */}
        <h2 className="text-3xl font-messiri mt-6">Meet Our Chairman</h2>

        {/* Signature Name */}
        <p className="font-cursiveFont text-xl mt-2">
          Imthisham Meezan
        </p>

        {/* Description */}
        <p className="text-gray-700 leading-relaxed px-6 mt-6 font-outfit">
          "Marking over five decades since our humble inception in 1974, it is with great
          pleasure that I, as Chairperson of the Meezan Group of Companies, reflect on our
          remarkable journey. This message of felicitation and greetings come with a deep
          sense of pride as my brother Ziaudeen Meezan and I, Ithtisham Meezan recall the many
          milestones we have overcome, guided by an unwavering “Never Say Never” spirit.
          Looking back, vivid childhood memories of visiting sprawling tea plantations with my elder…"
        </p>

        {/* Button */}
        <div className="mt-8 flex items-center justify-center w-full">
          <button className="px-6 py-2 bg-gray-300 rounded-full  hover:bg-gray-400 transition">
            See more..
          </button>
        </div>
      </div>
    </section>
  );
};

export default ChairmanSection;
