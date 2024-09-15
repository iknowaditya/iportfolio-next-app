import React from "react";

const Experience = () => {
  return (
    <div className="px-4 sm:px-8 lg:px-16 py-8" id="experience">
      {/* Title Section */}
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-sans bg-gradient-to-t from-neutral-900 to-neutral-300 bg-clip-text text-transparent">
          EXPERIENCE & EDUCATION
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Experience Section */}
        <div className="px-4 sm:px-8 py-4 sm:py-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-[#92ed37] font-extrabold mb-6 sm:mb-8 text-center">
            EXPERIENCE
          </h2>

          <div className="mb-6 sm:mb-8">
            <div className="flex flex-col sm:flex-row justify-between">
              <h3 className="text-lg sm:text-xl font-bold">
                Full Stack Developer (Frontend)
              </h3>
              <h3 className="text-lg sm:text-xl font-bold text-[#92ed37]">
                [CheapairticketUSA]
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-gray-600">
              March 2023 - June 2024
            </p>
            <p className="text-sm sm:text-base text-neutral-300 mt-2">
              Played a key role in building complex web applications, where I
              used React.js and TailwindCSS for the frontend and Node.js with
              Express.js for the backend. Worked on data storage with MongoDB
              and PostgreSQL.
            </p>
          </div>

          <div className="mb-6 sm:mb-8">
            <div className="flex flex-col sm:flex-row justify-between">
              <h3 className="text-lg sm:text-xl font-bold">Frontend Intern</h3>
              <h3 className="text-lg sm:text-xl font-bold text-[#92ed37]">
                [Gravitonweb Technology]
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-gray-600">
              October 2022 - January 2023
            </p>
            <p className="text-sm sm:text-base text-neutral-300 mt-2">
              Worked as a frontend intern, where I contributed to developing
              user-centric designs using React.js and modern CSS techniques.
              Assisted with React.js core features like hooks and state
              management, and collaborated with senior developers on integrating
              frontend components with backend APIs.
            </p>
          </div>
        </div>

        {/* Education Section */}
        <div className="px-4 sm:px-8 py-4 sm:py-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-[#92ed37] font-extrabold mb-6 sm:mb-8 text-center">
            EDUCATION
          </h2>

          <div className="mb-6 sm:mb-8">
            <div className="flex flex-col sm:flex-row justify-between">
              <h3 className="text-lg sm:text-xl font-bold">
                Babu Banarasi Das University
              </h3>
              <h3 className="text-lg sm:text-xl font-bold text-[#92ed37]">
                [BTech.]
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-gray-600">
              September 2018 - November 2021
            </p>
            <p className="text-sm sm:text-base text-neutral-300 mt-2">
              I successfully completed a Bachelor of Technology (B.Tech) from
              Babu Banarasi Das University. My academic background has equipped
              me with strong problem-solving and analytical skills.
            </p>
          </div>

          <div className="mb-6 sm:mb-8">
            <div className="flex flex-col sm:flex-row justify-between">
              <h3 className="text-lg sm:text-xl font-bold">IFTM University</h3>
              <h3 className="text-lg sm:text-xl font-bold text-[#92ed37]">
                [Polytechnic]
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-gray-600">
              June 2015 - May 2018
            </p>
            <p className="text-sm sm:text-base text-neutral-300 mt-2">
              Completed a Polytechnic from IFTM University, showcasing my
              commitment to technical excellence and analytical thinking.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
