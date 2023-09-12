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
    <div ref={ref} className="relative slant bg-white h-screen">
      <motion.div
        initial={{ y: -300, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{ y: match ? newY : mobileY }}
        className="flex flex-col absolute left-[15%] top-[10%] md:top-1/4"
      >
        <h1 className="text-4xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-700">
          Hi, my name&apos;s Darren.
        </h1>
        <h1 className="text-4xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-700">
          Welcome to my showcase.
        </h1>
        <div className="flex flex-col items-start pt-10 justify-between md:pt-7 md:flex-row md:w-4/5">
          <button className="heroButton">About</button>
          <button className="heroButton">Projects</button>
          <button className="heroButton">Skills</button>
          <button className="heroButton">Contact</button>
        </div>
      </motion.div>
    </div>
  );
}
