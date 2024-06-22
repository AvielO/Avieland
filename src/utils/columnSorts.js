export const sortByAmount = (unsortedArray, columnName, direction) => {
  const unsortedCopy = [...unsortedArray];
  const sortedArray = unsortedCopy.sort((a, b) => {
    const comparison = b[columnName] - a[columnName];
    return direction === "desc" ? -comparison : comparison;
  });

  return sortedArray;
};

export const sortByName = (unsortedArray, columnName, direction) => {
  const unsortedCopy = [...unsortedArray];
  const sortedArray = unsortedCopy.sort((a, b) => {
    const comparison = a[columnName].localeCompare(b[columnName]);
    return direction === "desc" ? -comparison : comparison;
  });
  return sortedArray;
};
