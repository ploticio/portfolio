"use client";

import { Link } from "@chakra-ui/next-js";
import { Box, HStack, Icon, Text, useColorModeValue } from "@chakra-ui/react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export default function Footer() {
  const themeColor = useColorModeValue("emerald.700", "darkEmerald");
  return (
    <Box>
      <Box width="fit-content">
        <Link href="https://github.com/ploticio/portfolio" rel="noopener noreferrer" target="_blank">
          <HStack ml="1">
            <Text fontSize={{ base: "xs", md: "md" }}>View source on GitHub</Text>
            <Icon as={GitHubLogoIcon} />
          </HStack>
        </Link>
      </Box>
      <Box backgroundColor={themeColor} h="2vh"></Box>
    </Box>
  );
}
