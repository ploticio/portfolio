import { Button, Icon } from "@chakra-ui/react";
import { ArrowDownIcon } from "@radix-ui/react-icons";

export default function BackButton({ close }: { close: () => void }) {
  return (
    <Button
      position="fixed"
      top="16px"
      left="16px"
      borderRadius="9999px"
      variant="solid"
      colorScheme="green"
      onClick={close}
    >
      <Icon as={ArrowDownIcon} />
    </Button>
  );
}
