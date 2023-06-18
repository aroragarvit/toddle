import { AddBoard } from "../components/AddBoard";
import { Navbar } from "../layouts/Navbar";
import { useEffect, useState } from "react";
import { getBoards } from "../functions/getBoards.jsx";

export const Dashboard = () => {
  const [boards, setBoards] = useState([]);
  const [loading, setLoading] = useState(true);

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
      {" "}
      <Navbar title={"toddle"} rightElement={<AddBoard />} />
      {loading ? (
        <div>loading...</div>
      ) : (
        <div>
          {" "}
          {boards.map((board) => {
            return (
              <div
                key={board.id}
                style={{
                  backgroundColor: board.color,
                  width: "200px",
                  height: "200px",
                  borderRadius: "10px",
                }}
              >
                {board.boardName}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
