const sortObject = (dataObject, sequenceObject, key) => {
  const sortBy = [];
  sequenceObject.forEach((item, index) => {
    sortBy[sequenceObject[index][key]] = index;
  }, key);
  return dataObject.sort((a, b) => {
    return sortBy[a[key]] - sortBy[b[key]];
  }, sortBy);
};

exports.sortObject = sortObject;
