"use client";
import useMediaQuery from "@/hooks/useMediaQuery";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const newY = useTransform(scrollYProgress, [0, 1], ["0%", "675%"]);
  const mobileY = useTransform(scrollYProgress, [0, 1], ["0%", "250%"]);
  const match = useMediaQuery("768px");

  return (
    <>
      <div ref={ref} className="relative cutoff bg-white h-screen">
        <motion.div
          initial={{ y: -300, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ y: match ? newY : mobileY }}
          className="flex flex-col absolute left-[15%] top-[10%] md:top-1/4"
        >
          <h1 className="text-4xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-700">
            Hi, my name&apos;s Darren.
          </h1>
          <h1 className="text-4xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-700 pb-2">
            Welcome to my showcase.
          </h1>
          <div className="flex flex-col items-start space-y-10 justify-between mt-7 md:flex-row  md:space-y-0 md:w-4/5">
            <a href="#about" className="heroButton">
              About
            </a>
            <a className="heroButton">Projects</a>
            <a className="heroButton">Contact</a>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ y: 600, rotate: -9 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
        className="absolute bg-emerald-700 h-1/4 w-[150%] top-1/3 -left-1/3"
      />
    </>
  );
}
