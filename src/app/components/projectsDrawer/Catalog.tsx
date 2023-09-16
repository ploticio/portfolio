"use client";

import { Stack, Text, Wrap, WrapItem, useColorModeValue } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";
import { projectData } from "@/app/data/projectData";

export default function Catalog() {
  const themeColor = useColorModeValue("emerald.700", "darkEmerald");
  return (
    <Stack align="center" minH="100vh">
      <Text fontSize={{ base: "4xl", md: "7xl" }} color={themeColor} textTransform="uppercase" letterSpacing="widest">
        Projects
      </Text>

      <Wrap ml={{ md: 28 }} spacing={8} align="center">
        {projectData.map((project, index) => (
          <WrapItem key={index}>
            <ProjectCard
              title={project.title}
              description={project.description}
              skills={project.skills}
              platform={project.platform}
              status={project.status}
              image={project.image}
              width={project.width}
              live={project.live}
              source={project.source}
            />
          </WrapItem>
        ))}
      </Wrap>
    </Stack>
  );
}
