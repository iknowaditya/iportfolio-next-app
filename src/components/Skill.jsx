import React from "react";
import Image from "next/image";

const Skill = () => {
  return (
    <>
      <div>
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
            SHOWCASING SKILLSET
          </h1>
        </div>

        <div className="flex flex-wrap items-center justify-center sm:py-16 py-6 sm:px-16 px-6 space-x-28">
          {/* Front End Section */}
          <div className="flex flex-col items-center justify-center text-center m-4">
            <h1 className="font-semibold py-4 text-[#92ed37] text-lg sm:text-xl">
              Front End
            </h1>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="flex flex-col items-center">
                <Image
                  src="/html.svg"
                  width={40}
                  height={40}
                  className="w-10 h-10 flex-shrink-0 rounded-md shadow-2xl"
                  alt="HTML"
                />
                <span className="text-xs  mt-2">HTML</span>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src="/css.svg"
                  width={40}
                  height={40}
                  className="w-10 h-10 flex-shrink-0 rounded-md shadow-2xl"
                  alt="CSS"
                />
                <span className="text-xs  mt-2">CSS</span>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src="/js.svg"
                  width={40}
                  height={40}
                  className="w-10 h-10 flex-shrink-0 rounded-md shadow-2xl"
                  alt="JS"
                />
                <span className="text-xs  mt-2">JS</span>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src="/react.svg"
                  width={40}
                  height={40}
                  className="w-10 h-10 flex-shrink-0 rounded-md shadow-2xl"
                  alt="REACT"
                />
                <span className="text-xs  mt-2">REACT</span>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src="/nextjs.svg"
                  width={40}
                  height={40}
                  className="w-10 h-10 flex-shrink-0 rounded-md shadow-2xl"
                  alt="NEXT"
                />
                <span className="text-xs  mt-2">NEXT</span>
              </div>
            </div>
          </div>

          {/* Back End Section */}
          <div className="flex flex-col items-center justify-center text-center m-4">
            <h1 className="font-semibold py-4 text-[#92ed37] text-lg sm:text-xl">
              Back End
            </h1>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="flex flex-col items-center">
                <Image
                  src="/post.svg"
                  width={40}
                  height={40}
                  className="w-10 h-10 flex-shrink-0 rounded-md shadow-2xl"
                  alt="POSTGRESQL"
                />
                <span className="text-xs  mt-2 ">POSTGRESQL</span>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src="/node.svg"
                  width={40}
                  height={40}
                  className="w-10 h-10 flex-shrink-0 rounded-md shadow-2xl"
                  alt="NODE"
                />
                <span className="text-xs  mt-2">NODE</span>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src="/express.svg"
                  width={40}
                  height={40}
                  className="w-10 h-10 flex-shrink-0 rounded-md shadow-2xl"
                  alt="EXPRESS"
                />
                <span className="text-xs mt-2">EXPRESS</span>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src="/mongo.svg"
                  width={40}
                  height={40}
                  className="w-10 h-10 flex-shrink-0 rounded-md shadow-2xl"
                  alt="MONGODB"
                />
                <span className="text-xs  mt-2">MONGODB</span>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src="/graph.svg"
                  width={40}
                  height={40}
                  className="w-10 h-10 flex-shrink-0 rounded-md shadow-2xl"
                  alt="GRAPHQL"
                />
                <span className="text-xs mt-2">GRAPHQL</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center text-center m-4">
            <h1 className="font-semibold py-4 text-[#92ed37] text-lg sm:text-xl">
              Other
            </h1>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="flex flex-col items-center">
                <Image
                  src="/redux.svg"
                  width={40}
                  height={40}
                  className="w-10 h-10 flex-shrink-0 rounded-md shadow-2xl"
                  alt="REDUX"
                />
                <span className="text-xs  mt-2">REDUX</span>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src="/git.svg"
                  width={40}
                  height={40}
                  className="w-10 h-10 flex-shrink-0 rounded-md shadow-2xl"
                  alt="GIT"
                />
                <span className="text-xs  mt-2 ">GIT</span>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src="/github.svg"
                  width={40}
                  height={40}
                  className="w-10 h-10 flex-shrink-0 rounded-md shadow-2xl"
                  alt="GITHUB"
                />
                <span className="text-xs  mt-2">GITHUB</span>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src="/aws.svg"
                  width={40}
                  height={40}
                  className="w-10 h-10 flex-shrink-0 rounded-md shadow-2xl"
                  alt="AWS"
                />
                <span className="text-xs mt-2">AWS</span>
              </div>

              <div className="flex flex-col items-center">
                <Image
                  src="/figma.svg"
                  width={40}
                  height={40}
                  className="w-10 h-10 flex-shrink-0 rounded-md shadow-2xl"
                  alt="FIGMA"
                />
                <span className="text-xs mt-2">FIGMA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;
