const filterUniqueByID = (data) => {
  return data.reduce((acc, item) => {
    if (!acc.some((existingItem) => existingItem.id === item.id)) {
      acc.push(item);
    }
    return acc;
  }, []);
};

export default filterUniqueByID