import { Tooltip } from "@chakra-ui/react";
import Image from "next/image";

type Props = {
  image: string;
  label: string;
};
export default function SkillIcon({ image, label }: Props) {
  return (
    <Tooltip hasArrow label={label}>
      <Image src={image} alt={label} width={50} height={50} />
    </Tooltip>
  );
}
