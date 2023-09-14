import { Wrap, WrapItem } from "@chakra-ui/react";
import SkillIcon from "../SkillIcon";

export default function Skills() {
  return (
    <Wrap spacing={12} justify="center" my="7">
      <WrapItem>
        <SkillIcon image="/devicons/tailwind.svg" label="Tailwind CSS" />
      </WrapItem>
      <WrapItem>
        <SkillIcon image="/devicons/typescript.svg" label="TypeScript" />
      </WrapItem>
      <WrapItem>
        <SkillIcon image="/devicons/react.svg" label="React" />
      </WrapItem>
      <WrapItem>
        <SkillIcon image="/devicons/chakra.svg" label="Chakra UI" />
      </WrapItem>
      <WrapItem>
        <SkillIcon image="/devicons/nextjs.svg" label="NextJS" />
      </WrapItem>
      <WrapItem>
        <SkillIcon image="/devicons/firebase.svg" label="Firebase" />
      </WrapItem>
      <WrapItem>
        <SkillIcon image="/devicons/csharp.svg" label="C#" />
      </WrapItem>
      <WrapItem>
        <SkillIcon image="/devicons/unity.svg" label="Unity Engine" />
      </WrapItem>
      <WrapItem>
        <SkillIcon image="/devicons/python.svg" label="Python" />
      </WrapItem>
    </Wrap>
  );
}
