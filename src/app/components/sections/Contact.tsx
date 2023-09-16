"use client";

import { Link } from "@chakra-ui/next-js";
import {
  Button,
  Flex,
  Icon,
  Popover,
  PopoverArrow,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { EnvelopeClosedIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import FormContact from "../FormContact";

export default function Contact() {
  const themeColor = useColorModeValue("emerald.700", "darkEmerald");
  const { onOpen, onClose, isOpen } = useDisclosure();
  return (
    <Flex direction="column" align="center" minH="60vh" gap={4}>
      <Text fontSize={{ base: "4xl", md: "5xl" }} color={themeColor} textTransform="uppercase" letterSpacing="widest">
        [ Get in touch ]
      </Text>
      <Stack direction={{ base: "column", md: "row" }} spacing="4">
        <Link href="https://github.com/ploticio" rel="noopener noreferrer" target="_blank">
          <Button width={75} height={75} variant="ghost" colorScheme="green" border="1px" borderRadius="100%">
            <Icon as={GitHubLogoIcon} h={50} w={50} />
          </Button>
        </Link>
        <Popover isOpen={isOpen} onOpen={onOpen} onClose={onClose} closeOnBlur={false}>
          <PopoverTrigger>
            <Button width={75} height={75} variant="ghost" colorScheme="green" border="1px" borderRadius="100%">
              <Icon as={EnvelopeClosedIcon} h={50} w={50} />
            </Button>
          </PopoverTrigger>
          <PopoverContent p={5} w={{ md: 500 }}>
            <PopoverArrow />
            <PopoverCloseButton />
            <FormContact onCancel={onClose} />
          </PopoverContent>
        </Popover>
      </Stack>
    </Flex>
  );
}
