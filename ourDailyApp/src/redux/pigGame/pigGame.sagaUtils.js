import { firestore } from "../../firebase/firebase.utils";

export function* saveGameState(stateObj) {
  try {
    const collectionRef = firestore.collection("pigGame");

    const newDocRef = collectionRef.doc("game01");
    yield newDocRef.set({
      ...stateObj,
      isLoading: true,
    });
    console.log("Added Single Document");
  } catch (error) {
    console.log(error);
  }
}
