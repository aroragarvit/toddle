import { auth, firestore } from "../config/firebaseConfig.jsx";
import firebase from "firebase/compat/app";

export const createBoard = async (boardName) => {
  const user = await firebase.auth().currentUser;
  const searchName = boardName.toLowerCase().replace(/[^a-z0-9]/g, "");

  const board = await firestore.collection("boards").add({
    boardName: boardName,
    createdBy: user.uid,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    searchName: searchName,
    posts: [],
  });
  const boardId = board.id;

  const userRef = await firestore.collection("users").doc(user.uid);

  await userRef.update({
    boardsId: firebase.firestore.FieldValue.arrayUnion(boardId),
    boardsName: firebase.firestore.FieldValue.arrayUnion(boardName),
  });
};
