import {takeLeading, select, call, put, all, fork, cancel, take, cancelled, delay, takeLatest} from "redux-saga/effects";

import CartActionTypes from "./cart.types";
import {
    addAppToCartSuccess,
    addAppToCartFailure,
    addItem,
    getAppsInCartSuccess,
    getAppsInCartFailure,
    setIsGettingCartAppsTrue,
    setIsGettingCartAppsFalse,
    populateCartApps,
    populateWishlistApps,
    removeItem,
    minusItemPriceToTotal,
    addWishListItem,
    addAppToWishListSuccess,
    addAppToWishListFailure,
    removeWishListItem,
    removeAppToWishListSuccess,
    removeAppToWishListFailure,
    setIsTogglingWishlistAppTrue,
    setIsTogglingWishlistAppFalse,
    setIsGettingWishlistAppsTrue,
    setIsGettingWishlistAppsFalse,
    updateCartTotalPrice,
    updateAllAppsInCartSuccess,
    updateAllAppsInCartFailure,
    updateAllAppsInWishlistSuccess,
    updateAllAppsInWishlistFailure,
} from "./cart.actions";

import {selectCartItemExist, selectWishlistItemExist} from "./cart.selectors";

import {addAppToCartBackEnd, getCartApps, deleteAppFromCart, addAppToWishlistBackEnd
, deleteAppFromWishlist, getWishlistApps, updateAllAppsInCart, updateAllAppsInWishlist} from "./cart.requests";

// ================= Sagas ==================
function* onAddAppToCartStart() {
    while(true) {
        // 1) wait for add app start
        const {appObj} = yield take(CartActionTypes.ADD_APP_START);
        
        // 2) implement add app logic
        const addAppToCartTask = yield fork(addAppToCartStart, {appObj});
        
        // 3) check if add app to wishlist started
        const action = yield take([CartActionTypes.ADD_APP_WISHLIST_START, CartActionTypes.REMOVE_APP_FROM_CART_START]);
        // 4) cancel the add app logic if user clciked add app to checklist
        if(action.type === CartActionTypes.ADD_APP_WISHLIST_START) {
            console.log("cancelling addAppToCartTask");
            yield cancel(addAppToCartTask);
        }
    }
}

function* onAddAppToWishlistStart() {
    while(true) {
        // 1) wait for add app start
        const {appObj} = yield take(CartActionTypes.ADD_APP_WISHLIST_START);

        // 2) implement add app to wishlist logic
        const addAppToWishlistTask = yield fork(addAppToWishlistStart, {appObj});

        // 3) check if add app to cart started
        const action = yield take([CartActionTypes.ADD_APP_START, CartActionTypes.REMOVE_APP_WISHLIST_START]);
        // 4) cancel the add app logic if user clciked add app to checklist
        if(action.type === CartActionTypes.ADD_APP_START) {
            console.log("cancelling addAppToWishlistTask");
            yield cancel(addAppToWishlistTask);
        }
    }
}

// function* onAddAppToWishlistStart() {
//     yield takeLeading(
//         CartActionTypes.ADD_APP_WISHLIST_START,
//         addAppToWishlistStart,
//     )
// }


function* onGetCartAppsStart() {
    yield takeLeading(
        CartActionTypes.GET_CART_APPS_START,
        getCartAppsStart
    )
}

function* onGetWishlistAppsStart() {
    yield takeLeading(
        CartActionTypes.GET_WISHLIST_APPS_START,
        getWishlistAppsStart
    )
}

function* onRemoveAppFromCartStart() {
    yield takeLeading(
        CartActionTypes.REMOVE_APP_FROM_CART_START,
        gf_removeAppFromCartStart,
    )
}


function* onRemoveAppFromWishlistStart() {
    yield takeLeading(
        CartActionTypes.REMOVE_APP_WISHLIST_START,
        deleteAppFromWishlistStart,
    )
}

function* onUpdateAllAppsInCartStart() {
    yield takeLatest(CartActionTypes.UPDATE_CART_ALL_APPS_START, gf_updateAllAppsInCartStart);
}

function* onUpdateAllAppsInWishlistStart() {
    yield takeLatest(CartActionTypes.UPDATE_WISHLIST_ALL_APPS_START, gf_updateAllAppsInWishlistStart);
}



export default function* cartSaga() {
    yield all([call(onAddAppToCartStart), call(onGetCartAppsStart), 
        call(onRemoveAppFromCartStart), call(onAddAppToWishlistStart),
        call(onRemoveAppFromWishlistStart), call(onGetWishlistAppsStart),
        call(onUpdateAllAppsInCartStart), call(onUpdateAllAppsInWishlistStart)]);
}

// ================= other generator functions ==================

