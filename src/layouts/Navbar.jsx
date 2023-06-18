import { Link } from "react-router-dom";
import { Flex, Text, IconButton } from "@chakra-ui/react";
import { Logo } from "../images/logo";
import { ChevronLeftIcon } from "@chakra-ui/icons";

export const Navbar = ({ backButton, title, rightElement }) => {
  return (
    <Flex
      as="nav"
      w={"full"}
      h={"5rem"}
      px={16}
      align="center"
      justify={["center", null, "space-between"]}
      wrap="wrap"
      bg="white"
      color="white"
      borderBottom={"1px solid #EBEBEB"}
      position={"fixed"}
      top={0}
      left={0}
      z={100}
    >
      <Flex align="center" mr={5}>
        {backButton && (
          <Link to="/">
            <IconButton icon={<ChevronLeftIcon />} variant="ghost" />
          </Link>
        )}
        <Logo />
        <Text ml={4} fontSize="2xl" fontWeight="bold" color={"#717171"}>
          {title}
        </Text>
      </Flex>
      <Flex align="center" zIndex={1000}>
        {rightElement}
      </Flex>
    </Flex>
  );
};
