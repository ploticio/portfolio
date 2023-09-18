"use client";

import { Button, Icon, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

export default function ColorSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button position="fixed" bottom="4px" right="4px" borderRadius="9999px" onClick={toggleColorMode}>
      <Icon as={colorMode === "light" ? MoonIcon : SunIcon} />
    </Button>
  );
}
