import React from "react";

const Newslatter = () => {
  return (
    <div className="bg-[#92ed37] w-full h-auto footer-bg py-8">
      <div className="flex flex-col justify-center items-center text-black px-6 sm:px-16">
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-sans bg-gradient-to-t from-neutral-500 to-black bg-clip-text text-transparent text-center">
          WANT TO KNOW MORE?
        </h1>

        <p className="text-base sm:text-lg lg:text-xl mt-4 sm:mt-8 text-center sm:w-3/4 lg:w-1/2">
          Discover more about my journey and skills. Download my resume to
          explore my experience and achievements. I’m excited to share my story
          with you!
        </p>

        <button className="border border-[#92ed37] bg-black text-[#92ed37] font-medium py-2 px-6 rounded-full mt-4 sm:mt-8 shadow-md transition duration-300 ease-in-out transform hover:scale-105">
          DOWNLOAD RESUME
        </button>
      </div>
    </div>
  );
};

export default Newslatter;
