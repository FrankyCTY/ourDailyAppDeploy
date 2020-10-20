import { CommentsConverterTypes } from "./commentsConverter.types";

export const inputOnChange = (value, target) => ({
  type: CommentsConverterTypes.INPUT_VIDEOID_ONCHANGE,
  payload: { value, target },
});

export const setVideoIdInput = (value) => ({
  type: CommentsConverterTypes.SET_INPUT_VIDEOID,
  payload: value,
});

export const updateStep2Show = (targetValue) => ({
  type: CommentsConverterTypes.UPDATE_TOSTEP2_SHOW,
  payload: targetValue,
});

export const setStep2ToTrue = () => ({
  type: CommentsConverterTypes.SET_TOSTEP2_SHOW_TRUE,
  payload: true,
});
export const setStep2ToFalse = () => ({
  type: CommentsConverterTypes.SET_TOSTEP2_SHOW_FALSE,
  payload: false,
});
