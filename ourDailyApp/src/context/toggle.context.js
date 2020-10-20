import React, { createContext, useState } from "react";

const ToggleContext = createContext();
function ToggleContextProvider({ children }) {
  const [toggleShow, setToggleShow] = useState(false);

  // return provider
  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      {children}
    </ToggleContext.Provider>
  );
}

export { ToggleContextProvider, ToggleContext };
