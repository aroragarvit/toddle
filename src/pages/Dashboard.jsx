import { Navbar } from "../layouts/Navbar";
import { Button } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

export const Dashboard = () => {
  return (
    <div>
      <Navbar
        title={"toddle"}
        rightElement={<Button leftIcon={<AddIcon />}>Create new Board</Button>}
      />
    </div>
  );
};
