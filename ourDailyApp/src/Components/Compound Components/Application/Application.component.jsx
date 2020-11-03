import React from "react";
import S from "./styles/Application.style";

import Formik from "../Formik/Formik.component";

// import {ReactComponent as BackLogo} from '../../../assets/svg/back.svg';


export default function Application({ children, ...restProps }) {
  return <S.ApplicationContainer {...restProps}>{children}</S.ApplicationContainer>;
}

// Elements

Application.TitleText = function TitleText({
  title, children, ...restProps
}) {
  return (
    <S.TitleText {...restProps}>{title}</S.TitleText>
    )
  }

Application.SubtitleText = function SubtitleText({
  children, ...restProps
}) {
  return (
    <S.SubtitleText {...restProps}>{children}</S.SubtitleText>
    )
  }

Application.Text = function Text({
  children, ...restProps
}) {
  return (
    <S.Text {...restProps}>{children}</S.Text>
    )
  }

Application.Group = function Group({
  children, ...restProps
}) {
  return (
    <S.Group {...restProps}>{children}</S.Group>
    )
  }


Application.MobileNav = function MobileNav({
  navText, children, ...restProps
}) {
  return (
    <S.MobileNav {...restProps}>
      <S.BackLogo/>
      <S.NavText>{navText}</S.NavText>
    </S.MobileNav>
    )
  }

Application.TagBox = function TagBox({
  text, children, ...restProps
}) {
  return (
    <S.TagBox {...restProps}>{text}</S.TagBox>
    )
  }
  
// Sets

Application.TodoHeader = function TodoHeader({
  tagBoxText, title, children, ...restProps
}) {
  return (
    <S.TodoHeader {...restProps}>
      <Formik.DropDown/>
      <S.Group>
        <S.TitleText className="mr-2">{title}</S.TitleText>
        <S.TagBox>{tagBoxText}</S.TagBox>
      </S.Group>
    </S.TodoHeader>
  )
}

Application.TodoListItemBlock = function TodoListItemBlock({
  subTitle, previewText, children, ...restProps
}) {

  const newPreviewText = previewText.slice(0, 70) + '...';

  return (
    <S.TodoListItemBlock {...restProps}>
      <Application.SubtitleText className="block mb-4">{subTitle}</Application.SubtitleText>
      <Application.Text>{newPreviewText}</Application.Text>
    </S.TodoListItemBlock>
  )
}