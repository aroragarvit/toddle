import { storage, firestore } from "../config/firebaseConfig";

export const UploadImage = async (imageFile, postId) => {
  try {
    const storageRef = storage.ref();

    const fileRef = storageRef.child(postId);
    await fileRef.put(imageFile);
    const url = await fileRef.getDownloadURL();
    return url;
  } catch (err) {
    console.log(err);
  }
};
