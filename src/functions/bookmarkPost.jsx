import { firestore, auth } from "../config/firebaseConfig";
import firebase from "firebase/compat/app";

const bookmarkPost = async (postId) => {
  const user = await firebase.auth().currentUser;
  const userRef = await firestore.collection("users").doc(user.uid);
  await userRef.update({
    bookmarkedPosts: firebase.firestore.FieldValue.arrayUnion(postId),
  });
};
