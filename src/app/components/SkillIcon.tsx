import { Tooltip } from "@chakra-ui/react";

type Props = {
  image: string;
  label: string;
  width?: number;
  height?: number;
};
export default function SkillIcon({ image, label, width, height }: Props) {
  return (
    <Tooltip hasArrow label={label}>
      <img src={image} alt={label} width={width ?? 50} height={height ?? 50} />
    </Tooltip>
  );
}
