import { firestore } from "../firebase.utils";

export const getPigGameState = async () => {
  const docRef = firestore.collection("pigGame").doc("game01");
  const docSnapShot = await docRef.get();
  if (docSnapShot.exists) {
    console.log("docSnapShot", docSnapShot.data());
    return docSnapShot.data();
  } else {
    return null;
  }
};

export const getPigGamePlayer2State = async () => {
  const docRef = firestore.collection("pigGame").doc("player2");
  const docSnapshot = await docRef.get();
  if (docSnapshot.exists) {
    console.log("docSnapshot player2", docSnapshot.data());
    return docSnapshot.data();
  } else {
    return null;
  }
};

// export const getMatchedUserArray = async (email, password) => {
//   // 1. Look if the email exists in firestore
//   const collectionRef = firestore.collection("user");
//   const collectionSnapshot = await collectionRef.get();
//   const usersDocs = collectionSnapshot.docs;

//   const targetUserArray = usersDocs.filter((userDoc, index) => {
//     return userDoc.data().email === email;
//   });

//   return targetUserArray;
// };
