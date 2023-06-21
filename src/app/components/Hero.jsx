"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { textContainerVariant, textVariant } from "../../../utils/variants";
import Image from "next/image";

const subtitleCol1 = "I develope Web3 and frontend";
const subtitleCol2 = "web applications";
const words1 = subtitleCol1.split(" ");
const words2 = subtitleCol2.split(" ");

const imageVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,

    transition: {
      duration: 0.2,
    },
  },
};

const Hero = () => {
  return (
    <section className="max-w-[1050px] h-screen mx-auto flex flex-col sm:flex-row sm:justify-between items-center sm:-mt-10 mt-12 p-3 gap-8 ">
      <div className="flex gap-3 sm:self-center sm:-mt-16 self-start pl-4">
        <div className="bg-white opacity-20 w-1 sm:h-[180px] h-[150px]" />
        <div className="flex flex-col gap-1  ">
          <h2 className="lg:text-6xl sm:text-5xl text-4xl font-bold text-transparent relative reveal-text-animation p-3">
            Hi, I'm Mahyar
            <div className="absolute inset-0 w-0 h-full bg-secondary z-10 reveal-box-animation" />
          </h2>

          <motion.div
            className="pl-3 lg:text-3xl sm:text-2xl text-xl flex flex-col gap-2"
            variants={textContainerVariant}
            initial="hidden"
            animate="visible"
          >
            <div className="flex gap-2">
              {words1.map((word, index) => (
                <motion.span key={index} variants={textVariant}>
                  {word}
                </motion.span>
              ))}
            </div>

            <div className="flex gap-2">
              {words2.map((word, index) => (
                <motion.span key={index} variants={textVariant}>
                  {word}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="sm:-mt-16"
        variants={imageVariant}
        initial="hidden"
        animate="visible"
      >
        <Image src="/laptop.svg" alt="developer" width={520} height={700} />
      </motion.div>
    </section>
  );
};

export default Hero;
