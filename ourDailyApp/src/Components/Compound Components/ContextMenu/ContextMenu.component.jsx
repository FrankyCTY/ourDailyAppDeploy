import React from "react";
import useTodoPopup from "../../../hooks/useTodoPopup.hooks";
import S from "./styles/ContextMenu.style";

function ContextMenu({xPos, yPos, children, ...restProps}) {

  return <S.ContextMenuContainer xpos={xPos} ypos={yPos} {...restProps}>{children}</S.ContextMenuContainer>
}

ContextMenu.Options = function ContextMenuOptions({children, ...restProps}) {
  return <S.ContextMenuOptions {...restProps}>{children}</S.ContextMenuOptions>
}

// Sets

ContextMenu.TodoCollectionMenu = function TodoCollectionMenu({contextMenuTgt, popupProps, children, ...restProps}) {

  const {onAddTodoBtnClick, onCreateCollectionClick, onDeleteCollectionClick} = useTodoPopup();

  return <ContextMenu {...restProps}>
    <ContextMenu.Options onClick={onAddTodoBtnClick}>Add note to collection</ContextMenu.Options>
    <ContextMenu.Options onClick={onCreateCollectionClick}>Create new collection</ContextMenu.Options>
    <ContextMenu.Options onClick={onDeleteCollectionClick}>Delete collection</ContextMenu.Options>
    {children}
  </ContextMenu>
}

export default ContextMenu;