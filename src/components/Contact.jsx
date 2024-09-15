import React from "react";
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa"; // Importing icons

const Contact = () => {
  return (
    <footer
      className="text-white py-8 sm:py-12 lg:py-16 px-4 sm:px-8 lg:px-16"
      id="contact"
    >
      <div className="flex flex-col items-center justify-center">
        {/* Title Section */}
        <div className="text-center py-4 sm:py-8 lg:py-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-sans bg-gradient-to-t from-neutral-900 to-neutral-300 bg-clip-text text-transparent">
            CONNECT WITH ME
          </h1>
        </div>

        {/* Description */}
        <div className="flex items-center justify-center mb-6 sm:mb-8 lg:mb-12 text-base sm:text-lg lg:text-xl">
          <p className="text-center text-neutral-200 sm:w-3/4 lg:w-1/2">
            Looking for a web developer? You’ve come to the right place. I offer
            fast and reliable solutions tailored to your needs. Just{" "}
            <span className="text-[#92ed37] font-semibold">get in touch</span>{" "}
            and let’s get started!
          </p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center space-y-3 sm:space-y-4 lg:space-y-6 text-lg sm:text-xl lg:text-2xl font-semibold mb-6 sm:mb-8 lg:mb-12">
          <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4">
            <FaEnvelope className="text-[#92ed37] text-lg sm:text-xl lg:text-2xl" />
            <span>iknowaditya22@gmail.com</span>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4">
            <FaPhoneAlt className="text-[#92ed37] text-lg sm:text-xl lg:text-2xl" />
            <span>+91 - 7248488481</span>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 sm:space-x-6 lg:space-x-8 mt-6 sm:mt-8 lg:mt-12">
          <a
            href="https://www.linkedin.com/in/hanu-singh-50710a1a3/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl sm:text-2xl lg:text-3xl hover:text-[#92ed37]"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/iknowaditya"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl sm:text-2xl lg:text-3xl hover:text-[#92ed37]"
          >
            <FaGithub />
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-xs sm:text-sm lg:text-base text-gray-500 mt-8 sm:mt-12 lg:mt-16">
        &copy; {new Date().getFullYear()} Hanu Singh. All rights reserved.
      </div>
    </footer>
  );
};

export default Contact;
