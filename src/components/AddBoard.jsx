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
  const [selecteColor, setSelectedColor] = useState(0);
  return (
    <div>
      <PrimaryButton
        icon={<AddIcon />}
        onClick={onOpen}
        label={"Create new Board"}
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
              // make outline on click brand.100
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
                  border={selecteColor == index ? "1px solid " + color.border : ""}
                  h={8}
                  w={8}
                  mr={4}
                />
              ))}
            </Flex>
          </ModalBody>
          <ModalFooter>
            <PrimaryButton label={"Create Board"} />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};
