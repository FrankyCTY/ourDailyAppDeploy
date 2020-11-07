import {useState, useCallback, useEffect} from "react";

const useContextMenu = (extendHandleFn) => {
  const [xPos, setXPos] = useState("0px");
  const [yPos, setYPos] = useState("0px");
  const [renderMenu, setRenderMenu] = useState(null);

  const handleContextMenu = useCallback(
    (e, renderMenuName, otherProps) => {
      e.preventDefault();

      

      setXPos(`${e.pageX}px`);
      setYPos(`${e.pageY}px`);
      setRenderMenu(renderMenuName);
      extendHandleFn(otherProps);
    },
    [setXPos, setYPos]
  );

  const handleClick = useCallback(() => {
    renderMenu && setRenderMenu();
  }, [renderMenu]);

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.addEventListener("click", handleClick);
    };
  });

  return { xPos, yPos, renderMenu, handleContextMenu };
};

export default useContextMenu;