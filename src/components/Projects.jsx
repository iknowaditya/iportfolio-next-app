"use client";

import React, { useState } from "react";
import Image from "next/image";
// import { CardSpotlight } from "@/components/ui/card-spotlight";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";

const Projects = () => {
  return (
    <>
      <div className="w-full py-20">
        <div className="text-center sm:py-16 py-6 sm:px-16 px-6" id="projects">
          <h1 className="text-[42px] font-extrabold font-sans bg-gradient-to-t from-neutral-900 to-neutral-300 bg-clip-text text-transparent ">
            PROJECTS WORKED ON
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 sm:px-28 px-12 sm:py-16 py-6">
          <Card
            title="Xperiento"
            icon={<AceternityIcon order="Project 1" />}
            des={
              <>
                Created{" "}
                <span className="text-[#92ed37] font-bold">Xperiento</span>, a
                mobile-first application designed to provide smart insights that
                help improve sales, marketing, customer retention, and
                satisfaction.
              </>
            }
            btn1={
              <a
                href="https://xperiento-app-frontend.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            }
            btn2={
              <a
                href="https://github.com/iknowaditya/xperiento-app-mernstack"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            }
          >
            <CanvasRevealEffect
              animationSpeed={5.1}
              containerClassName="bg-emerald-900 rounded-3xl overflow-hidden"
            />
          </Card>

          <Card
            title="Yamm Yamm Food Delivery"
            icon={<AceternityIcon order="Project 2" />}
            des={
              <>
                Created Yumm Yumm Food{" "}
                <span className="text-[#92ed37] font-bold">Delivery</span>, It
                App is a full-stack web application designed for food delivery, allowing users to explore a variety of dishes, add them to their cart, and proceed to checkout using Stripe for secure payments. It includes an admin panel for managing food availability, user orders, and tracking information, with all data stored in MongoDB.
              </>
            }
            btn1={
              <a
                href="https://food-delivery-fullstack-frontend.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            }
            btn2={
              <a
                href="https://github.com/iknowaditya/food-delivery-fullstack"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            }
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-black rounded-3xl overflow-hidden"
              colors={[
                [236, 72, 153],
                [232, 121, 249],
              ]}
              dotSize={2}
            />

            <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
          </Card>

          {/* Repeat for other projects */}
          <Card
            title="JetLifly"
            icon={<AceternityIcon order="Project 3" />}
            des={
              <>
                Created{" "}
                <span className="text-[#92ed37] font-bold">JetLifly</span>, is a
                modern private jet booking platform that allows users to explore
                and book from a wide range of luxury private jets.
              </>
            }
            btn1={
              <a
                href="https://jet-lifly-project-frontend.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            }
            btn2={
              <a
                href="https://github.com/iknowaditya/jetLifly_project"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            }
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-sky-600 rounded-3xl overflow-hidden"
              colors={[[125, 211, 252]]}
            />
          </Card>

          <Card
            title="Homeland."
            icon={<AceternityIcon order="Project 4" />}
            des={
              <>
                Created{" "}
                <span className="text-[#92ed37] font-bold">Homeland</span>, is a
                user-friendly website that provides a seamless experience for
                users looking to buy, sell, or explore real estate properties.
                satisfaction.
              </>
            }
            btn1={
              <a
                href="https://real-estate-app-gules-tau.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            }
            btn2={
              <a
                href="https://github.com/iknowaditya/real-estate-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            }
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-green-950 rounded-3xl overflow-hidden"
              colors={[
                [255, 65, 145],
                [233, 0, 116],
              ]}
              dotSize={2}
            />

            <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
          </Card>
        </div>
      </div>
    </>
  );
};

export default Projects;

const Card = ({ title, icon, children, des, btn1, btn2 }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] rounded-3xl"
    // style={{
    //   //   add these two
    //   //   you can generate the color from here https://cssgradient.io/
    //   background: "rgb(4,7,29)",
    //   backgroundColor:
    //     "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
    // }}
    >
      <Icon className="absolute h-10 w-10 -top-3 -left-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -left-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -top-3 -right-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -right-3 dark:text-white text-black opacity-30" />
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
      <div className="relative z-20">
        {/* Icon container */}
        <div
          className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] 
    group-hover/canvas-card:opacity-0 transition duration-200 min-w-40 mx-auto flex items-center justify-center"
        >
          {icon}
        </div>

        {/* Title */}
        <h2
          className="dark:text-white text-center text-3xl opacity-0 group-hover/canvas-card:opacity-100
   relative z-10 text-black mt-4 font-bold group-hover/canvas-card:text-white 
   group-hover/canvas-card:-translate-y-2 transition duration-200"
        >
          {title}
        </h2>

        {/* Description */}
        <p
          className="text-sm opacity-0 group-hover/canvas-card:opacity-100
   relative z-10 mt-4 group-hover/canvas-card:text-white text-center
   group-hover/canvas-card:-translate-y-2 transition duration-200"
          style={{ color: "#E4ECFF" }}
        >
          {des}
        </p>

        {/* Centered Buttons */}
        <div className="flex flex-col items-center space-y-4 mt-6">
          <button className="text-center border opacity-0 group-hover/canvas-card:opacity-100 relative z-10 border-[#92ed37] text-neutral-200 font-bold py-2 px-6 rounded-full group-hover/canvas-card:text-white shadow-md transition duration-300 ease-in-out transform hover:scale-105">
            {btn1}
          </button>
          <button className="flex items-center justify-center text-center border opacity-0 group-hover/canvas-card:opacity-100 relative z-10 border-[#92ed37] text-neutral-200 font-bold py-2 px-6 rounded-full group-hover/canvas-card:text-white shadow-md transition duration-300 ease-in-out transform hover:scale-105">
            <Image
              src="/github.svg"
              alt="icon"
              width={25}
              height={25}
              className="mr-2 "
            />{" "}
            {/* Icon */}
            {btn2}
          </button>
        </div>
      </div>
    </div>
  );
};

const AceternityIcon = ({ order }) => {
  return (
    <div>
      <button className="relative inline-flex overflow-hidden rounded-full p-[1px] ">
        <span
          className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
         bg-[conic-gradient(from_90deg_at_50%_50%,#616F39_0%,#616F39_50%,#0000_100%)]"
        />
        <span
          className="inline-flex h-full w-full cursor-pointer items-center 
        justify-center rounded-full bg-black px-5 py-2 text-purple backdrop-blur-3xl font-bold text-xl"
        >
          {order}
        </span>
      </button>
    </div>
  );
};

export const Icon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
