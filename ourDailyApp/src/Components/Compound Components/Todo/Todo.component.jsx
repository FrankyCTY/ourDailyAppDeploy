import React from "react";
import S from "./styles/Todo.style";
import useRouter from "../../../hooks/useRouter.hooks";
import useDismiss from "../../../hooks/useDismiss.hooks";
import {toggleEditTodoItemMode, modifyTodoCollectionSortMethod, setOpenedTodoCollection, fetchTodoItemsForACollectionStart} from "../../../redux/Todo/todo.actions";
import {toggleTodoPopupOpen, setRenderTodoPopup} from "../../../redux/General/general.actions";
import {useDispatch, useSelector} from "react-redux";
import Formik from "../Formik/Formik.component";

export default function Todo({ children, ...restProps }) {
  return <S.TodoContainer {...restProps}>{children}</S.TodoContainer>;
}

// Elements

Todo.TitleText = function TitleText({
  children, ...restProps
}) {
  return (
    <S.TitleText {...restProps}>{children}</S.TitleText>
    )
  }

Todo.SubtitleText = function SubtitleText({
  children, ...restProps
}) {
  return (
    <S.SubtitleText {...restProps}>{children}</S.SubtitleText>
    )
  }

Todo.Text = function Text({
  children, ...restProps
}) {
  return (
    <S.Text {...restProps}>{children}</S.Text>
    )
  }

Todo.AttractText = function AttractText({
  children, ...restProps
}) {
  return (
    <S.AttractText {...restProps}>{children}</S.AttractText>
    )
  }

Todo.Group = function Group({
  children, ...restProps
}) {
  return (
    <S.Group {...restProps}>{children}</S.Group>
    )
  }


Todo.MobileNav = function MobileNav({
  navText, onPrevLinkClick, children, ...restProps
}) {
  return (
    <S.MobileNav {...restProps}>
      <div className="flex" onClick={onPrevLinkClick}>
        <S.BackLogo/>
        <S.NavText>{navText}</S.NavText>
      </div>
      {children}
    </S.MobileNav>
    )
  }

Todo.TagBox = function TagBox({
  text, children, ...restProps
}) {
  return (
    <S.TagBox {...restProps}>{text}</S.TagBox>
    )
  }


Todo.BinSvg = function BinSvg({
  svgSize, svgMargin, children, itemId, ...restProps
}) {
  const dispatch = useDispatch();

  const onBinSvgClick = () => {
    dispatch(setRenderTodoPopup("deleteTodoItem"));
    dispatch(toggleTodoPopupOpen());
  }

  return <S.BinSvg onClick={onBinSvgClick} svgsize={svgSize || "0.8rem"} 
  svgmargin={svgMargin || "0.1rem 0.2rem"} className="binSvg" {...restProps}/>
}

Todo.CollectionSvg = function CollectionSvg({
  svgSize, children, itemId, ...restProps
}) {

  return <S.CollectionSvgBig svgsize={svgSize || "0.8rem"} 
  className="binSvg" {...restProps}/>
}

Todo.ToolBox = function ToolBox({
  svgSize, svgMargin, nobg, children, itemId, ...restProps
}) {
const dispatch = useDispatch();

return <S.ToolBox nobg={nobg} {...restProps}>          
<S.ModifySvg onClick={() => dispatch(toggleEditTodoItemMode())} svgsize={svgSize || "0.8rem"} svgmargin={svgMargin || "0.1rem 0.2rem"} className="modifySvg"/>
<S.PinSvg svgsize={svgSize || "0.8rem"} svgmargin={svgMargin || "0.1rem 0.2rem"} className="pinSvg"/>
<Todo.BinSvg svgsize={svgSize || "0.8rem"} svgmargin={svgMargin || "0.1rem 0.2rem"} className="binSvg"/>
{children}
</S.ToolBox>
}

