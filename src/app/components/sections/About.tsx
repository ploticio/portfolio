"use client";

import Image from "next/image";
import { Card, CardBody, Container, Flex, Stack, StackDivider, Text, useColorModeValue } from "@chakra-ui/react";
import Skills from "./Skills";
import FrogIcon from "../FrogIcon";

export default function About() {
  const textColor = useColorModeValue("emerald.700", "white");

  return (
    <Flex direction="column" justify="center" align="center" pos="relative" className="min-h-[50vh]">
      <Card boxShadow="xl">
        <CardBody>
          <Stack direction={{ base: "column", md: "row" }} divider={<StackDivider />} spacing="4">
            <Container
              maxW="container.lg"
              display="flex"
              flexDir="column"
              justifyContent="center"
              alignItems="center"
              gap={10}
            >
              <Image
                src="/treefrog.png"
                alt="frog"
                width={150}
                height={150}
                className="border-solid border rounded-full object-top border-emerald-700"
              />
              <Text pt="2" fontSize="lg">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi quo ratione vero veniam soluta, adipisci
                molestias quidem cum mollitia deleniti facilis dolor deserunt id iusto molestiae, numquam tempora culpa.
                Laudantium? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium quo minus beatae
                impedit. Possimus beatae error perspiciatis hic officiis, modi, praesentium excepturi eos iusto
                architecto dolorum distinctio ducimus. Delectus, quae.
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
