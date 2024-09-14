import React from "react";
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa"; // Importing icons

const Contact = () => {
  return (
    <footer className=" text-white py-16 px-4 sm:px-8 lg:px-16">
      <div className="flex flex-col items-center justify-center">
        {/* Title Section */}
        <div className="text-center">
          <h1 className="text-2xl lg:text-4xl font-bold mb-8">
            CONNECT WITH ME
          </h1>
        </div>

        {/* Description */}
        <div className="flex items-center justify-center mb-8 text-lg">
          <p className="text-center text-neutral-200 sm:w-3/4 lg:w-1/2">
            Are you looking for a web developer? Then you&apos;re in the right
            place. Get the fastest and most reliable solutions you&apos;re
            looking for. Just{" "}
            <span className="text-[#92ed37] font-semibold">reach out</span> and
            let me know!
          </p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center space-y-4 text-2xl lg:text-3xl font-semibold mb-8">
          <div className="flex items-center space-x-3">
            <FaEnvelope className="text-[#92ed37]" />
            <span>iknowaditya22@gmail.com</span>
          </div>
          <div className="flex items-center space-x-3">
            <FaPhoneAlt className="text-[#92ed37]" />
            <span>+91 - 7248488481</span>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-6 mt-8">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-[#92ed37]"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-[#92ed37]"
          >
            <FaGithub />
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-sm text-gray-500 mt-12">
        &copy; {new Date().getFullYear()} Hanu Singh. All rights reserved.
      </div>
    </footer>
  );
};

export default Contact;
