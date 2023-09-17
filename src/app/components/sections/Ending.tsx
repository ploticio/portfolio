"use client";
import useMediaQuery from "@/hooks/useMediaQuery";
import { Link } from "@chakra-ui/next-js";
import { Box, HStack, Icon, Text, chakra, shouldForwardProp, useColorModeValue } from "@chakra-ui/react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { isValidMotionProp, motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const MotionBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

export default function Ending() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  const newY = useTransform(scrollYProgress, [0, 1], ["0%", "1000%"]);
  const match = useMediaQuery();
  const themeColor = useColorModeValue("emerald.700", "darkEmerald");

  return (
    <>
      <Box
        pos="absolute"
        backgroundColor={themeColor}
        h="50vh"
        w="150vw"
        bottom="70vh"
        left="-33%"
        transform="rotate(9deg)"
      />
      <Box ref={ref} pos="relative" minH="100vh">
        <MotionBox
          style={{ y: match ? newY : 0 }}
          display="flex"
          flexDirection="column"
          position="absolute"
          left={{ base: "10vw", md: "15vw" }}
          zIndex="-10"
        >
          <Text
            fontSize={{ base: "4xl", md: "7xl" }}
            fontWeight="extrabold"
            bgClip="text"
            bgGradient={`linear(to-r, emerald.500, ${themeColor})`}
          >
            Thanks for stopping by.
          </Text>
        </MotionBox>
      </Box>

      <Link width="fit-content" href="https://github.com/ploticio/portfolio" rel="noopener noreferrer" target="_blank">
        <HStack ml="1" mb="1">
          <Text fontSize={{ base: "xs", md: "md" }}>View source on GitHub</Text>
          <Icon as={GitHubLogoIcon} />
        </HStack>
      </Link>
    </>
  );
}
