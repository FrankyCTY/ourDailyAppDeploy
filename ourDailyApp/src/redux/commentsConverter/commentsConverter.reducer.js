import { CommentsConverterTypes } from "../commentsConverter/commentsConverter.types";
import { changeInputValue } from "./commentsConverter.utils";

const INITIAL_STATE = {
  videoIdInputValue: "",
  step2Show: false,
};

const commentsConverterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CommentsConverterTypes.INPUT_VIDEOID_ONCHANGE:
      return changeInputValue(
        state,
        action.payload.value,
        action.payload.target
      );
    case CommentsConverterTypes.SET_INPUT_VIDEOID:
      return {
        ...state,
        videoIdInputValue: action.payload,
      };
    case CommentsConverterTypes.SET_TOSTEP2_SHOW_TRUE:
      return {
        ...state,
        step2Show: true,
      };
    case CommentsConverterTypes.SET_TOSTEP2_SHOW_FALSE:
      return {
        ...state,
        step2Show: false,
      };
    default:
      return state;
  }
};

export default commentsConverterReducer;
