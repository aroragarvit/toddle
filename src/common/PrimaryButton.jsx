import { Button } from "@chakra-ui/react";
import { motion } from "framer-motion";

export const PrimaryButton = ({ onClick, label, icon, ...props }) => {
  return (
    <Button
      as={motion.button}
      onClick={onClick}
      leftIcon={icon}
      bgColor={"brand.100"}
      color="gray.50"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 700 }}
      _hover={{ bgColor: "brand.900" }}
      {...props}
    >
      {label}
    </Button>
  );
};
