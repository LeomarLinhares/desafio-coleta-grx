export default (array) => {
  const generateCalculatedArray = (acc, curr) => {
    console.log(acc)
    acc.total += curr.count.positiveQuantity;
    acc.total += curr.count.negativeQuantity;
    acc.total += curr.count.neutralQuantity;

    acc.partials
      .find(partial => partial.type === 'positiveQuantity')
      .quantity += curr.count.positiveQuantity;

    acc.partials
      .find(partial => partial.type === 'negativeQuantity')
      .quantity += curr.count.negativeQuantity;

    acc.partials
      .find(partial => partial.type === 'neutralQuantity')
      .quantity += curr.count.neutralQuantity;

    acc.partials.sort((a, b) => b.quantity - a.quantity);

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
