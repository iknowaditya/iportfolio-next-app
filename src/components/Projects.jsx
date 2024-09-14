import React from "react";
import Image from "next/image";
import { CardSpotlight } from "@/components/ui/card-spotlight";

const Projects = () => {
  return (
    <>
      <div>
        <div className="text-center sm:py-16 py-6 sm:px-16 px-6">
          <h1 className="text-2xl font-bold">PROJECTS WORKED ON</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 p-6 sm:px-28 px-12 sm:py-16 py-6">
          <CardSpotlight className="border rounded-lg p-6 flex flex-col items-center justify-between z-20 min-h-[400px] w-full text-center">
            <div>
              <Image
                src="/vercel.svg"
                width={170}
                height={40}
                className="rounded-md shadow-lg mb-4 z-20"
              />
            </div>
            <div>
              <p className="text-sm sm:text-base text-neutral-200 z-20">
                Created{" "}
                <span className="text-[#92ed37] font-bold">Xperiento</span>, a
                mobile-first application designed to provide smart insights that
                help improve sales, marketing, customer retention, and
                satisfaction.
              </p>
            </div>
            <div className="flex space-x-4 mt-4">
              <button className="border border-[#92ed37] text-neutral-200 font-bold py-2 px-6 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105">
                Live Demo
              </button>
              <button className="border border-[#92ed37] text-neutral-200 font-bold py-2 px-6 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105">
                <Image
                  src="/github.svg"
                  width={20}
                  height={20}
                  alt="GitHub"
                  className="rounded-md"
                />
              </button>
            </div>
          </CardSpotlight>

          <CardSpotlight className="border rounded-lg p-6 flex flex-col items-center justify-between min-h-[400px] w-full text-center">
            {/* Project 2 */}
            <div>
              <Image
                src="/vercel.svg"
                width={170}
                height={40}
                className="rounded-md shadow-lg mb-4"
              />
            </div>
            <div>
              <p className="text-sm sm:text-base text-neutral-200">
                Created{" "}
                <span className="text-[#92ed37] font-bold">Xperiento</span>, a
                mobile-first application designed to provide smart insights that
                help improve sales, marketing, customer retention, and
                satisfaction.
              </p>
            </div>
            <div className="flex space-x-4 mt-4">
              <button className="border border-[#92ed37] text-neutral-200 font-bold py-2 px-6 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105">
                Live Demo
              </button>
              <button className="border border-[#92ed37] text-neutral-200 font-bold py-2 px-6 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105">
                <Image
                  src="/github.svg"
                  width={20}
                  height={20}
                  alt="GitHub"
                  className="rounded-md"
                />
              </button>
            </div>
          </CardSpotlight>

          {/* Repeat for other projects */}
          <CardSpotlight className="border rounded-lg p-6 flex flex-col items-center justify-between min-h-[400px] w-full text-center">
            {/* Project 2 */}
            <div>
              <Image
                src="/vercel.svg"
                width={170}
                height={40}
                className="rounded-md shadow-lg mb-4"
              />
            </div>
            <div>
              <p className="text-sm sm:text-base text-neutral-200">
                Created{" "}
                <span className="text-[#92ed37] font-bold">Xperiento</span>, a
                mobile-first application designed to provide smart insights that
                help improve sales, marketing, customer retention, and
                satisfaction.
              </p>
            </div>
            <div className="flex space-x-4 mt-4">
              <button className="border border-[#92ed37] text-neutral-200 font-bold py-2 px-6 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105">
                Live Demo
              </button>
              <button className="border border-[#92ed37] text-neutral-200 font-bold py-2 px-6 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105">
                <Image
                  src="/github.svg"
                  width={20}
                  height={20}
                  alt="GitHub"
                  className="rounded-md"
                />
              </button>
            </div>
          </CardSpotlight>

          <CardSpotlight className="border rounded-lg p-6 flex flex-col items-center justify-between min-h-[400px] w-full text-center">
            {/* Project 2 */}
            <div>
              <Image
                src="/vercel.svg"
                width={170}
                height={40}
                className="rounded-md shadow-lg mb-4"
              />
            </div>
            <div>
              <p className="text-sm sm:text-base text-neutral-200">
                Created{" "}
                <span className="text-[#92ed37] font-bold">Xperiento</span>, a
                mobile-first application designed to provide smart insights that
                help improve sales, marketing, customer retention, and
                satisfaction.
              </p>
            </div>
            <div className="flex space-x-4 mt-4">
              <button className="border border-[#92ed37] text-neutral-200 font-bold py-2 px-6 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105">
                Live Demo
              </button>
              <button className="border border-[#92ed37] text-neutral-200 font-bold py-2 px-6 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105">
                <Image
                  src="/github.svg"
                  width={20}
                  height={20}
                  alt="GitHub"
                  className="rounded-md"
                />
              </button>
            </div>
          </CardSpotlight>
        </div>

        <div></div>
      </div>
    </>
  );
};

export default Projects;
