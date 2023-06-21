"use client";

import React, { useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";
import { BiUser, BiHome } from "react-icons/bi";
import { IoIosApps } from "react-icons/io";
import { AiOutlineMessage } from "react-icons/ai";

const Navbar = () => {
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    const getOffset = (element) => {
      const rect = element.getBoundingClientRect();
      const scrollTop = window.scrollY;
      return rect?.top + scrollTop;
    };

    const handleScroll = () => {
      const heightToHideFrom = getOffset(document.getElementById("contact"));
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;

      if (winScroll > heightToHideFrom) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    showNav && (
      <nav
        className={`fixed bottom-6 left-[50%] -translate-x-1/2 px-8 py-5 items-center justify-center bg-[#5555554d] backdrop-blur-xl z-20 rounded-full w-[280px]`}
      >
        <ul className="list-none w-full flex justify-between items-center gap-3 text-slate-200 text-[15px]">
          <li>
            <a
              href="#home"
              data-tooltip-id="home-tooltip"
              data-tooltip-content="Home"
              data-tooltip-place="top"
            >
              <BiHome fontSize={22} />
            </a>
          </li>
          <li>
            <a
              href="#about"
              data-tooltip-id="about-tooltip"
              data-tooltip-content="About me"
              data-tooltip-place="top"
            >
              <BiUser fontSize={22} />
            </a>
          </li>
          <li>
            <a
              href="#projects"
              data-tooltip-id="projects-tooltip"
              data-tooltip-content="Projects"
              data-tooltip-place="top"
            >
              <IoIosApps fontSize={22} />
            </a>
          </li>
          <li>
            <a
              href="#contact"
              data-tooltip-id="contact-tooltip"
              data-tooltip-content="Contact me"
              data-tooltip-place="top"
            >
              <AiOutlineMessage fontSize={22} />
            </a>
          </li>
        </ul>

        <Tooltip id="home-tooltip" />
        <Tooltip id="about-tooltip" />
        <Tooltip id="projects-tooltip" />
        <Tooltip id="contact-tooltip" />
      </nav>
    )
  );
};

export default Navbar;
