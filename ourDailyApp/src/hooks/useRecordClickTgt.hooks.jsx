import {useState} from "react";

export default function useRecordClickTgt(defaultState) {
  const [clickedTarget, setClickedTarget] = useState(defaultState);

  const onTargetClick = (e, identifier) => {
    console.log(identifier)
    setClickedTarget(identifier);
  }

  return [clickedTarget, onTargetClick];
}