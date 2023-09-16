"use client";
import { Project } from "@/app/data/projectData";
import {
  Button,
  Card,
  CardBody,
  Divider,
  HStack,
  Icon,
  Stack,
  StackDivider,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { DesktopIcon, ExternalLinkIcon, GitHubLogoIcon, MobileIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ title, description, skills, platform, image, live, source }: Project) {
  const textColor = useColorModeValue("emerald.700", "darkEmerald");
  return (
    <Card maxW="lg" boxShadow="lg">
      <CardBody>
        <Stack align="center" gap={2}>
          {image && <Image src={image} alt={`${title} project image`} width={500} height={500} />}
          <Text fontSize="2xl" textTransform="uppercase" letterSpacing="widest">
            {title}
          </Text>
          <HStack divider={<StackDivider />}>
            {skills.map((skill, index) => (
              <Text color={textColor} key={index}>
                {skill}
              </Text>
            ))}
          </HStack>
          <Text>{description}</Text>
          <HStack mt="3">
            {live && (
              <Link href={live} rel="noopener noreferrer" target="_blank">
                <Button colorScheme="green" variant="solid" width="100%">
                  <HStack>
                    <Text letterSpacing="widest">Link</Text>
                    <Icon as={ExternalLinkIcon} />
                  </HStack>
                </Button>
              </Link>
            )}
            {source && (
              <Link href={source} rel="noopener noreferrer" target="_blank">
                <Button colorScheme="green" variant="ghost" width="100%">
                  <HStack>
                    <Text letterSpacing="wide">Source</Text>
                    <Icon as={GitHubLogoIcon} />
                  </HStack>
                </Button>
              </Link>
            )}
          </HStack>
          <Divider />
          <HStack>
            {platform === "desktop" ? <Icon as={DesktopIcon} /> : null}
            {platform === "mobile" ? <Icon as={MobileIcon} /> : null}
            {!platform ? (
              <>
                <Icon as={DesktopIcon} />
                <Icon as={MobileIcon} />
              </>
            ) : null}
          </HStack>
        </Stack>
      </CardBody>
    </Card>
  );
}
