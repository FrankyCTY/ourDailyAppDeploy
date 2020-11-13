import {takeLeading, call, put, all, select} from "redux-saga/effects";
import Url from "../../url";

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
        // const res = yield call(setThemeInDb, theme, `/api/v1/users/changeTheme`);
        const isLogged = yield select(state => state.auth_P.isLogged);
        console.log({isLogged})
        if(isLogged) {const res = yield call(setThemeInDb, theme, `${Url}/users/changeTheme`);}
    } catch (error) {
        console.log("set theme failed", error);
    }
}
