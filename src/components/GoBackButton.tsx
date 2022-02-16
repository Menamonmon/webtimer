import { Button } from "@chakra-ui/react";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const GoBackButton = () => {
  return (
    <Button leftIcon={<FaArrowLeft />} colorScheme="gray">
      Go Back
    </Button>
  );
};

export default GoBackButton;
