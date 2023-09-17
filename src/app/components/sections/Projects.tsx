"use client";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import ProjectCard from "../ProjectCard";
import BackButton from "../projectsDrawer/BackButton";
import Catalog from "../projectsDrawer/Catalog";
import { projectData } from "@/app/data/projectData";

export default function Projects() {
  const themeColor = useColorModeValue("emerald.700", "darkEmerald");
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex direction="column" justify="center" align="center" minH="100vh" gap={4}>
      <Text fontSize={{ base: "4xl", md: "7xl" }} color={themeColor} textTransform="uppercase" letterSpacing="widest">
        FEATURED
      </Text>
      <Flex direction="column" justify="center" align="center" gap={10}>
        {projectData.slice(0, 4).map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            skills={project.skills}
            platform={project.platform}
            status={project.status}
            image={project.image}
            width={project.width}
            placeholder={project.placeholder}
            live={project.live}
            source={project.source}
          />
        ))}
        <Button variant="outline" colorScheme="green" onClick={onOpen}>
          <Text fontSize="xl">See More...</Text>
        </Button>
        <Drawer onClose={onClose} isOpen={isOpen} size="full" placement="bottom">
          <DrawerOverlay />
          <DrawerContent>
            <DrawerBody>
              <Catalog />
              <BackButton close={onClose} />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Flex>
  );
}
