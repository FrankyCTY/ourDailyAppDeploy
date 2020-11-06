import React from "react";
import S from "./styles/Todo.style";
import useRouter from "../../../hooks/useRouter.hooks";
import useDismiss from "../../../hooks/useDismiss.hooks";
import {useDispatch} from "react-redux";
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
  navText, children, ...restProps
}) {
  return (
    <S.MobileNav {...restProps}>
      <S.BackLogo/>
      <S.NavText>{navText}</S.NavText>
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

Todo.ToolBox = function ToolBox({
  svgSize, svgMargin, nobg, onModifyClick, children, ...restProps
}) {
return <S.ToolBox nobg={nobg} {...restProps}>          
<S.ModifySvg svgsize={svgSize || "0.8rem"} svgmargin={svgMargin || "0.1rem 0.2rem"} onClick={onModifyClick} className="modifySvg"/>
<S.PinSvg svgsize={svgSize || "0.8rem"} svgmargin={svgMargin || "0.1rem 0.2rem"} className="pinSvg"/>
<S.BinSvg svgsize={svgSize || "0.8rem"} svgmargin={svgMargin || "0.1rem 0.2rem"} className="binSvg"/>
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
  return (
    <S.TodoHeader {...restProps}>
      <Formik.DropDown/>
      <S.Group>
        <Todo.TitleText className="mr-2 text-base sm:text-2xl">{title}</Todo.TitleText>
        <S.TagBox>{tagBoxText}</S.TagBox>
      </S.Group>
      {children}
    </S.TodoHeader>
  )
}

Todo.TodoListItemBlock = function TodoListItemBlock({
  active, subTitle, previewText, children, ...restProps
}) {

  const newPreviewText = previewText.slice(0, 70) + '...';

  return (
    <S.TodoListItemBlock {...restProps} active={active}>
      <Todo.Group className="flex items-center justify-between">
        <Todo.SubtitleText className="block mb-4 xl:text-base">{subTitle}</Todo.SubtitleText>
        { active && <Todo.ToolBox/>}
      </Todo.Group>

      <Todo.Text className="xl:text-sm">{newPreviewText}</Todo.Text>
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