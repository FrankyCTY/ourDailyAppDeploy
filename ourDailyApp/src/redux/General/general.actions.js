import GeneralActionTypes from "./general.types";

export const toggleTodoPopupOpen = () => ({
  type: GeneralActionTypes.TOGGLE_TODO_POPUP_OPEN,
})
export const setRenderTodoPopup = (popup) => ({
  type: GeneralActionTypes.SET_RENDER_TODO_POPUP,
  popup,
})
export const setTodoContextMenuTgt = (target) => ({
  type: GeneralActionTypes.SET_TODO_CONTEXT_MENU_TGT,
  target,
})