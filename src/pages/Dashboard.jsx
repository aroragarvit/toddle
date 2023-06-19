import { AddBoard } from "../components/AddBoard";
import { Navbar } from "../layouts/Navbar";
import { useEffect, useState } from "react";
import { getBoards } from "../functions/getBoards.jsx";
import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const [boards, setBoards] = useState([]);
  const [loading, setLoading] = useState(true);
  const nav = useNavigate();

  useEffect(() => {
    const getBoardsData = async () => {
      const boards = await getBoards();
      console.log(boards);
      setBoards(boards);
      setLoading(false);
    };

    getBoardsData();
  }, []);

  return (
    <div>
      <Navbar title={"toddle"} rightElement={<AddBoard />} />
      {loading ? (
        <div>loading...</div>
      ) : (
        <Box h={"100vh"} w={"full"} paddingY={32} px={[4, 8, 16]}>
          {boards.length === 0 ? (
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              height="calc(100vh - 200px)"
            >
              <Text fontSize="2xl">
                No boards yet. Add a board to get started!
              </Text>
            </Box>
          ) : (
            <Grid
              templateColumns={[
                "repeat(1, 1fr)",
                "repeat(2, 1fr)",
                "repeat(2, 1fr)",
                "repeat(4, 1fr)",
              ]}
              gap={12}
            >
              {boards.map((board, index) => {
                return (
                  <GridItem
                    key={index}
                    display={"flex"}
                    rounded={"xl"}
                    border="1px solid"
                    borderColor={"gray.200"}
                    alignItems={"center"}
                    onClick={() => {
                      nav(`/boards/${boards.id ? boards.id : index}`);
                    }}
                    cursor={"pointer"}
                  >
                    <Box
                      h={24}
                      w={24}
                      bgColor={board.boardColor ? board.boardColor.bg : "purple.100"}
                      roundedLeft={"xl"}
                    />
                    <Text
                      ml={4}
                      fontWeight={"medium"}
                      fontSize={["sm", "sm", "md"]}
                    >
                      {board.boardName}
                    </Text>
                  </GridItem>
                );
              })}
            </Grid>
          )}
        </Box>
      )}
    </div>
  );
};
