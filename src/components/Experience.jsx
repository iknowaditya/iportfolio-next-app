import React from "react";

const Experience = () => {
  return (
    <div className="px-4 sm:px-8 lg:px-16 py-8">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h1 className="text-2xl lg:text-3xl font-bold">
          EXPERIENCE & EDUCATION
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Experience Section */}
        <div className="px-4 sm:px-8 py-8">
          <h2 className="text-xl text-[#92ed37] font-extrabold mb-8 text-center">
            EXPERIENCE
          </h2>

          <div className="mb-8">
            <div className="flex justify-between">
              <h3 className="text-lg font-bold">Back End Developer</h3>
              <h3 className="text-lg font-bold text-[#92ed37]">
                [Company Name]
              </h3>
            </div>
            <p className="text-xs text-gray-600">December 2023 - March 2024</p>
            <p className="text-sm text-neutral-300 mt-2">
              Working as a Backend Developer, helping MuLearn in backend needs
              and database management throughout the internship period.
            </p>
          </div>

          <div className="mb-8">
            <div className="flex justify-between">
              <h3 className="text-lg font-bold">Back End Developer</h3>
              <h3 className="text-lg font-bold text-[#92ed37]">
                [Company Name]
              </h3>
            </div>
            <p className="text-xs text-gray-600">December 2023 - March 2024</p>
            <p className="text-sm text-neutral-300 mt-2">
              Continued backend development at MuLearn, focusing on optimizing
              systems and improving database structures.
            </p>
          </div>
        </div>

        {/* Education Section */}
        <div className="px-4 sm:px-8 py-8">
          <h2 className="text-xl text-[#92ed37] font-extrabold mb-8 text-center">
            EDUCATION
          </h2>

          <div className="mb-8">
            <div className="flex justify-between">
              <h3 className="text-lg font-bold">
                Babu Banarasi Das University
              </h3>
              <h3 className="text-lg font-bold text-[#92ed37]">[BTech.]</h3>
            </div>
            <p className="text-xs text-gray-600">December 2023 - March 2024</p>
            <p className="text-sm text-neutral-300 mt-2">
              Completed coursework in Computer Science, focusing on backend
              development and system architecture.
            </p>
          </div>

          <div className="mb-8">
            <div className="flex justify-between">
              <h3 className="text-lg font-bold">
                Babu Banarasi Das University
              </h3>
              <h3 className="text-lg font-bold text-[#92ed37]">[BTech.]</h3>
            </div>
            <p className="text-xs text-gray-600">December 2023 - March 2024</p>
            <p className="text-sm text-neutral-300 mt-2">
              Research and project work in system optimization and database
              efficiency.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
