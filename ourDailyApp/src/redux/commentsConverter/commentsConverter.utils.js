export const changeInputValue = (state, value, target) => {
  switch (target) {
    case "videoIdInputValue":
      return {
        ...state,
        videoIdInputValue: value,
      };
    default:
      return state;
  }
};
