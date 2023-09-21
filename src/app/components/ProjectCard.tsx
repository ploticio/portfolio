"use client";
import { Link } from "@chakra-ui/next-js";
import {
  Badge,
  Button,
  Card,
  CardBody,
  Container,
  Flex,
  HStack,
  Icon,
  Stack,
  StackDivider,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { DesktopIcon, ExternalLinkIcon, GitHubLogoIcon, MobileIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import React from "react";
import { Project } from "../data/projectData";

const ProjectCard: React.FC<Project> = ({
  title,
  description,
  skills,
  status,
  platform,
  image,
  width,
  live,
  source,
}) => {
  const textColor = useColorModeValue("emerald.600", "darkEmerald");
  return (
    <Card border="1px" borderColor="blackAlpha.100" boxShadow="xl">
      <CardBody>
        <Stack direction={{ base: "column", md: "row" }} divider={<StackDivider />} spacing="4">
          {image ? (
            <Container maxW="container.sm" display="flex" justifyContent="center" alignItems="center">
              {width ? (
                <Image src={image} alt={`${title} project image`} width={width} height={width} />
              ) : (
                <Image src={image} alt={`${title} project image`} width={400} height={400} />
              )}
            </Container>
          ) : (
            <Container maxW="container.sm" display="flex" justifyContent="center" alignItems="center" />
          )}
          <Container
            maxW="container.xl"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            alignItems="center"
            gap={2}
          >
            <Flex direction="column" align="center" gap={2}>
              <HStack>
                <Text fontSize="xl" textTransform="uppercase" letterSpacing="widest">
                  {title}
                </Text>
                {platform === "desktop" ? <Icon as={DesktopIcon} /> : null}
                {platform === "mobile" ? <Icon as={MobileIcon} /> : null}
              </HStack>
              <HStack divider={<StackDivider />}>
                {skills.map((skill, index) => (
                  <Text color={textColor} key={index}>
                    {skill}
                  </Text>
                ))}
              </HStack>
              {status === "ongoing" ? (
                <Badge mt={1} variant="subtle" colorScheme="green">
                  Ongoing
                </Badge>
              ) : null}
              {status === "planned" ? (
                <Badge mt={1} variant="outline" colorScheme="green">
                  Planned
                </Badge>
              ) : null}
            </Flex>
            <Text textAlign="center" fontSize="lg">
              {description}
            </Text>
            <HStack mt="3" width={200}>
              {live && (
                <Link href={live} rel="noopener noreferrer" target="_blank" width="100%">
                  <Button colorScheme="green" variant="solid" width="100%">
                    <HStack>
                      <Text letterSpacing="widest">Link</Text>
                      <Icon as={ExternalLinkIcon} />
                    </HStack>
                  </Button>
                </Link>
              )}
              {source && (
                <Link href={source} rel="noopener noreferrer" target="_blank" width="100%">
                  <Button colorScheme="green" variant="ghost" width="100%">
                    <HStack>
                      <Text letterSpacing="wide">Source</Text>
                      <Icon as={GitHubLogoIcon} />
                    </HStack>
                  </Button>
                </Link>
              )}
            </HStack>
          </Container>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default ProjectCard;
