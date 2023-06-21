"use client";

import React from "react";
import { motion } from "framer-motion";
import { SmallTextMotion, TitleTextMotion } from "./CustomTexts";
import { AiOutlineExperiment } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import { fadeIn, slideIn } from "../../../utils/variants";
const About = () => {
  return (
    <section
      id="about"
      className="max-w-[850px] min-h-screen mx-auto flex flex-col items-center justify-center p-4 relative z-10"
    >
      <div className="gradient-02 z-0" />

      <SmallTextMotion text="| Get to know" />
      <TitleTextMotion text="About me" />

      <div className="flex flex-col md:flex-row sm:justify-between gap-7 md:mt-20 mt-14 w-full">
        <motion.div
          className="flex flex-col gap-5 md:w-[50%]"
          variants={fadeIn("right", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="flex gap-5">
            <div className="p-4 flex flex-col gap-2 items-center justify-center w-[110px] h-[110px] rounded-[24px] bg-[#323f5d]">
              <AiOutlineExperiment fontSize={24} />
              <span className="font-medium text-[16px]">Experience</span>
              <span className="text-secondary-text text-[13px]">2 + Years</span>
            </div>

            <div className="p-4 flex flex-col gap-2 items-center justify-center w-[110px] h-[110px] rounded-[24px] bg-[#323F5D]">
              <BiSupport fontSize={24} />
              <span className="font-medium text-[16px]">Support</span>
              <span className="text-secondary-text text-[13px]">
                Online 24/7
              </span>
            </div>
          </div>

          <div>
            <p className="text-[16px] leading-[26px] text-secondary-text">
              Hey there! I'm Mahyar, a passionate 19-year-old developer with a
              strong focus on the exciting world of Web3 and frontend
              development. What drives me in the Web3 space is the potential to
              create decentralized applications that disrupt traditional
              industries and empower individuals with more control over their
              data and online experiences. I love to bring new ideas to real
              life with using most modern and popular tools like Solidity,
              Hardhat, Next js and much more, as testing and security is so
              important in contracts I test and audit the contracts many times
              to make sure is ready for production. I'm always enthusiastic to
              learn and improve my knowledge.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="about-img md:w-[50%] self-center"
          variants={slideIn("right", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        />
      </div>
    </section>
  );
};

export default About;
