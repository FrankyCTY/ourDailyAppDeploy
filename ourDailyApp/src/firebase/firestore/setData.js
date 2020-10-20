import { firestore } from "../firebase.utils";

export const addCollectionAndDocuments = (collectionName, arrayToAdd) => {
  try {
    const collectionRef = firestore.collection(collectionName);

    console.log("ADDING COLLECTION AND DOC");

    const batch = firestore.batch();

    arrayToAdd.forEach((obj) => {
      const newDocRef = collectionRef.doc();
      batch.set(newDocRef, obj);
    });

    batch.commit();
  } catch (error) {
    console.log("Error adding collection and documents", error);
  }
};

export function saveGameState(stateObj) {
  try {
    const collectionRef = firestore.collection("pigGame");

    const newDocRef = collectionRef.doc("game01");
    newDocRef.set({
      ...stateObj,
      isLoading: true,
    });
    console.log("Added Single Document");
  } catch (error) {
    console.log(error);
  }
}

export function savePigGamePlayer2State(stateObj) {
  try {
    const collectionRef = firestore.collection("pigGame");
    const newDocRef = collectionRef.doc("player2");
    newDocRef.set({
      ...stateObj,
    });
  } catch (error) {
    console.log(error);
  }
}
