import {put} from "redux-saga/effects";
import {setUserBackground} from "../Theme/theme.actions";

export function* populateUserBg(response) {
    console.log({hi: "I am inside of populateUserBg"})
    const bgBuffer = response.data.data.bg.data;
    const bgIsBuffer = (bgBuffer !== undefined);
    if(bgIsBuffer) {
          // yield put(setUserBackground(bgBuffer));
          //yield setUserBgFn(bgBuffer);
          console.log("isBuffer")
          yield put(setUserBackground(bgBuffer));
    } else {
        // yield put(setUserBackground(response.data.data.bg));
        // 1) set mainpage bg local state
        //yield setUserBgFn(response.data.data.bg);
        console.log("not buffer")
        yield put(setUserBackground(response.data.data.bg));
    }
}