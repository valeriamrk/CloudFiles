
const sortRows = (rows, sort) => {
  const getComparator = (sortKey, sortDirection) => {
    if (sortDirection === "descending") {
      return (a, b) => descSort(a, b, sortKey);
    } else {
      return (a, b) => ascSort(a, b, sortKey);
    }
  };

  const ascSort = (a, b, sortKey) => {
    if (b[sortKey] < a[sortKey]) return -1;
    if (b[sortKey] > a[sortKey]) return 1;
    if (a[sortKey] === b[sortKey]) return 0;
  };

  const descSort = (a, b, sortKey) => {
    if (b[sortKey] < a[sortKey]) return 1;
    if (b[sortKey] > a[sortKey]) return -1;
    if (a[sortKey] === b[sortKey]) return 0;
  };
  return rows.sort(getComparator(sort.sortKey, sort.direction));
};

export { sortRows };
