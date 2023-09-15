"use client";
import { Link } from "@chakra-ui/next-js";
import {
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

type Props = {
  title: string;
  skills: string[];
  platform?: "desktop" | "mobile" | "both";
  image?: { src: string; width: number; height: number };
  placeholder?: boolean;
  live?: string;
  source?: string;
  children: React.ReactNode;
};

const ProjectCard: React.FC<Props> = ({ title, skills, platform, image, placeholder, live, source, children }) => {
  const textColor = useColorModeValue("emerald.700", "darkEmerald");
  return (
    <Card border="1px" borderColor="blackAlpha.100" boxShadow="xl">
      <CardBody>
        <Stack direction={{ base: "column", md: "row" }} divider={<StackDivider />} spacing="4">
          {image && (
            <Container maxW="container.sm" display="flex" justifyContent="center" alignItems="center">
              <Image src={image} alt={`${title} project image`} width={image.width} height={image.height} />
            </Container>
          )}
          {placeholder && (
            <Container maxW="container.sm" display="flex" justifyContent="center" alignItems="center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt laudantium quod placeat, tempora vel id
              animi, ipsa aliquid dolores fugiat ipsam consequatur, ab architecto accusantium recusandae? Quisquam
              asperiores cumque modi.
            </Container>
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
            </Flex>

            <Text>{children}</Text>

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
