import { put } from "redux-saga/effects";

import { firestore } from "../../firebase/firebase.utils";
import {
  setEmailNotRegisteredFALSE,
  setEmailNotRegisteredTRUE,
  setPasswordIncorrectFALSE,
  setPasswordIncorrectTRUE,
} from "../pigGameModals/pigGameModals.actions";

export function* getUserAuthInfo(email, password) {
  // 1. Look if the email exists in firestore
  const collectionRef = firestore.collection("user");
  const collectionSnapshot = yield collectionRef.get();
  const usersDocs = collectionSnapshot.docs;

  const targetUserArray = yield usersDocs.filter((userDoc, index) => {
    return userDoc.data().email === email;
  });
  // 2. Email not registered error
  if (targetUserArray.length === 0) {
    yield put(setEmailNotRegisteredTRUE());
    return false;
  } else {
    yield put(setEmailNotRegisteredFALSE());
  }

  // 3. Authentication check
  const userObj = targetUserArray[0].data();
  if (userObj.password === password) {
    yield put(setPasswordIncorrectFALSE());
  } else {
    yield put(setPasswordIncorrectTRUE());
    return false;
  }

  return {
    displayName: userObj.displayName,
    photoURL: userObj.photoURL,
  };
}
