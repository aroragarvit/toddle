import { firestore, auth } from "../firebase";
import firebase from "firebase/compat/app";

export const searchBoard = async (boardName) => {
  const searchName = boardName.toLowerCase().replace(/[^a-z0-9]/g, "");
  const boardRef = await firestore
    .collection("boards")
    .where("searchName", "==", searchName)
    .get();
  const board = boardRef.docs[0];
  const boardId = board.id;
  return boardId;
};
