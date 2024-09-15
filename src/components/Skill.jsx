import React from "react";
import Image from "next/image";

const Skill = () => {
  return (
    <>
      <div>
        {/* Heading Section */}
        <div
          className="flex flex-col items-center justify-center text-center mb-12"
          id="skills"
        >
          <h1 className="text-3xl sm:text-[42px] lg:text-5xl font-extrabold font-sans bg-gradient-to-t from-neutral-900 to-neutral-300 bg-clip-text text-transparent">
            SHOWCASING SKILLSET
          </h1>
        </div>

        {/* Skills Section */}
        <div className="flex flex-wrap items-center justify-center md:py-16 py-8  px-4 sm:px-12 lg:px-16 gap-x-12 md:gap-x-24 ">
          {/* Front End Section */}
          <div className="flex flex-col items-center justify-center text-center m-4">
            <h1 className="font-semibold py-4 text-[#92ed37] text-lg sm:text-xl lg:text-2xl">
              Front End
            </h1>
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
              {[
                { src: "/html.svg", alt: "HTML", label: "HTML" },
                { src: "/css.svg", alt: "CSS", label: "CSS" },
                { src: "/js.svg", alt: "JS", label: "JS" },
                { src: "/react.svg", alt: "REACT", label: "REACT" },
                { src: "/nextjs.svg", alt: "NEXT", label: "NEXT" },
              ].map((skill, idx) => (
                <div className="flex flex-col items-center" key={idx}>
                  <Image
                    src={skill.src}
                    width={40}
                    height={40}
                    className="w-10 h-10 flex-shrink-0 rounded-md shadow-2xl"
                    alt={skill.alt}
                  />
                  <span className="text-xs mt-2">{skill.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Back End Section */}
          <div className="flex flex-col items-center justify-center text-center m-4">
            <h1 className="font-semibold py-4 text-[#92ed37] text-lg sm:text-xl lg:text-2xl">
              Back End
            </h1>
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
              {[
                { src: "/post.svg", alt: "POSTGRESQL", label: "POSTGRESQL" },
                { src: "/node.svg", alt: "NODE", label: "NODE" },
                { src: "/express.svg", alt: "EXPRESS", label: "EXPRESS" },
                { src: "/mongo.svg", alt: "MONGODB", label: "MONGODB" },
                { src: "/graph.svg", alt: "GRAPHQL", label: "GRAPHQL" },
              ].map((skill, idx) => (
                <div className="flex flex-col items-center" key={idx}>
                  <Image
                    src={skill.src}
                    width={40}
                    height={40}
                    className="w-10 h-10 flex-shrink-0 rounded-md shadow-2xl"
                    alt={skill.alt}
                  />
                  <span className="text-xs mt-2">{skill.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Other Skills Section */}
        <div className="flex flex-wrap items-center justify-center mb-16 px-4 sm:px-12 lg:px-16 space-y-8 sm:space-y-0 sm:space-x-8">
          <div className="flex flex-col items-center justify-center text-center m-4">
            <h1 className="font-semibold py-4 text-[#92ed37] text-lg sm:text-xl lg:text-2xl">
              Other
            </h1>
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
              {[
                { src: "/redux.svg", alt: "REDUX", label: "REDUX" },
                { src: "/git.svg", alt: "GIT", label: "GIT" },
                { src: "/github.svg", alt: "GITHUB", label: "GITHUB" },
                { src: "/aws.svg", alt: "AWS", label: "AWS" },
                { src: "/figma.svg", alt: "FIGMA", label: "FIGMA" },
              ].map((skill, idx) => (
                <div className="flex flex-col items-center" key={idx}>
                  <Image
                    src={skill.src}
                    width={40}
                    height={40}
                    className="w-10 h-10 flex-shrink-0 rounded-md shadow-2xl"
                    alt={skill.alt}
                  />
                  <span className="text-xs mt-2">{skill.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;
