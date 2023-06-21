"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { SmallTextMotion, TitleTextMotion } from "./CustomTexts";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../../../utils/variants";
import LoadingSkillSkeleton from "./skeleton/LoadingSkillSkeleton";

const Skills = () => {
  const [loading, setLoading] = useState(false);
  const [skillsData, setSkillsData] = useState([]);

  console.log(loading);
  console.log(skillsData);

  useEffect(() => {
    const getSkills = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/skills");
        const data = await res.json();
        console.log(data.skills);
        setSkillsData(data.skills);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };

    getSkills();
  }, []);

  return (
    <section
      id="skills"
      className="max-w-[860px] mx-auto min-h-screen flex flex-col items-center justify-center p-4 mt-14 relative"
    >
      <div className="gradient-03 z-0" />

      <SmallTextMotion text="| What skills I have" />
      <TitleTextMotion text=" Skills" />

      <motion.div
        className="flex flex-wrap items-center gap-6 justify-center md:mt-20 mt-14 "
        variants={fadeIn("", "tween", 0.2, 1)}
        initial="hidden"
        whileInView="visible"
      >
        {loading
          ? [...Array(12).keys()].map((i) => <LoadingSkillSkeleton key={i} />)
          : skillsData?.map((skill, index) => (
              <Tilt
                options={{
                  max: 45,
                  scale: 1,
                  speed: 450,
                }}
                key={index}
                className="glass-blur flex flex-col gap-3 p-4 sm:w-[150px] sm:h-[150px] w-[120px] h-[120px] items-center justify-center rounded-2xl"
              >
                <Image
                  src={skill.img}
                  alt={skill.name}
                  width={55}
                  height={55}
                  className="h-[55px]"
                />
                <span className="font-medium text-lg">{skill.name}</span>
              </Tilt>
            ))}
      </motion.div>
    </section>
  );
};

export default Skills;
