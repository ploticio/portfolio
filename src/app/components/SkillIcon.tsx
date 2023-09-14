import { Tooltip } from "@chakra-ui/react";
import Image from "next/image";

type Props = {
  image: string;
  label: string;
  width?: number;
  height?: number;
};
export default function SkillIcon({ image, label, width, height }: Props) {
  return (
    <Tooltip hasArrow label={label}>
      {width && height ? (
        <Image src={image} alt={label} width={width} height={height} />
      ) : (
        <Image src={image} alt={label} width={50} height={50} />
      )}
    </Tooltip>
  );
}
