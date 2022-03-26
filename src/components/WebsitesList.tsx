import {
  Button,
  HStack,
  IconButton,
  List,
  ListItem,
  Text,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaPen, FaTrash } from "react-icons/fa";
import { WebsiteItem } from "../types";
import { stripUrl } from "../utils";
import EditWebsiteForm from "./EditWebsiteForm";

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
    id: "2",
    websiteUrl: "https://www.google.com",
    dateAdded: new Date(),
    is_atomic: false,
    is_nuclear: true,
    minutesAllowed: 20,
    minutesUsed: 0,
    lastOpened: new Date(),
  },
  {
    id: "2",
    websiteUrl: "https://www.google.com",
    dateAdded: new Date(),
    is_atomic: false,
    is_nuclear: true,
    minutesAllowed: 20,
    minutesUsed: 0,
    lastOpened: new Date(),
  },
  {
    id: "2",
    websiteUrl: "https://www.google.com",
    dateAdded: new Date(),
    is_atomic: false,
    is_nuclear: true,
    minutesAllowed: 20,
    minutesUsed: 0,
    lastOpened: new Date(),
  },
];

const deleteAWebTimer = (w: WebsiteItem) => {
  websites.splice(websites.indexOf(w), 1);
};

const updateWebTimer = (oldW: WebsiteItem, newW: WebsiteItem) => {
  if (websites.includes(oldW)) {
    websites[websites.indexOf(oldW)] = newW;
  }
};

const WebsitesList = () => {
  const [selectedWebsite, setSelectedWebsite] = useState<WebsiteItem | null>(
    null
  );
  const [operation, setOperation] = useState<"edit" | "delete" | null>(null);

  const onModalClose = () => {
    setSelectedWebsite(null);
    setOperation(null);
  };

  return (
    <React.Fragment>
      <List
        as={VStack}
        alignItems="start"
        overflowY="scroll"
        maxHeight="calc(500px - 150px)"
      >
        {websites.map((website) => (
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
              {stripUrl(website.websiteUrl)}
            </Text>
            <IconButton
              aria-label="edit"
              rounded="full"
              colorScheme="blue"
              size="xs"
              onClick={() => {
                setSelectedWebsite(website);
                setOperation("edit");
              }}
            >
              {<FaPen />}
            </IconButton>
            <IconButton
              aria-label="delete"
              rounded="full"
              colorScheme="red"
              size="xs"
              onClick={() => {
                setSelectedWebsite(website);
                setOperation("delete");
              }}
            >
              {<FaTrash />}
            </IconButton>
          </ListItem>
        ))}
      </List>
      <Modal
        isOpen={selectedWebsite !== null && operation === "edit"}
        onClose={onModalClose}
      >
        <ModalOverlay />
        {selectedWebsite && (
          <EditWebsiteForm
            old={selectedWebsite}
            onClose={onModalClose}
            update={updateWebTimer}
          />
        )}
      </Modal>
      <Modal
        isOpen={selectedWebsite !== null && operation === "delete"}
        onClose={onModalClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Deleting A Web Timer??</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Are you sure you want to delete the webtimer for{" "}
            {selectedWebsite?.websiteUrl}?
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="green" size="sm" mr={3} onClick={onModalClose}>
              No
            </Button>
            <Button
              colorScheme="red"
              size="sm"
              onClick={() => {
                if (selectedWebsite) {
                  deleteAWebTimer(selectedWebsite);
                  onModalClose();
                }
              }}
            >
              Yes
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </React.Fragment>
  );
};

export default WebsitesList;
