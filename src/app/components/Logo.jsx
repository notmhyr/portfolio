import React from "react";
import { Mansalva } from "next/font/google";

const mansalva = Mansalva({ subsets: ["latin"], weight: "400" });

const Logo = () => {
  return (
    <header
      id="home"
      className={`max-w-[1300px] mx-auto relative flex justify-center items-center p-6 z-10`}
    >
      <h2 className="logo">MAHYAR</h2>
      <div className="absolute w-[50%] inset-0 gradient-01" />
    </header>
  );
};

export default Logo;
