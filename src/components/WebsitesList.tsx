import {
  Button,
  Heading,
  HStack,
  IconButton,
  List,
  ListItem,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { FaPen, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { WebsiteItem } from "../types";
import { stripUrl } from "../utils";

const websites: WebsiteItem[] = [
  {
    id: "1",
    websiteUrl: "https://www.youtube.com",
    dateAdded: new Date(),
    is_atomic: false,
    is_nuclear: true,
    minutesAllowed: 20,
    minutesUsed: 0,
    lastOpened: new Date(),
  },
  {
    id: "1",
    websiteUrl: "https://www.youtube.com",
    dateAdded: new Date(),
    is_atomic: false,
    is_nuclear: true,
    minutesAllowed: 20,
    minutesUsed: 0,
    lastOpened: new Date(),
  },
  {
    id: "1",
    websiteUrl: "https://www.youtube.com",
    dateAdded: new Date(),
    is_atomic: false,
    is_nuclear: true,
    minutesAllowed: 20,
    minutesUsed: 0,
    lastOpened: new Date(),
  },
  {
    id: "1",
    websiteUrl: "https://www.youtube.com",
    dateAdded: new Date(),
    is_atomic: false,
    is_nuclear: true,
    minutesAllowed: 20,
    minutesUsed: 0,
    lastOpened: new Date(),
  },
  {
    id: "1",
    websiteUrl: "https://www.youtube.com",
    dateAdded: new Date(),
    is_atomic: false,
    is_nuclear: true,
    minutesAllowed: 20,
    minutesUsed: 0,
    lastOpened: new Date(),
  },
  {
    id: "1",
    websiteUrl: "https://www.youtube.com",
    dateAdded: new Date(),
    is_atomic: false,
    is_nuclear: true,
    minutesAllowed: 20,
    minutesUsed: 0,
    lastOpened: new Date(),
  },
  {
    id: "1",
    websiteUrl: "https://www.youtube.com",
    dateAdded: new Date(),
    is_atomic: false,
    is_nuclear: true,
    minutesAllowed: 20,
    minutesUsed: 0,
    lastOpened: new Date(),
  },
  {
    id: "1",
    websiteUrl: "https://www.youtube.com",
    dateAdded: new Date(),
    is_atomic: false,
    is_nuclear: true,
    minutesAllowed: 20,
    minutesUsed: 0,
    lastOpened: new Date(),
  },
  {
    id: "1",
    websiteUrl: "https://www.youtube.com",
    dateAdded: new Date(),
    is_atomic: false,
    is_nuclear: true,
    minutesAllowed: 20,
    minutesUsed: 0,
    lastOpened: new Date(),
  },
  {
    id: "1",
    websiteUrl: "https://www.youtube.com",
    dateAdded: new Date(),
    is_atomic: false,
    is_nuclear: true,
    minutesAllowed: 20,
    minutesUsed: 0,
    lastOpened: new Date(),
  },
  {
    id: "1",
    websiteUrl: "https://www.youtube.com",
    dateAdded: new Date(),
    is_atomic: false,
    is_nuclear: true,
    minutesAllowed: 20,
    minutesUsed: 0,
    lastOpened: new Date(),
  },
  {
    id: "1",
    websiteUrl: "https://www.youtube.com",
    dateAdded: new Date(),
    is_atomic: false,
    is_nuclear: true,
    minutesAllowed: 20,
    minutesUsed: 0,
    lastOpened: new Date(),
  },
  {
    id: "1",
    websiteUrl: "https://www.youtube.com",
    dateAdded: new Date(),
    is_atomic: false,
    is_nuclear: true,
    minutesAllowed: 20,
    minutesUsed: 0,
    lastOpened: new Date(),
  },
  {
    id: "1",
    websiteUrl: "https://www.youtube.com",
    dateAdded: new Date(),
    is_atomic: false,
    is_nuclear: true,
    minutesAllowed: 20,
    minutesUsed: 0,
    lastOpened: new Date(),
  },
  {
    id: "1",
    websiteUrl: "https://www.youtube.com",
    dateAdded: new Date(),
    is_atomic: false,
    is_nuclear: true,
    minutesAllowed: 20,
    minutesUsed: 0,
    lastOpened: new Date(),
  },
  {
    id: "1",
    websiteUrl: "https://www.youtube.com",
    dateAdded: new Date(),
    is_atomic: false,
    is_nuclear: true,
    minutesAllowed: 20,
    minutesUsed: 0,
    lastOpened: new Date(),
  },
  {
    id: "1",
    websiteUrl: "https://www.youtube.com",
    dateAdded: new Date(),
    is_atomic: false,
    is_nuclear: true,
    minutesAllowed: 20,
    minutesUsed: 0,
    lastOpened: new Date(),
  },
  {
    id: "1",
    websiteUrl: "https://www.youtube.com",
    dateAdded: new Date(),
    is_atomic: false,
    is_nuclear: true,
    minutesAllowed: 20,
    minutesUsed: 0,
    lastOpened: new Date(),
  },
  {
    id: "1",
    websiteUrl: "https://www.youtube.com",
    dateAdded: new Date(),
    is_atomic: false,
    is_nuclear: true,
    minutesAllowed: 20,
    minutesUsed: 0,
    lastOpened: new Date(),
  },
  {
    id: "1",
    websiteUrl: "https://www.youtube.com",
    dateAdded: new Date(),
    is_atomic: false,
    is_nuclear: true,
    minutesAllowed: 20,
    minutesUsed: 0,
    lastOpened: new Date(),
  },
  {
    id: "1",
    websiteUrl: "https://www.youtube.com",
    dateAdded: new Date(),
    is_atomic: false,
    is_nuclear: true,
    minutesAllowed: 20,
    minutesUsed: 0,
    lastOpened: new Date(),
  },
  {
    id: "1",
    websiteUrl: "https://www.youtube.com",
    dateAdded: new Date(),
    is_atomic: false,
    is_nuclear: true,
    minutesAllowed: 20,
    minutesUsed: 0,
    lastOpened: new Date(),
  },
  {
    id: "1",
    websiteUrl: "https://www.youtube.com",
    dateAdded: new Date(),
    is_atomic: false,
    is_nuclear: true,
    minutesAllowed: 20,
    minutesUsed: 0,
    lastOpened: new Date(),
  },
  {
    id: "1",
    websiteUrl: "https://www.youtube.com",
    dateAdded: new Date(),
    is_atomic: false,
    is_nuclear: true,
    minutesAllowed: 20,
    minutesUsed: 0,
    lastOpened: new Date(),
  },
];

const WebsitesList = () => {
  return (
    <List
      as={VStack}
      alignItems="start"
      overflowY="scroll"
      maxHeight="calc(500px - 150px)"
    >
      {websites.map(({ websiteUrl, id }) => (
        <ListItem
          as={HStack}
          bgColor="ButtonFace"
          rounded="2xl"
          p="3"
          boxShadow={"xl"}
          w="100%"
          _hover={{ bgColor: "ButtonHighlight", transition: "1000ms" }}
        >
          <Text
            userSelect="none"
            flexGrow="1"
            textAlign="left"
            fontWeight="500"
          >
            {stripUrl(websiteUrl)}
          </Text>
          <IconButton
            aria-label="edit"
            rounded="full"
            colorScheme="blue"
            size="xs"
            as={Link}
            to={`websites/${id}`}
          >
            {<FaPen />}
          </IconButton>
          <IconButton
            aria-label="edit"
            rounded="full"
            colorScheme="red"
            size="xs"
          >
            {<FaTrash />}
          </IconButton>
        </ListItem>
      ))}
    </List>
  );
};

export default WebsitesList;
