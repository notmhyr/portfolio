"use client";
import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";
import { footerVariants } from "../../../utils/variants";

const Footer = () => {
  return (
    <div className=" hideScroll">
      <motion.footer
        variants={footerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        id="footer"
        className="relative max-w-[1350px] mx-auto flex flex-col gap-4 pb-[40px] mt-14"
      >
        <div className="footer-gradient" />

        <span className="text-[14px] text-secondary-text flex items-center gap-1 pl-3">
          <MdEmail /> mhyr2003.hn@gmail.com
        </span>
        <div className="mb-[42px] h-[2px] bg-white opacity-10" />

        <div className="flex flex-col sm:flex-row items-center sm:justify-between">
          <h2 className="logo">MAHYAR</h2>

          <span className="text-[15px] text-secondary-text text-center">
            Copyright © 2023 - 2024 Mahyar. All rights reserved.
          </span>

          <div className="flex gap-2 items-center">
            <a
              href="https://github.com/notmhyr"
              target="_blank"
              className="p-2 text-[24px] hover:scale-125 transition-all ease-in duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://twitter.com/mahyar__hn"
              target="_blank"
              className="p-2 text-[24px] hover:scale-125 transition-all ease-in duration-300"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/mahyar-hosseini"
              target="_blank"
              className="p-2 text-[24px] hover:scale-125 transition-all ease-in duration-300"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Footer;
