"use client";

import React from "react";
import { Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

const Navbar = ({ className }) => {
  return (
    <>
      <div
        className={cn(
          "fixed top-10 inset-x-0 max-w-xl mx-auto z-50",
          className
        )}
      >
        <Menu className="font-openSans">
          <MenuItem item="Home">
            {/* Scroll to the top of the page */}
            <Link href="/home" scroll={true}>
              Home
            </Link>
          </MenuItem>
          <MenuItem item="About">
            {/* Scroll to the #about section within the same page */}
            <Link href="#about" scroll={false}>
              About
            </Link>
          </MenuItem>
          <MenuItem item="Skills">
            {/* Scroll to the #skills section within the same page */}
            <Link href="#skills" scroll={false}>
              Skills
            </Link>
          </MenuItem>
          <MenuItem item="Projects">
            {/* Scroll to the #projects section within the same page */}
            <Link href="#projects" scroll={false}>
              Projects
            </Link>
          </MenuItem>
          <MenuItem item="Experience">
            {/* Scroll to the #experience section within the same page */}
            <Link href="#experience" scroll={false}>
              Experience
            </Link>
          </MenuItem>
          <MenuItem item="Contact">
            {/* Scroll to the #contact section within the same page */}
            <Link href="#contact" scroll={false}>
              Contact
            </Link>
          </MenuItem>
        </Menu>
      </div>
    </>
  );
};

export default Navbar;
