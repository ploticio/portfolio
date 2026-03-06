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
      {width && height ? (
        <img src={image} alt={label} width={width} height={height} loading="lazy" />
      ) : (
        <img src={image} alt={label} width={50} height={50} loading="lazy" />
      )}
    </Tooltip>
  );
}
