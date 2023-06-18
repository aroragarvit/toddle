import { firestore, auth } from "../config/firebaseConfig";
import firebase from "firebase/compat/app";

export const searchBoard = async (boardId) => {
  const boardRef = await firestore.collection("boards").doc(boardId).get();
  const posts = boardRef.data().posts;
  return posts; // array of posts from board
};
