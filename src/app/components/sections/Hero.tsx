"use client";
import useMediaQuery from "@/hooks/useMediaQuery";
import { Box, Flex, Text, chakra, shouldForwardProp, useColorModeValue } from "@chakra-ui/react";
import { isValidMotionProp, motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const MotionBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const newY = useTransform(scrollYProgress, [0, 1], ["0%", "675%"]);
  const mobileY = useTransform(scrollYProgress, [0, 1], ["0%", "300%"]);
  const match = useMediaQuery();
  const themeColor = useColorModeValue("emerald.700", "darkEmerald");

  return (
    <>
      <Box ref={ref} pos="relative" minH="130vh" className="cutoff">
        <MotionBox
          initial={{ y: -300, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          // @ts-ignore
          transition={{ duration: 1 }}
          style={{ y: match ? newY : mobileY }}
          display="flex"
          flexDirection="column"
          position="absolute"
          left="15vw"
          top={{ base: "10vh", md: "25vh" }}
        >
          <Text
            fontSize={{ base: "4xl", md: "7xl" }}
            fontWeight="extrabold"
            bgClip="text"
            bgGradient={`linear(to-r, emerald.500, ${themeColor})`}
          >
            Hi, my name&apos;s Darren.
          </Text>
          <Text
            fontSize={{ base: "4xl", md: "7xl" }}
            fontWeight="extrabold"
            bgClip="text"
            bgGradient={`linear(to-r, emerald.500, ${themeColor})`}
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
              <Text color="green.500">About</Text>
            </a>
            <a href="#projects" className="heroButton">
              <Text color="green.500">Projects</Text>
            </a>
            <a href="#contact" className="heroButton">
              <Text color="green.500">Contact</Text>
            </a>
          </Flex>
        </MotionBox>
      </Box>
      <MotionBox
        initial={{ y: 700, rotate: -9 }}
        animate={{ y: 0 }}
        // @ts-ignore
        transition={{ duration: 1 }}
        pos="absolute"
        backgroundColor={themeColor}
        h="50vh"
        w="150vw"
        top="65vh"
        left="-33%"
      />
    </>
  );
}
