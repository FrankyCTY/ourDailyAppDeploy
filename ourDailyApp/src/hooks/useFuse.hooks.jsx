import React from "react";
import Fuse from 'fuse.js';

export default function useFuse(searchTerm, targetData) {
  const options = {
    shouldSort: true,
    threshold: 0.4,
    keys: ['title', 'body'],
  } 

  const filteredData = React.useMemo(() => {
    // return [] if no search term or no users
    if (!searchTerm || !targetData) return targetData || [];
    // if user has entered search term and we have todos
    const fuse = new Fuse(targetData, options);
    
    return fuse.search(searchTerm);
  }, [targetData, searchTerm, options]);

  return [filteredData];
}