"use client";
import React, { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";

//internal imports
import { SmallTextMotion, TitleTextMotion } from "./CustomTexts";
import { fadeIn } from "../../../utils/variants";
import LoadingProjectSkeleton from "./skeleton/LoadingProjectSkeleton";

const ProjectCard = ({ project }) => (
  <div className="group rounded-2xl overflow-hidden min-h-[330px] max-w-[530px] relative cursor-pointer">
    <Image
      src={project.img}
      alt={project.name}
      width={600}
      height={600}
      className="w-full h-full rounded-2xl"
    />

    <div className="absolute w-full h-full flex flex-col text-secondary-text sm:text-[260px] top-[270px] group-hover:top-0 transition-[top] ease-in duration-500 bg-black/[0.85] py-5 px-3">
      <h4 className="sm:text-xl text-[17px] self-center text-primary-text sm:mb-5 mb-4">
        {project.name}
      </h4>

      <div className="flex flex-col justify-between h-full">
        <p className="text-secondary-text sm:mb-5 mb-4 sm:text-base text-[15px]">
          {project.description}
        </p>

        <div className="flex flex-col gap-2 sm:text-base text-[14px]">
          {project.live && (
            <span>
              Visit{" "}
              <a href={project.live} target="_blank" className="text-blue-500">
                live website
              </a>
            </span>
          )}

          <div className="flex gap-2">
            <span className="flex gap-1 items-center">
              Github <FaGithub /> <strong>:</strong>
            </span>
            {project.github.contract && (
              <a
                href={project.github.contract}
                target="_blank"
                className="text-blue-500"
              >
                Contract
              </a>
            )}
            {project.github.frontend && (
              <a
                href={project.github.frontend}
                target="_blank"
                className="text-blue-500"
              >
                Frontend
              </a>
            )}
          </div>

          <div className="flex gap-2 sm:text-[14px] text-[13px]">
            {project.techs.map((tech, techIndex) => (
              <span key={techIndex} style={{ color: tech.color }}>
                #{tech.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Projects = () => {
  const [loading, setLoading] = useState(false);
  const [projectsData, setProjectsData] = useState([]);

  console.log(loading);
  console.log(projectsData);

  useEffect(() => {
    const getProjects = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/projects");
        const data = await res.json();
        console.log(data.projects);
        setProjectsData(data.projects);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };

    getProjects();
  }, []);

  return (
    <section
      id="projects"
      className="relative max-w-[1100px] mx-auto min-h-screen flex flex-col items-center justify-center p-4 mt-16 z-10"
    >
      <div className="gradient-04 z-0" />

      <SmallTextMotion text="| Recent project" />
      <TitleTextMotion text="Projects" />

      <motion.div
        className="grid md:grid-cols-2 grid-cols-1 gap-7 justify-items-center w-full md:mt-20 mt-14"
        variants={fadeIn("", "tween", 0.2, 1)}
        initial="hidden"
        whileInView="visible"
      >
        {loading
          ? [...Array(6).keys()].map((i) => <LoadingProjectSkeleton key={i} />)
          : projectsData?.map((project, index) => (
              <ProjectCard project={project} key={index} />
            ))}
      </motion.div>
    </section>
  );
};

export default Projects;