Todo.SearchBar = function SearchBar({
  value, onChange, children, ...restProps
}) {
  return <Todo.Group className="flex items-center">
    <S.SearchSvg className="iconfont icon-Search"/>
    <S.SearchInput type="text" placeholder="Search..." onChange={onChange} value={value} />
  </Todo.Group>
}

Todo.CollectionSingleLogo = function CollectionSingleLogo({children, ...restProps}) {
  return <S.CollectionSingleLogo {...restProps}></S.CollectionSingleLogo>
}

Todo.PairButton = function PairButton({
  withArrow, buttonText, children, ...restProps
}) {
  return <S.PairButton {...restProps}>
      {withArrow && <S.ArrowIcon className="iconfont icon-play"/>}
      {children}
      <S.PairButtonText>{buttonText}</S.PairButtonText>
    </S.PairButton>
}

Todo.SideBarDropdown = function SideBarDropdown({
  withArrow, dropdownItem, buttonText, children, ...restProps
}) {

  const [isExpanded, setIsExpanded] = React.useState(false);

  return <S.SideBarDropdown isExpanded={isExpanded}>
    <S.PairButton {...restProps} onClick={() => setIsExpanded(!isExpanded)}>
    {withArrow && <S.ArrowIcon className="iconfont icon-play"/>}
    {children}
      <S.PairButtonText>{buttonText}</S.PairButtonText>
    </S.PairButton>
    {isExpanded && dropdownItem}
  </S.SideBarDropdown>
}

Todo.CreateCollectionBtn = function CreateCollectionBtn({
  children, ...restProps
}) {
  return (
    <S.CreateCollectionBtn {...restProps}>Create Collection</S.CreateCollectionBtn>)
}

Todo.AddTodoBtn = function AddTodoBtn({
  children, ...restProps
}) {
  return (
    <S.AddTodoBtn {...restProps}><i className="iconfont icon-plus"/></S.AddTodoBtn>)
}
  
// Sets

Todo.TodoHeader = function TodoHeader({
  tagBoxText, title, children, ...restProps
}) {

  const dispatch = useDispatch();

  const openedCollection = useSelector(state => state.todo.openedCollection);


  const onDropdownItemClick = (e, query) => {
    const {value} = e.target;
    const shouldFetch = value !== openedCollection.sortMethod;
    if(shouldFetch) {
      // modified in overall collections array
      dispatch(modifyTodoCollectionSortMethod(openedCollection.id, value));
      // Modify in Opened todo collection
      dispatch(setOpenedTodoCollection({ ...openedCollection, sortMethod: value }));
      // reFetch todo items according to new sorting method
  
      dispatch(fetchTodoItemsForACollectionStart(openedCollection.id, query));
    }
  }

  const openedCollectionSortMethod = useSelector(state => state.todo.openedCollection).sortMethod;

  const onSelectChange = (e) => {
    const {value} = e.target;

    switch(value) {
      case "Recent":
        onDropdownItemClick(e);
        break;
      case "Old to Recent":
        onDropdownItemClick(e, "sort=+createdAt");
        break;
      default:
        break;
    }
  }
  return (
    <S.TodoHeader {...restProps}>
      {/* <Formik.DropDown 
        DropDownItems={            
          () => <>
            <option  value="Recent" onClick={(e) => onDropdownItemClick(e)}>Recent</option>
            <option  value="Old to Recent" onClick={(e) => onDropdownItemClick(e, "sort=+createdAt")}>Old to Recent</option>
          </>
        }
      value={openedCollectionSortMethod || "Recent"} /> */}
      <div>
        <select onChange={onSelectChange}>
          <option value="Recent" selected={openedCollectionSortMethod === "Recent"}>Recent</option>
          <option value="Old to Recent" selected={openedCollectionSortMethod === "Old to Recent"}>Old to Recent</option>
        </select>
      </div>
      <S.Group>
        <Todo.TitleText className="mr-2 text-base sm:text-2xl">{title}</Todo.TitleText>
        <S.TagBox>{tagBoxText}</S.TagBox>
      </S.Group>
      {children}
    </S.TodoHeader>
  )
}

