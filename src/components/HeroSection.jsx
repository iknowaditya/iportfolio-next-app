"use client";

import { Button } from "../components/ui/moving-border";
import { ButtonsCard } from "../components/ui/tailwindcss-buttons";
import Link from "next/link";

const HeroSection = () => {
  return (
    <>
      <div
        className="h-[40rem] md:h-[43rem] w-full rounded-md flex flex-col sm:py-16 justify-center items-center relative overflow-hidden mx-auto py-10 md:py-0"
        id="home"
      >
        <div className="p-6 relative z-10 w-full text-center max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <div className="relative flex justify-center mb-4 ">
            <Button>NAMASKARAM!</Button>
          </div>
          <h1 className=" font-semibold mb-4 text-white text-center md:tracking-wider text-base md:text-3xl xl:text-3xl">
            I&apos;m{" "}
            <span
              className="text-3xl  md:text-5xl font-semibold mb-4 text-[#92ed37]"
              style={{ fontFamily: " 'Poppins', sans-serif" }}
            >
              Hanu Singh
            </span>
          </h1>
          <h3 className="md:text-lg text-sm mb-4 tracking-widest max-w- text-center ">
            Full Stack Developer
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 w-full mt-4 md:mt-2">
            <ButtonsCard
              href={"/contact"}
              className="flex gap-2 items-center justify-center bg-black border border-neutral-800 hover:border-[#92ed37] rounded-full text-white text-sm md:text-base min-w-[100px] max-w-[150px] min-h-[40px] max-h-[50px] w-full h-auto antialiased"
            >
              Download CV
            </ButtonsCard>

            <ButtonsCard
              className="flex items-center justify-center gap-2 bg-black border hover:border-[#92ed37]  border-neutral-800 rounded-full text-white text-sm md:text-base min-w-[100px] max-w-[150px] min-h-[40px] max-h-[50px] w-full h-auto antialiased"
              type="button"
            >
              <Link href="#contact">Contact Me</Link>
            </ButtonsCard>
          </div>
        </div>

        {/* Development Names at the Bottom */}
        <div className="hidden  absolute bottom-6 mb-6 sm:flex flex-row space-x-6">
          <h3>Front End Development</h3>
          <h3 className="border-l-2 border-[#92ed37] pl-4">
            Back End Development
          </h3>
          <h3 className="border-l-2 border-[#92ed37] pl-4">
            Competitive Coding
          </h3>
          <h3 className="border-l-2 border-[#92ed37] pl-4">
            Mern Stack Development
          </h3>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
