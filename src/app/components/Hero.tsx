"use client";
import useMediaQuery from "@/hooks/useMediaQuery";
import { Flex, Text } from "@chakra-ui/react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const newY = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const mobileY = useTransform(scrollYProgress, [0, 1], ["0%", "250%"]);
  const match = useMediaQuery();

  return (
    <>
      <div ref={ref} className="relative cutoff h-screen">
        <motion.div
          initial={{ y: -300, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ y: match ? newY : mobileY }}
          className="flex flex-col absolute left-[15%] top-[10%] md:top-1/4"
        >
          <Text
            fontSize={{ base: "4xl", md: "7xl" }}
            fontWeight="extrabold"
            bgClip="text"
            bgGradient="linear(to-r, #22c55e, #15803d)"
          >
            Hi, my name&apos;s Darren.
          </Text>
          <Text
            fontSize={{ base: "4xl", md: "7xl" }}
            fontWeight="extrabold"
            bgClip="text"
            bgGradient="linear(to-r, #22c55e, #15803d)"
          >
            Welcome to my showcase.
          </Text>
          <Flex direction={{ base: "column", md: "row" }} align="flex-start" justify="space-between" width="80%" mt="7">
            <a href="#about" className="heroButton">
              About
            </a>
            <a className="heroButton">Projects</a>
            <a className="heroButton">Contact</a>
          </Flex>
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
