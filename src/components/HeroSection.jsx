"use client";

import { Button } from "../components/ui/moving-border";
import { BackgroundBeams } from "../components/ui/background-beams";
import { ButtonsCard } from "../components/ui/tailwindcss-buttons";

const HeroSection = () => {
  return (
    <>
      <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col sm:py-16 justify-center items-center relative overflow-hidden mx-auto py-10 md:py-0">
        <div className="p-6 relative z-10 w-full text-center">
          <div className="flex justify-center mb-4">
            <Button>NAMASKARAM!</Button>
          </div>
          <h1 className="text-5xl font-semibold mb-4 text-white">
            I&apos;m{" "}
            <span
              className="text-5xl font-semibold mb-4 text-[#92ed37]"
              style={{ fontFamily: "league_script" }}
            >
              Mark Holman
            </span>
          </h1>
          <h3 className="text-lg mb-4">Full Stack Developer</h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full">
            <ButtonsCard
              href={"/contact"}
              className="flex gap-2 items-center justify-center bg-black border border-neutral-800 rounded-full text-white text-sm md:text-base min-w-[150px] max-w-[200px] min-h-[40px] max-h-[50px] w-full h-auto antialiased"
            >
              Download CV
            </ButtonsCard>

            <ButtonsCard
              href={"/contact"}
              className="flex items-center justify-center gap-2 bg-black border border-neutral-800 rounded-full text-white text-sm md:text-base min-w-[150px] max-w-[200px] min-h-[40px] max-h-[50px] w-full h-auto antialiased"
              type="button"
            >
              Contact Me
            </ButtonsCard>
          </div>
        </div>

        {/* Development Names at the Bottom */}
        <div className="absolute bottom-6 mb-6 flex flex-row space-x-6">
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

        <BackgroundBeams />
      </div>
    </>
  );
};

export default HeroSection;