Todo.TodoListItemBlock = function TodoListItemBlock({
  onListItemBlockClick, itemId, checkMode, active, subTitle, previewText, children, ...restProps
}) {

  const newPreviewText = () => {
    return (previewText.length > 70) ? previewText.slice(0, 70) + '...' : previewText;
  };

  const checkedTodoItemList = useSelector(state => state.todo.checkedTodoItemList);

  const isBlockChecked = checkedTodoItemList.findIndex(todoItemObj => todoItemObj.id === itemId) !== -1;

  const showToolBar = active && !checkMode;
  const showCheckIndicator = isBlockChecked && checkMode;

  return (
    <S.TodoListItemBlock {...restProps} active={active} onClick={onListItemBlockClick} checkMode={checkMode}>
      <Todo.Group className="flex items-center justify-between">
        <Todo.SubtitleText className="block mb-4 xl:text-base">{subTitle}</Todo.SubtitleText>
        { showToolBar && <Todo.ToolBox/>}
      </Todo.Group>

      <Todo.Text className="xl:text-sm">{newPreviewText()}</Todo.Text>
    { showCheckIndicator && <S.CheckIndicator><S.CheckSvg className="iconfont icon-tick" /></S.CheckIndicator>}
    </S.TodoListItemBlock>
  )
}

Todo.TodoSideBar = function TodoSideBar({
  showSideBar, withOverlay, closeTodoSideBar, onCreateCollectionClick, collections, children, ...restProps
}) {

  const dispatch = useDispatch();

  const node = React.useRef();

  const dismissSidebar = useDismiss(node, () => dispatch(closeTodoSideBar()));

  const router = useRouter();

  React.useEffect(() => {
    // add eventListener to document when mounted
    document.addEventListener("mousedown", dismissSidebar);
    // remove eventListener from document when unmounted
    if(!showSideBar) {
      document.removeEventListener("mousedown", dismissSidebar);
    }
    return () => {
      document.removeEventListener("mousedown", dismissSidebar);
    };

  }, [dismissSidebar, showSideBar]);

  return <>
  {withOverlay ?
  (
    <S.TodoSideBarOverLay showSideBar={showSideBar}>
      <S.TodoSideBarContainer showSideBar={showSideBar} {...restProps} ref={node}>
        <div className="overflow-y-auto flex-auto">
          <Todo.PairButton className="flex items-center" buttonText="Back to console" onClick={() => router.push('/main')}><S.ReturnSvg className="mr-4" /></Todo.PairButton>
          <Todo.SideBarDropdown className="flex items-center" buttonText="Collection" 
            withArrow={true} dropdownItem={collections}>
            <S.CollectionSvg className="mr-4"/>
          </Todo.SideBarDropdown>
        </div>
        <div className="flex justify-center mb-12">
          <Todo.CreateCollectionBtn onClick={onCreateCollectionClick}/>
        </div>
      </S.TodoSideBarContainer>
    </S.TodoSideBarOverLay>) : (<S.TodoSideBarContainer showSideBar={showSideBar} {...restProps}>
    <div className="overflow-y-auto flex-auto">
      <Todo.PairButton className="flex items-center" buttonText="Back to console" onClick={() => router.push('/main')}><S.ReturnSvg className="mr-4" /></Todo.PairButton>
      <Todo.SideBarDropdown className="flex items-center" buttonText="Collection" 
        withArrow={true} dropdownItem={collections}>
        <S.CollectionSvg className="mr-4"/>
      </Todo.SideBarDropdown>
    </div>
    <div className="flex justify-center mb-12">
      <Todo.CreateCollectionBtn onClick={onCreateCollectionClick}/>
    </div>
  </S.TodoSideBarContainer>
  )}</>
}