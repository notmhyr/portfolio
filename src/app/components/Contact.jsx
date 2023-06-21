"use client";

import React, { useState } from "react";
import EarthCanvas from "./canvas/Earth";
import { SmallTextMotion, TitleTextMotion } from "./CustomTexts";
import { RiSendPlaneFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "../../../utils/variants";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInputData({ ...inputData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);
    return new Promise(async (resolve, reject) => {
      try {
        console.log("sending an email");
        await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          {
            from_name: inputData.name,
            to_name: "mahyar hos",
            from_email: inputData.email,
            to_email: "mahiar.hosaini@gmail.com",
            message: `${inputData.message} sent by: ${inputData.email}`,
          },
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        );

        setInputData({
          name: "",
          email: "",
          message: "",
        });

        setLoading(false);

        resolve();
      } catch (error) {
        console.log(error);
        setLoading(false);
        reject(error);
      }
    });
  };

  return (
    <section
      id="contact"
      className="relative max-w-[1100px] mx-auto min-h-screen flex flex-col items-center justify-center p-4 mt-16 z-10"
    >
      <div className="gradient-05 z-0" />

      <SmallTextMotion text="| Get in touch" />
      <TitleTextMotion text="Contact" />

      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 mt-16">
        {/* left */}
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="visible"
          className="lg:w-[590px] lg:h-[590px] md:w-[450px] md:h-[450px] sm:w-[420px] sm:h-[420px] xs:w-[410px] xs:h-[410px] w-[320px] h-[320px]  flex-1"
        >
          <EarthCanvas />
        </motion.div>

        {/* right */}
        <motion.form
          variants={fadeIn("left", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="visible"
          onSubmit={(e) => {
            e.preventDefault();
            toast.promise(handleSubmit, {
              pending: "sending email...",
              success: "Thank you I will get back to you as soon as possible",
              error: "Something went wrong",
            });
          }}
          className="max-w-[490px] flex flex-col gap-6 px-5 py-7 rounded-2xl glass-blur flex-1 w-full"
        >
          <div className="flex flex-col gap-3">
            <label htmlFor="name" className="text-lg">
              Your name*
            </label>
            <input
              type="text"
              name="name"
              required
              autoComplete="off"
              value={inputData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="text-base outline-none p-4 rounded-xl bg-transparent border border-white/[0.15] border-solid"
            />
          </div>

          <div className="flex flex-col gap-3">
            <label htmlFor="email" className="text-lg">
              Your email*
            </label>
            <input
              type="text"
              name="email"
              required
              autoComplete="off"
              value={inputData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="text-base outline-none p-4 rounded-xl bg-transparent border border-white/[0.15] border-solid"
            />
          </div>

          <div className="flex flex-col gap-3">
            <label htmlFor="message" className="text-lg">
              Your message*
            </label>
            <textarea
              rows={5}
              name="message"
              required
              autoComplete="off"
              value={inputData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              className="text-base outline-none p-4 rounded-xl bg-transparent border border-white/[0.15] border-solid"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="flex justify-center items-center gap-1 border-none bg-secondary text-[17px] py-3 px-5 rounded-full w-[175px] self-center"
          >
            Send <RiSendPlaneFill />
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
