"use client";

import { Flex, Text, useColorModeValue } from "@chakra-ui/react";

export default function Contact() {
  const themeColor = useColorModeValue("emerald.700", "darkEmerald");
  return (
    <Flex direction="column" align="center" minH="75vh">
      <Text fontSize={{ base: "4xl", md: "5xl" }} color={themeColor} textTransform="uppercase" letterSpacing="widest">
        Get in touch
      </Text>
    </Flex>
  );
}
