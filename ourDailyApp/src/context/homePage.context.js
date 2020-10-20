import React, { createContext, useRef } from "react";

const HomePageContext = createContext();
function HomePageProvider({ children }) {
  const aboutMeNode = useRef();

  // return provider
  return (
    <HomePageContext.Provider value={{ aboutMeNode }}>
      {children}
    </HomePageContext.Provider>
  );
}

export { HomePageProvider, HomePageContext };
