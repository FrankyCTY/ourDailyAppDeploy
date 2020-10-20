import { useState, useEffect } from "react";

export default function useOnScreen(options) {
  const [node, setNode] = useState(null);
  const [startAnimate, setStartAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setStartAnimate(entry.isIntersecting);

      if (node && entry.isIntersecting) {
        observer.unobserve(node);
      }
    }, options);

    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        // observer.unobserve(node);
        observer.disconnect();
      }
    };
  }, [node, options, startAnimate]);

  return [setNode, startAnimate];
}
