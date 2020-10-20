import React from "react";

const componentWithPreload = (importStatement) => {
  const component = React.lazy(importStatement);
  component.preload = importStatement;
  return component;
};

export default componentWithPreload;
