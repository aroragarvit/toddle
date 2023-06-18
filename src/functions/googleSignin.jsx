import firebase from "firebase/compat/app";
import { firestore } from "../config/firebaseConfig";
export const handleGoogleSignIn = async () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  try {
    await firebase.auth().signInWithPopup(provider);
    const user = await firestore
      .collection("users")
      .doc(firebase.auth().currentUser.uid)
      .get();
    if (!user.exists) {
      await firestore
        .collection("users")
        .doc(firebase.auth().currentUser.uid)
        .set({
          boardsName: [],
          boardsId: [],
          userId: firebase.auth().currentUser.uid,
          userPosts: [],
          bookmarks: [],
          email: firebase.auth().currentUser.email,
          name: firebase.auth().currentUser.displayName,
        });
    }
  } catch (error) {
    console.error(error);
  }
};
