export const writePost = async (boardId, postTitle, postContent, imageFile) => {
  const user = await firebase.auth().currentUser;
  const boardRef = await firestore.collection("boards").doc(boardId);
  const boardDoc = await boardRef.update({
    posts: firebase.firestore.FieldValue.arrayUnion({
      postTitle: postTitle,
      postContent: postContent,
      postAuthor: user.uid,
      postColor: boardDoc.data().boardColor,
      postId: boardId + user.uid,
      postCreatedAt: firebase.firestore.FieldValue.serverTimestamp(),
      postUpdatedAt: firebase.firestore.FieldValue.serverTimestamp(),
      postImage: imageFile ? await UploadImage(imageFile, boardId) : null,
    }),
  });

  const postId = boardId + user.uid;

  const userRef = await firestore.collection("users").doc(user.uid);
  await userRef.update({
    userPosts: {
      [postId]: {
        postTitle: postTitle,
        postContent: postContent,
        postBoard: boardId,
        postCreatedAt: firebase.firestore.FieldValue.serverTimestamp(),
        postUpdatedAt: firebase.firestore.FieldValue.serverTimestamp(),
        postImage: imageFile ? await UploadImage(imageFile, boardId) : null,
      },
    },
  });
};
