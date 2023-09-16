"use client";

import {
  Button,
  FormControl,
  FormErrorMessage,
  HStack,
  Icon,
  Input,
  Popover,
  PopoverArrow,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Textarea,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";
import { FormEvent, useEffect, useState } from "react";

export default function FormContact() {
  const { onOpen, onClose, isOpen } = useDisclosure();
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [bodyInput, setBodyInput] = useState("");
  const [validEmail, setValidEmail] = useState(true);
  const [emailSending, setEmailSending] = useState(false);
  const toast = useToast();

  const handleCancel = () => {
    setNameInput("");
    setEmailInput("");
    setBodyInput("");
    onClose();
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validEmail) return;
    setEmailSending(true);
    const response = await fetch("https://formsubmit.co/ajax/darrentran001@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: { nameInput },
        message: `Email: ${emailInput}\n ${bodyInput}`,
      }),
    });
    setEmailSending(false);
    if (!response.ok) {
      toast({
        title: "Error!",
        description: "There was an error sending your email",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    } else {
      setNameInput("");
      setEmailInput("");
      setBodyInput("");
      onClose();
      toast({
        title: "Email sent!",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    if (!emailInput.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/) && emailInput.length > 0)
      setValidEmail(false);
    else setValidEmail(true);
  }, [emailInput]);

  return (
    <Popover isOpen={isOpen} onOpen={onOpen} onClose={onClose} closeOnBlur={false}>
      <PopoverTrigger>
        <Button width={75} height={75} variant="ghost" colorScheme="green" border="1px" borderRadius="100%">
          <Icon as={EnvelopeClosedIcon} h={50} w={50} />
        </Button>
      </PopoverTrigger>
      <PopoverContent p={5} w={{ md: 500 }}>
        <PopoverArrow />
        <PopoverCloseButton />
        <form onSubmit={handleSubmit}>
          <Stack spacing={4} p={2}>
            <Input
              id="name"
              placeholder="Name"
              isRequired
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
            />
            <FormControl isInvalid={!validEmail}>
              <Input
                id="email"
                type="email"
                placeholder="Email"
                isRequired
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
              />
              <FormErrorMessage>Please enter a valid email address.</FormErrorMessage>
            </FormControl>
            <Textarea id="emailbody" isRequired value={bodyInput} onChange={(e) => setBodyInput(e.target.value)} />
            <HStack justify="flex-end">
              <Button variant="outline" onClick={handleCancel}>
                Cancel
              </Button>
              <Button type="submit" colorScheme="green" isLoading={emailSending}>
                Submit
              </Button>
            </HStack>
          </Stack>
        </form>
      </PopoverContent>
    </Popover>
  );
}
