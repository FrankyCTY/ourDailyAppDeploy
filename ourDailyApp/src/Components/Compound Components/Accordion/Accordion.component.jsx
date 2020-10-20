import React, { useContext } from "react";
import S from "./styles/Accordion.style";

import {
  ToggleContextProvider,
  ToggleContext,
} from "../../../context/toggle.context";

export default function Accordion({ children, ...restProps }) {
  return (
    <S.Container {...restProps}>
      <S.Inner>{children}</S.Inner>
    </S.Container>
  );
}

Accordion.Frame = function AccordionFrame({ children, ...restProps }) {
  return <S.Frame {...restProps}>{children}</S.Frame>;
};

Accordion.Item = function AccordionItem({ children, ...restProps }) {
  return (
    <ToggleContextProvider>
      <S.Item {...restProps}>{children}</S.Item>
    </ToggleContextProvider>
  );
};

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
  return <S.Title {...restProps}>{children}</S.Title>;
};

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
  const { toggleShow, setToggleShow } = useContext(ToggleContext);
  return (
    <S.Header onClick={() => setToggleShow(!toggleShow)} {...restProps}>
      {children}
      {toggleShow ? (
        <img src="/images/assets/close-slim.png" alt="Close" />
      ) : (
        <img src="/images/assets/add.png" alt="Open" />
      )}
    </S.Header>
  );
};

Accordion.Body = function AccordionBody({ children, ...restProps }) {
  const { toggleShow } = useContext(ToggleContext);

  return (
    <S.Body {...restProps} className={`${toggleShow ? "active" : ""}`}>
      <p>{children}</p>
    </S.Body>
  );
};

Accordion.BodyWrapper = function BodyWrapper({ children, ...restProps }) {
  const { toggleShow } = useContext(ToggleContext);

  return (
    <S.BodyWrapper {...restProps} className={`${toggleShow ? "active" : ""}`}>
      {children}
    </S.BodyWrapper>
  );
};

Accordion.Img = function Image({ ...restProps }) {
  return <S.Image {...restProps} />;
};
