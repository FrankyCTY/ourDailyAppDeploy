import React, {useState, useRef} from "react";
import S from "./styles/Popup.style";
import useDismiss from "../../../hooks/useDismiss.hooks";

function Popup({children, ...restProps}) {
  return <S.Overlay {...restProps}>{children}</S.Overlay>
}


Popup.PopupContainer = function PopupContainer({children, ...restProps}) {
  return <S.PopupContainer {...restProps}>{children}</S.PopupContainer>
}

Popup.Header = function Header({children, ...restProps}) {
  return <S.Header {...restProps}>{children}</S.Header>
}
Popup.Body = function Body({children, ...restProps}) {
  return <S.Body {...restProps}>{children}</S.Body>
}
Popup.Footer = function Footer({children, ...restProps}) {
  return <S.Footer {...restProps}>{children}</S.Footer>
}

// Sets

Popup.DefaultPopup = React.forwardRef(function DefaultPopup({setOpenPopup, open, children, ...restProps}) {
  const refNode = useRef(null);
  const dismissPopup = useDismiss(refNode, () => setOpenPopup(false));


  React.useEffect(() => {
    // add eventListener to document when mounted
    document.addEventListener("mousedown", dismissPopup);
    // remove eventListener from document when unmounted
    return () => {
      document.removeEventListener("mousedown", dismissPopup);
    };
  }, [dismissPopup]);

  return <Popup open={open}>
    <S.PopupContainer popupsize={"5rem"} ref={refNode} {...restProps}>{children}</S.PopupContainer>
  </Popup>
});

export default (Popup);

