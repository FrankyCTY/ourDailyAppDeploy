import WholePageLoaderActionTypes from "./wholePageLoader.types";

const INITIATE_STATE = {
    bigText: "",
}

const WholePageLoaderReducer = (state = INITIATE_STATE, action) => {
    switch(action.type) {
        case WholePageLoaderActionTypes.SET_WHOLE_PAGE_LOADER_BIG_TEXT:
            return {
                ...state,
                bigText: action.text,
            }
        default:
            return state;
    }
}

export default WholePageLoaderReducer;