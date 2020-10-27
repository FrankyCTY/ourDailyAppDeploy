import {put} from "redux-saga/effects";
import {setUserAvatar, setUserDetails} from "./auth.actions";
import {setTheme} from "../Theme/theme.actions";

export function* populateUserData(response) {
    const userDetails = response.data.data.user
    yield put(setUserDetails(userDetails));
    // 2) get avatar image from s3 via backend
    const avatarBuffer = response.data.data.avatar.data;
    yield put(setUserAvatar(avatarBuffer));

    // 3) get Theme
    yield put(setTheme(userDetails.theme));
}