"use client";
import { Flex, Text, useColorModeValue } from "@chakra-ui/react";
import ProjectCard from "../ProjectCard";

export default function Projects() {
  const themeColor = useColorModeValue("emerald.700", "darkEmerald");
  return (
    <Flex direction="column" justify="center" align="center" minH="100vh">
      <Text fontSize={{ base: "4xl", md: "7xl" }} color={themeColor} textTransform="uppercase" letterSpacing="widest">
        PROJECTS
      </Text>
      <Flex direction="column" justify="center" align="center" gap={10}>
        <ProjectCard
          title="Blackjack"
          skills={["TypeScript", "React", "Framer Motion"]}
          image={{ src: "/projectImages/blackjack.gif", width: 400, height: 225 }}
          live="/"
          source="https://github.com/ploticio/blackjack"
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa nemo expedita sapiente eius accusantium.
          Doloribus labore soluta assumenda accusamus quisquam. Recusandae, porro? Nam earum voluptates, quam officia
          nemo quisquam rem!
        </ProjectCard>
        <ProjectCard title="Blobboi" skills={["C#", "Unity Engine"]} platform="desktop" placeholder live="/">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quam ducimus. Quis eos reprehenderit similique
          id soluta earum temporibus iusto numquam assumenda. Accusantium quas quos quidem molestiae. Illo, soluta
          dolorum!
        </ProjectCard>
        <ProjectCard title="Unamed Discord Bot" skills={["TypeScript", "discord.js"]} placeholder live="/" source="/">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sunt accusamus quae magni, autem laboriosam
          quidem placeat laborum totam esse exercitationem fugiat inventore nulla eaque perferendis voluptas, dolore a
          sequi!
        </ProjectCard>
        <ProjectCard
          title="Unamed mobile app"
          platform="mobile"
          skills={["C#", "Unity Engine", "Firebase"]}
          placeholder
          live="/"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, assumenda dolorum? Ut laudantium
          doloribus nihil, veniam animi porro possimus at impedit placeat hic similique architecto excepturi voluptate
          facere molestiae explicabo!
        </ProjectCard>
        <ProjectCard title="This website" skills={["NextJS", "Chakra UI"]} source="/">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit facere dolore est nostrum consectetur error nam
          necessitatibus nemo esse velit non, omnis odio ab cupiditate, recusandae quas modi reiciendis deleniti.
        </ProjectCard>
        <Text>See More...</Text>
      </Flex>
    </Flex>
  );
}
