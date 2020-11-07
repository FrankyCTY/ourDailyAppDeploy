import {useDispatch, useSelector} from "react-redux";
import {toggleTodoPopupOpen, setRenderTodoPopup} from "../redux/Todo/todo.actions";

export default function usePopup() {
  const dispatch = useDispatch();

  const openPopup = useSelector(state => state.todo.openPopup);
  const renderPopup = useSelector(state => state.todo.renderPopup);
  const toggleOpenPopup = () => dispatch(toggleTodoPopupOpen());
  const setRenderPopup = (popup) => dispatch(setRenderTodoPopup(popup));

  const onCreateCollectionClick = () => {
    setRenderPopup("createCollection");
    toggleOpenPopup();
  }

  const onAddTodoBtnClick = () => {
    setRenderPopup("addTodo");
    toggleOpenPopup();
  }

  const onDeleteCollectionClick= () => {
    setRenderPopup("deleteCollection");
    toggleOpenPopup();
  }

  

  return {openPopup, toggleOpenPopup, renderPopup, setRenderPopup, onCreateCollectionClick, onAddTodoBtnClick, onDeleteCollectionClick};
}