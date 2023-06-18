import { AddBoard } from "../components/AddBoard";
import { Navbar } from "../layouts/Navbar";

export const Dashboard = () => {
  return <Navbar title={"toddle"} rightElement={<AddBoard />} />;
};
