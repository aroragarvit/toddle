import { auth, firestore } from "../config/firebaseConfig.jsx";
import firebase from "firebase/compat/app";

export const createBoard = async (boardName) => {
  const user = await firebase.auth().currentUser;
  const board = await firestore.collection("boards").add({
    boardName: boardName,
    createdBy: user.uid,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),

    posts: [],
  });
};
