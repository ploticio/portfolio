"use client";
import useMediaQuery from "@/hooks/useMediaQuery";
import { Flex, Text } from "@chakra-ui/react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const newY = useTransform(scrollYProgress, [0, 1], ["0%", "675%"]);
  const mobileY = useTransform(scrollYProgress, [0, 1], ["0%", "300%"]);
  const match = useMediaQuery();

  return (
    <>
      <div ref={ref} className="relative cutoff min-h-[130vh]">
        <motion.div
          initial={{ y: -300, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ y: match ? newY : mobileY }}
          className="flex flex-col absolute left-[15vw] top-[10%] md:top-[25vh]"
        >
          <Text
            fontSize={{ base: "4xl", md: "7xl" }}
            fontWeight="extrabold"
            bgClip="text"
            bgGradient="linear(to-r, emerald.500, emerald.700)"
          >
            Hi, my name&apos;s Darren.
          </Text>
          <Text
            fontSize={{ base: "4xl", md: "7xl" }}
            fontWeight="extrabold"
            bgClip="text"
            bgGradient="linear(to-r, emerald.500, emerald.700)"
            lineHeight="120%"
          >
            Welcome to my showcase.
          </Text>
          <Flex
            direction={{ base: "column", md: "row" }}
            gap="10"
            align="flex-start"
            justify="space-between"
            width="80%"
            mt="7"
          >
            <a href="#about" className="heroButton">
              About
            </a>
            <a href="#projects" className="heroButton">
              Projects
            </a>
            <a href="#contact" className="heroButton">
              Contact
            </a>
          </Flex>
        </motion.div>
      </div>
      <motion.div
        initial={{ y: 700, rotate: -9 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
        className="absolute bg-emerald-700 h-[50vh] w-[150vw] top-[70vh] -left-1/3"
      />
    </>
  );
}
