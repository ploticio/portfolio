"use client";

import Image from "next/image";
import {
  Card,
  CardBody,
  Container,
  Flex,
  HStack,
  Stack,
  StackDivider,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Skills from "./Skills";
import FrogIcon from "../FrogIcon";

export default function About() {
  const textColor = useColorModeValue("emerald.700", "white");
  const nameColor = useColorModeValue("emerald.700", "darkEmerald");

  return (
    <Flex direction="column" justify="center" align="center" pos="relative" minH="50vh">
      <Card boxShadow="xl">
        <CardBody>
          <Stack direction={{ base: "column", md: "row" }} divider={<StackDivider />} spacing="4">
            <Container
              maxW="container.lg"
              display="flex"
              flexDir="column"
              justifyContent="center"
              alignItems="center"
              gap={4}
            >
              <Image
                src="/treefrog.png"
                alt="frog"
                width={150}
                height={150}
                style={{ border: "1px", borderStyle: "solid", borderRadius: "100%", borderColor: "#15803d" }}
              />
              <HStack pt="2" spacing={1}>
                <Text fontSize="lg">Hi, my name&apos;s</Text>
                <Text fontSize="lg" color={nameColor}>
                  Darren.
                </Text>
                <Text fontSize="lg">Welcome to my showcase.</Text>
              </HStack>

              <Text fontSize="lg">
                I&apos;m a software developer based in the Bay Area with a passion for making things. Here you&apos;ll
                find some of the projects that I&apos;ve been working on. Outside of work, some things I enjoy are
                cooking, teaching, video games, and history (big history buff). Also a big fan of frogs 🐸. While
                you&apos;re here, check out some of the games I&apos;ve made; making video games is a creative outlet
                for me, and you can definetly come to expect more.
              </Text>
            </Container>
            <Container maxW="md">
              <Flex direction="column" justify="center" align="center">
                <Text textColor={textColor} fontSize="xl" textTransform="uppercase" letterSpacing="widest">
                  Skills
                </Text>
                <Skills />
              </Flex>
              <Flex justify="flex-end" mt="10">
                <FrogIcon />
              </Flex>
            </Container>
          </Stack>
        </CardBody>
      </Card>
    </Flex>
  );
}
