export const updateStates = (state, payloadObj) => {
  return {
    ...state,
    page: payloadObj.page,
    details: payloadObj.details,
  };
};
