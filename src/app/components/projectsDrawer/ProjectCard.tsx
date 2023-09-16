"use client";
import { Project } from "@/app/data/projectData";
import {
  Badge,
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

export default function ProjectCard({
  title,
  description,
  skills,
  platform,
  status,
  image,
  width,
  live,
  source,
}: Project) {
  const textColor = useColorModeValue("emerald.700", "darkEmerald");
  return (
    <Card maxW="lg" boxShadow="lg" border="1px" borderColor="blackAlpha.100">
      <CardBody>
        <Stack align="center" gap={2}>
          {image && (
            <Image
              src={image}
              alt={`${title} project image`}
              width={width ? width : 500}
              height={width ? width : 500}
            />
          )}
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
          {status === "ongoing" ? (
            <Badge mt={2} variant="subtle" colorScheme="green">
              Ongoing
            </Badge>
          ) : null}
          {status === "planned" ? (
            <Badge mt={2} variant="outline" colorScheme="green">
              Planned
            </Badge>
          ) : null}
          <Text textAlign="center">{description}</Text>
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
