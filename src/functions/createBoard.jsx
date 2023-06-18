import { firestore } from "../config/firebaseConfig.jsx";
import firebase from "firebase/compat/app";

export const createBoard = async (boardName, color) => {
  const user = await firebase.auth().currentUser;
  const searchName = boardName.toLowerCase().replace(/[^a-z0-9]/g, "");

  const boardRef = firestore.collection("boards").doc();
  const boardId = boardRef.id;
  await boardRef.set({
    boardColor: color,
    boardName: boardName,
    createdBy: user.uid,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    searchName: searchName,
    posts: [],
    boardId: boardId,
  });

  const userRef = await firestore.collection("users").doc(user.uid);

  await userRef.update({
    boardsId: firebase.firestore.FieldValue.arrayUnion(boardId),
    boardsName: firebase.firestore.FieldValue.arrayUnion(boardName),
  });

  window.location.href = "/";
};
