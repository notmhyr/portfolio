"use client";

import React from "react";
import { motion } from "framer-motion";
import { textContainerVariant, textVariant } from "../../../utils/variants";

export const SmallTextMotion = ({ text, textStyles }) => {
  return (
    <motion.p
      className={`font-normal text-[14px] text-secondary-text ${textStyles}`}
      variants={textContainerVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      {Array.from(text).map((letter, index) => (
        <motion.span key={index} variants={textVariant}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.p>
  );
};

export const TitleTextMotion = ({ text, textStyles }) => {
  return (
    <motion.h2
      className={`mt-[8px] font-bold md:text-[64px] text-[40px] tracking-[3px] ${textStyles}`}
      variants={textVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      {text}
    </motion.h2>
  );
};
