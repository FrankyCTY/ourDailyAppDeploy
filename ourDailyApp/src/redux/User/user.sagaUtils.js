import {put, call} from "redux-saga/effects";
import {setUserBackground} from "../Theme/theme.actions";
import {populateCartApps, populateWishlistApps, updateCartTotalPrice} from "../cart/cart.actions";
import {setUserAvatar} from "../Auth/auth.actions";
import {fetchAccessAppBtnsSuccess} from "../app/app.actions";

class UserSagaUtils {

    * populateUserBg(response) {
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

    * populateUserData([response, userSagaUtils]) {
        // 1) Populate Cart Apps to react state
        yield put(populateCartApps(response.data.data.cartItems));
        // 2) Populate Total Price of apps in cart to react state
        yield put(updateCartTotalPrice(response.data.data.totalPriceInCart));
        // 3) Populate wishlist apps to react state
        yield put(populateWishlistApps(response.data.data.wishlistItems));
        // 4) Populate user bg to redux state
        // url || buffer

        yield call(userSagaUtils.populateUserBg, response);

        // 5) Populate MainPage app button
        yield put(fetchAccessAppBtnsSuccess(response.data.data.ownedApplications));

        // 5) Populate user avatar to redux state
        yield put(setUserAvatar(response.data.data.avatar.data));
    }
}

export default UserSagaUtils;
