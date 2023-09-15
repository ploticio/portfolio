"use client";
import {
  Box,
  Button,
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
import Image from "next/image";
import React from "react";

type Props = {
  title: string;
  image?: string;
  skills: string[];
  live?: string;
  source?: string;
  children: React.ReactNode;
};

const ProjectCard: React.FC<Props> = ({ title, image, skills, live, source, children }) => {
  const textColor = useColorModeValue("emerald.700", "white");
  return (
    <Card boxShadow="xl">
      <CardBody>
        <Stack direction={{ base: "column", md: "row" }} divider={<StackDivider />} spacing="4">
          <Container maxW="container.sm" display="flex" justifyContent="center" alignItems="center">
            {image ? (
              <Image src={image} alt={`${title} project image`} width={250} height={250} />
            ) : (
              <Text>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis cum recusandae error magnam fugit totam
                aperiam nulla dicta earum ipsa molestiae voluptas tempore odit, laborum debitis distinctio explicabo
                nesciunt voluptatem.
              </Text>
            )}
          </Container>
          <Container maxW="container.xl">
            <Flex direction="column" justify="center" align="center" gap={2}>
              <Text fontSize="xl" textTransform="uppercase" letterSpacing="widest">
                {title}
              </Text>
              <HStack divider={<StackDivider />}>
                {skills.map((skill, index) => (
                  <Text color={textColor} key={index}>
                    {skill}
                  </Text>
                ))}
              </HStack>
              <Text>{children}</Text>
              <HStack>
                <Button colorScheme="red">Live</Button>
                {source && <Button>Source Code</Button>}
              </HStack>
            </Flex>
          </Container>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default ProjectCard;
