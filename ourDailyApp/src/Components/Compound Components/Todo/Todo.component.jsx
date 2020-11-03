import React from "react";
import S from "./styles/Todo.style";

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
  svgSize, svgMargin, nobg, children, ...restProps
}) {
return <S.ToolBox nobg={nobg} {...restProps}>          
<S.ModifySvg svgSize={svgSize || "0.8rem"} svgMargin={svgMargin || "0.1rem 0.2rem"} className="modifySvg"/>
<S.PinSvg svgSize={svgSize || "0.8rem"} svgMargin={svgMargin || "0.1rem 0.2rem"} className="pinSvg"/>
<S.BinSvg svgSize={svgSize || "0.8rem"} svgMargin={svgMargin || "0.1rem 0.2rem"} className="binSvg"/>
{children}
</S.ToolBox>
}

Todo.SearchBar = function SearchBar({
  children, ...restProps
}) {
  return <Todo.Group className="flex items-center">
    <S.SearchSvg className="iconfont icon-Search"/>
    <S.SearchInput type="text" placeholder="Search..." />
  </Todo.Group>
}

Todo.PairButton = function PairButton({
  withArrow, buttonText, children, ...restProps
}) {
  return (
    <S.PairButton {...restProps}>
      {withArrow && <S.ArrowIcon className="iconfont icon-play"/>}
      {children}
      <S.PairButtonText>{buttonText}</S.PairButtonText>
    </S.PairButton>)
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
        <Todo.TitleText className="mr-2">{title}</Todo.TitleText>
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
  children, ...restProps
}) {
  return (
    <S.TodoSideBarContainer {...restProps}>
      <div className="overflow-y-auto flex-auto">
        <Todo.PairButton className="flex items-center" buttonText="Back to console"><S.ReturnSvg className="mr-4" /></Todo.PairButton>
        <Todo.PairButton className="flex items-center" buttonText="Collection" withArrow={true}><S.CollectionSvg className="mr-4" /></Todo.PairButton>
        {children}
      </div>
      <div className="flex justify-center mb-12">
        <Todo.CreateCollectionBtn/>
      </div>
    </S.TodoSideBarContainer>
  )
}