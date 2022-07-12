
const sortRows = (rows, sort) => {
  const getComparator = (sortKey, sortDirection) => {
    if (sortDirection === "descending") {
      return (a, b) => descSort(a, b, sortKey);
    } else {
      return (a, b) => ascSort(a, b, sortKey);
    }
  };

  const ascSort = (a, b) => {
    if (b < a) return -1;
    if (b > a) return 1;
    if (a === b) return 0;
  };

  const descSort = (a, b) => {
    if (b < a) return 1;
    if (b > a) return -1;
    if (a === b) return 0;
  };
  return rows.sort(getComparator(sort.sortKey, sort.direction));
};

export { sortRows };
