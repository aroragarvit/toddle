import { auth, firestore } from "../config/firebaseConfig";
export const getBoards = async () => {
  const user = await auth.currentUser;
  const userRef = await firestore.collection("users").doc(user.uid);
  const userDoc = await userRef.get();

  const boardsId = await userDoc.data().boardsId;
  const boards = [];
  for (let i = 0; i < boardsId.length; i++) {
    const boardRef = await firestore.collection("boards").doc(boardsId[i]);
    const boardDoc = await boardRef.get();
    boards.push(boardDoc.data());
  }
  return boards;
};
