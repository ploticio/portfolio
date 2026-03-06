import { Box, HStack, Icon, Link, Text, useColorModeValue } from "@chakra-ui/react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export default function Footer() {
  const themeColor = useColorModeValue("emerald.700", "darkEmerald");
  return (
    <Box backgroundColor={themeColor} h="2vh" display="flex" alignItems="center">
      <Link href="https://github.com/ploticio/portfolio" rel="noopener noreferrer" target="_blank" color="white" ml="1">
        <HStack>
          <Text fontSize={{ base: "xs", md: "md" }}>View source on GitHub</Text>
          <Icon as={GitHubLogoIcon} />
        </HStack>
      </Link>
    </Box>
  );
}
