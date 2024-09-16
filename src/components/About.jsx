"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <>
      <div
        className="xl:max-w-[1280px] w-full sm:px-16 px-6 sm:py-12 py-4"
        id="about"
      >
        <div className="flex flex-row items-center justify-center">
          <div className="w-[140px] h-[70px] flex items-center justify-center border border-neutral-100 p-6">
            <Image
              src="/vercel.svg"
              width={140}
              height={70}
              className="flex-shrink-0 rounded-md shadow-2xl"
              alt="Vercel"
            />
          </div>
          <div className="w-[140px] h-[70px] flex items-center justify-center border border-neutral-100 p-4">
            <Image
              src="/newton.svg"
              width={140}
              height={70}
              className="flex-shrink-0 rounded-md shadow-2xl"
              alt="Newton"
            />
          </div>
          <div className="w-[140px] h-[70px] flex items-center justify-center border border-neutral-100 p-6">
            <Image
              src="/intern.svg"
              width={140}
              height={70}
              className="flex-shrink-0 rounded-md shadow-2xl"
              alt="Intern"
            />
          </div>
          <div className="w-[140px] h-[70px] flex items-center justify-center border border-neutral-100 p-6">
            <Image
              src="/bbd-logo.svg"
              width={140}
              height={70}
              className="flex-shrink-0 rounded-md shadow-2xl"
              alt="BBD"
            />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center sm:py-16 py-6 px-8 max-w-4xl mx-auto">
          <strong className="text-[42px] font-extrabold font-sans bg-gradient-to-t from-neutral-900 to-neutral-300 bg-clip-text text-transparent">
            WHO AM I
          </strong>
          <p className="font-normal text-white text-[16px] sm:text-[18px] leading-[28px] sm:leading-[30.8px] text-center mt-4 sm:mt-6">
            I am a motivated and versatile individual, always eager to take on{" "}
            <span className="text-[#92ed37] ">new challenges</span>. With a
            passion for learning, I am dedicated to delivering{" "}
            <span className="text-[#92ed37] ">high-quality results</span>. With
            a positive attitude and a growth mindset, I am ready to make a
            meaningful contribution and achieve great things.
            <br />
            <br />I have been recognized as one of the{" "}
            <span className="text-[#92ed37] ">Top 100 Coders</span>, and I take
            pride in the positive feedback I&apos;ve received from both clients
            and colleagues. Looking forward, I believe that a great developer
            not only fixes codes but also contributes to solving real-world
            problems.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          <div className="flex flex-col sm:flex-row items-center justify-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl mr-0 sm:mr-2 text-[#92ed37] font-bold">
              01+
            </h1>
            <span className="text-base sm:text-lg lg:text-xl text-center sm:text-left">
              YEARS OF
              <br /> EXPERIENCE
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl mr-0 sm:mr-2 text-[#92ed37] font-bold">
              15+
            </h1>
            <span className="text-base sm:text-lg lg:text-xl text-center sm:text-left">
              COMPLETED
              <br />
              WORKS
            </span>
          </div>
        </div>

        {/* <div className="relative flex items-center justify-center space-x-20 py-10">
          <Image
            src="/github.svg"
            width={8}
            height={8}
            className=" w-8 h-8 object-cover "
            alt="Github"
          />
          <Image
            src="/dis.svg"
            width={8}
            height={8}
            className=" w-8 h-8 object-cover "
            alt="Dis"
          />
          <Image
            src="/linked.svg"
            width={8}
            height={8}
            className=" w-8 h-9 object-cover "
            alt="Linked"
          />
        </div> */}

        <div className="flex flex-col items-center justify-center font-bold  py-10 px-8 max-w-xl mx-auto">
          <Link href="" passHref>
            <button
              className="bg-[#92ed37] hover:bg-[#92ed37bd] text-black font-bold py-3 px-8 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105"
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/My_Resume.pdf"; // Path to your resume file in the public folder
                link.download = "My_Resume.pdf"; // Optional: the name of the file when downloaded
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              Download Me
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default About;
