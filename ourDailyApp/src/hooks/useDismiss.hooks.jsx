import { useCallback } from "react";

export default function useDismiss(refNode, callBackAction) {
  return useCallback(
    (e) => {
      // If we click inside of our ref, nothing happens
      if (refNode.current && refNode.current.contains(e.target)) {
        return;
      }
      // Otherwise close the alertTooltip
      callBackAction("");
    },
    [callBackAction, refNode]
  );
}
