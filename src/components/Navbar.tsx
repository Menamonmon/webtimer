import { HStack } from "@chakra-ui/react";
import React from "react";
import GoBackButton from "./GoBackButton";

const Navbar = () => {
  return (
    <HStack>
      <GoBackButton />
    </HStack>
  );
};

export default Navbar;
