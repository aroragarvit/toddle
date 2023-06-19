import { Navbar } from "../layouts/Navbar";
import { useEffect, useState } from "react";
import { Box, Grid, GridItem, IconButton, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { AddBoard } from "../components/AddBoard";

const boardData = {
  title: "Places around the world",
  color: "cyan.50",
};

export const Posts = () => {
  const nav = useNavigate();
  const [posts, setPosts] = useState([
    {
      title: "Galapagos Islands, Ecuador",
      description:
        "The Galápagos Islands is a volcanic archipelago in the Pacific Ocean. It's considered one of the world's foremost destinations for wildlife-viewing. A province of Ecuador, it lies about 1,000km off its coast. Its isolated terrain shelters a diversity of plant and animal species, many found nowhere",
      date: "25th July",
      imageUrl: "https://picsum.photos/1024",
    },
  ]);
  return (
    <div>
      <Navbar title={boardData.title} rightElement={<AddBoard />} backButton={true} />
      <Box
        h={"100vh"}
        w={"full"}
        paddingY={32}
        px={[4, 8, 16]}
        bgColor={boardData.color}
      >
        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(2, 1fr)",
            "repeat(4, 1fr)",
          ]}
          gap={12}
        >
          {posts.map((post, index) => {
            return (
              <GridItem
                key={index}
                rounded={"xl"}
                border="1px solid"
                borderColor={"gray.200"}
                cursor={"pointer"}
                bgColor={"white"}
                py={4}
                px={6}
              >
                <Text fontWeight={"bold"} fontSize={["lg", "xl", "2xl"]}>
                  {post.title}
                </Text>
                <Text
                  mt={1}
                  fontWeight={"semibold"}
                  fontSize={["md", "lg", "xl"]}
                  color={"gray.500"}
                >
                  {post.date}
                </Text>
                <Box
                  h={64}
                  w={"full"}
                  bgSize={"cover"}
                  bgPosition={"center"}
                  my={6}
                  backgroundImage={`url(${post.imageUrl})`}
                  rounded={"xl"}
                />
                <Text
                  fontSize={["sm", "md"]}
                  borderBottom={"1px solid gray.200"}
                >
                  {post.description}
                </Text>
                <IconButton />
              </GridItem>
            );
          })}
        </Grid>
      </Box>
    </div>
  );
};
