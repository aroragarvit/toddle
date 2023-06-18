import { Navbar } from "../layouts/Navbar";
import { Button } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { PrimaryButton } from "../commone/PrimaryButton";

export const Dashboard = () => {
  return (
    <div>
      <Navbar
        title={"toddle"}
        rightElement={
          <PrimaryButton
            icon={<AddIcon />}
            onClick={() => console.log("create new board")}
            label={"Create new Board"}
          />
        }
      />
    </div>
  );
};
