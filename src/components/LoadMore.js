import { useState } from "react";

const LoadMore = (nbItem) => {
  const [numberItemsPagination, setNumberItemsPagination] = useState(nbItem);

  const loadMoreItems = (arrayLength) => {
    const numberItems =
      numberItemsPagination + nbItem < arrayLength
        ? numberItemsPagination + nbItem
        : arrayLength;
    setNumberItemsPagination(numberItems);
  };

  const loadMoreReset = (initialNumberItemsPagination) => {
    setNumberItemsPagination(initialNumberItemsPagination);
  };

  return {
    numberItemsPagination,
    loadMoreItems,
    loadMoreReset,
  };
};

export default LoadMore;
