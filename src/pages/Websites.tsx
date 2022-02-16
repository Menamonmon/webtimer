import { Box, Button, Heading, HStack } from "@chakra-ui/react";
import React from "react";
import { FaPlus } from "react-icons/fa";
import WebsitesList from "../components/WebsitesList";

const Websites = () => {
  return (
    <Box p={5} bgColor="blue.100" textAlign="left" rounded="2xl">
      <Heading size="md" py={3}>
        Your Webtimers ⏱️
      </Heading>
      <WebsitesList />
      <HStack justifyContent="end" pt="5">
        <Button size="xs" colorScheme="green" leftIcon={<FaPlus />}>
          Add A Webtimer
        </Button>
      </HStack>
    </Box>
  );
};

export default Websites;
