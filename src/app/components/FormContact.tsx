"use client";

import { Button, FormControl, FormErrorMessage, HStack, Input, Stack, Textarea, useToast } from "@chakra-ui/react";
import { FormEvent, useEffect, useState } from "react";

export default function FormContact({ onCancel }: { onCancel: () => void }) {
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [bodyInput, setBodyInput] = useState("");
  const [validEmail, setValidEmail] = useState(true);
  const toast = useToast();

  const handleCancel = () => {
    setNameInput("");
    setEmailInput("");
    setBodyInput("");
    onCancel();
  };

  // TODO: implement sending email
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validEmail) {
      setNameInput("");
      setEmailInput("");
      setBodyInput("");
      onCancel();
      toast({
        title: "Email sent!",
        status: "success",
        duration: 1500,
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
          <Button type="submit" colorScheme="green">
            Submit
          </Button>
        </HStack>
      </Stack>
    </form>
  );
}
