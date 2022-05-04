export default (array) => {
  const generateCalculatedArray = (acc, curr) => {
    console.log(acc)
    acc.total += curr.count.positiveQuantity;
    acc.total += curr.count.negativeQuantity;
    acc.total += curr.count.neutralQuantity;

    return acc;
  };

  return array.reduce(generateCalculatedArray, {
    total: 0,
    partials: [
      { type: 'positiveQuantity', quantity: 0 },
      { type: 'negativeQuantity', quantity: 0 },
      { type: 'neutralQuantity', quantity: 0 },
    ],
  });
};
