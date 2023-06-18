import { AddIcon } from "@chakra-ui/icons";
import { PrimaryButton } from "../common/PrimaryButton";
import {
  Modal,
  ModalContent,
  ModalOverlay,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalCloseButton,
  Input,
  Text,
  Box,
  Flex,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import { createBoard } from "../functions/createBoard.jsx";

const colors = [
  {
    bg: "#A7F0F9",
    border: "#23856D",
  },
  {
    bg: "#C5C5FC",
    border: "#23856D",
  },
  {
    bg: "#FFAEC0",
    border: "#23856D",
  },
  {
    bg: "#FFCC66",
    border: "#23856D",
  },
];

export const AddBoard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedColor, setSelectedColor] = useState(0);
  const [boardName, setBoardName] = useState("");
  return (
    <div>
      <PrimaryButton
        icon={<AddIcon />}
        onClick={onOpen}
        label={"Create new Board"}
        display={["none", "block"]}
      />
      <PrimaryButton
        icon={<AddIcon />}
        onClick={onOpen}
        display={["block", "none"]}
      />
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        size={["xs", "lg", "xl"]}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add a name for your board</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              placeholder="Places around the world"
              size={"lg"}
              value={boardName}
              // make outline on click brand.100
              onChange={(e) => {
                setBoardName(e.target.value);
              }}
            />

            <Text mt={12} fontWeight={"bold"} fontSize={"xl"}>
              Choose post color
            </Text>
            <Text mt={1} fontWeight={"medium"}>
              Here are some templates to help you get started
            </Text>
            <Flex mt={8}>
              {colors.map((color, index) => (
                <Box
                  rounded="full"
                  key={index}
                  bgColor={color.bg}
                  border={
                    selectedColor === index ? "1px solid " + color.border : ""
                  }
                  h={8}
                  w={8}
                  mr={4}
                  onClick={() => setSelectedColor(index)}
                />
              ))}
            </Flex>
          </ModalBody>
          <ModalFooter>
            <PrimaryButton
              label={"Create Board"}
              onClick={() => {
                createBoard(boardName, selectedColor);
              }}
            />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};
