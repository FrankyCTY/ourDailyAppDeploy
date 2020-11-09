import {takeLeading, call, put, all} from "redux-saga/effects";

import ThemeActionTypes from "./theme.types";

import {setTheme} from "./theme.actions";
import {setThemeInDb} from "./theme.requests";

// ================= Sagas ==================

function* onSetThemeStart() {
    yield takeLeading(ThemeActionTypes.SET_THEME_START, fn_setThemeStart);
}

export default function* themeSaga() {
    yield all([
        call(onSetThemeStart),
    ]);
}

function* fn_setThemeStart({theme}) {
    try {
        console.log("fn_setThemeStart")
        // 1) Change React state - theme
        yield put(setTheme(theme));

        // 2) Change User Doc in DB
        const res = yield call(setThemeInDb, theme, `/api/v1/users/changeTheme`);
        console.log({res})
    } catch (error) {
        console.log("set theme failed", error);
    }
}
