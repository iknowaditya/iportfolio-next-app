import React from "react";

const Newslatter = () => {
  return (
    <>
      <div className="bg-[#92ed37] w-full h-[300px] footer-bg ">
        <div className="flex flex-col justify-center items-center text-black sm:px-16 px-6 sm:py-12 py-4">
          <h1 className="text-4xl font-extrabold font-sans bg-gradient-to-t from-neutral-500 to-black bg-clip-text text-transparent">
            WANT TO KNOW MORE?
          </h1>

          <p className="text-lg mt-8 text-center sm:w-1/2">
            This is the complete me, download my resume and find all about me.
            Change this content accordingly. Just placing the content in order
            to look great! Put upto 3 lines so that it looks aesthetic.
          </p>
          <button className="border border-[#92ed37] bg-black text-[#92ed37] font-medium py-2 px-6 rounded-full mt-8">
            DOWNLOAD RESUME
          </button>
        </div>
      </div>
    </>
  );
};

export default Newslatter;
