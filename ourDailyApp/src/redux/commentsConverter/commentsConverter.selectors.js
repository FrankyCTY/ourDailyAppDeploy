import { createSelector } from "reselect";

const selectCommentsConverter = (state) => state.commentsConverter;

export const selectVideoIdInputValue = createSelector(
  [selectCommentsConverter],
  (commentsConverter) => commentsConverter.videoIdInputValue
);

export const selectStep2Show = createSelector(
  [selectCommentsConverter],
  (cs) => cs.step2Show
);