function* addAppToCartStart({appObj}) {
    try {
        // 1) Add app to cart within react state
        yield put(addItem(appObj));
        // 2) add app to user cart via backend
        yield call(addAppToCartBackEnd, appObj._id);
        yield put(addAppToCartSuccess());
    } catch (error) {
        yield put(addAppToCartFailure());
    } finally {
        // 3) clear react state and backend for add app to cart
        // if this task is cancelled
        if(yield cancelled()) {
            console.log("TASK add app to cart CANCELLED!");
            yield call(deleteAppFromCart, appObj._id);
            // Remove app from react cart state
            yield put(removeItem(appObj._id));
        }
    }
}

function* getCartAppsStart() {
    try {
        // Start Spinner
        yield put(setIsGettingCartAppsTrue());
        // 1) Get Cart Apps from backend
        const getCartAppsRes = yield call(getCartApps);
        // 2) Populate Cart Apps to react state
        yield put(populateCartApps(getCartAppsRes.data.data.apps));
        // 3) Populate Total Price of apps in cart to react state
        yield put(updateCartTotalPrice(getCartAppsRes.data.data.totalPrice));
        // Stop Spinner
        yield put(setIsGettingCartAppsFalse());
        yield put(getAppsInCartSuccess());
    } catch (error) {
        // @error
        yield put(setIsGettingCartAppsFalse());
        yield put(getAppsInCartFailure());
    }
}

function* getWishlistAppsStart() {
    try {
        // Start Spinner
        yield put(setIsGettingWishlistAppsTrue());
        // 1) Get Cart Apps from backend
        const getWishlistAppsRes = yield call(getWishlistApps);
        // 2) Populate Cart Apps to react state
        yield put(populateWishlistApps(getWishlistAppsRes.data.data.apps));
        // Stop Spinner
        yield put(setIsGettingWishlistAppsFalse());
        yield put(getAppsInCartSuccess());
    } catch (error) {
        // @error
        yield put(setIsGettingWishlistAppsFalse());
        yield put(getAppsInCartFailure());
    }
}

function* gf_removeAppFromCartStart({appId, appPrice}) {
    try {
        // 1) Modify the Database for deleting app from cart
        yield call(deleteAppFromCart, appId);

        // 2) Remove app from react cart state
        yield put(removeItem(appId));

        // 3) Recalculate the total price for the apps in cart
        yield put(minusItemPriceToTotal(appPrice));
    } catch (error) {
        
    }
}

function* addAppToWishlistStart({appObj}) {
    try {
        
        // START SPINNER
        yield put(setIsTogglingWishlistAppTrue());
        // 1) Add app to wishlist within react state and
        // remove cart app from cart state if it exists
        yield put(addWishListItem(appObj));
        // 2) add app to user wishlist via backend (plus delete from cart)
        yield call(addAppToWishlistBackEnd, appObj._id);
        yield put(addAppToWishListSuccess());

        // STOP SPINNER
        yield put(setIsTogglingWishlistAppFalse());
    } catch (error) {
        // STOP SPINNER
        yield put(setIsTogglingWishlistAppFalse());
        yield put(addAppToWishListFailure());
    } finally {
        // 3) clear react state and backend for add app to cart
        // if this task is cancelled
        if(yield cancelled()) {
            console.log("TASK add app to wishlist CANCELLED!");
            yield call(deleteAppFromWishlist, appObj._id);
            // Remove app from react cart state
            yield put(removeWishListItem(appObj._id));
        }
    }
}

function* deleteAppFromWishlistStart({appId}) {
    try {
        // START SPINNER
        yield put(setIsTogglingWishlistAppTrue());
        // 1) remove app to user wishlist via backend
         yield call(deleteAppFromWishlist, appId);
        // 2) remove app to wishlist within react state
        yield put(removeWishListItem(appId));
        yield put(removeAppToWishListSuccess());
        // STOP SPINNER
        yield put(setIsTogglingWishlistAppFalse());
    } catch (error) {
        // STOP SPINNER
        yield put(setIsTogglingWishlistAppFalse());
        yield put(removeAppToWishListFailure());
    }
}

function* gf_updateAllAppsInCartStart({appIds}) {
    try {
        // This task will only update the backend
        // since the task updating the react state
        // should be done in advanced
        console.log({appIds});
        yield call(updateAllAppsInCart, appIds);
        
        yield put(updateAllAppsInCartSuccess());
    } catch (error) {
        yield put(updateAllAppsInCartFailure());
    }
}

function* gf_updateAllAppsInWishlistStart({appIds}) {
    try {
                // This task will only update the backend
        // since the task updating the react state
        // should be done in advanced
        console.log({appIds});
        yield call(updateAllAppsInWishlist, appIds);
        yield put(updateAllAppsInWishlistSuccess());
    } catch (error) {
        yield put(updateAllAppsInWishlistFailure());
    }
}