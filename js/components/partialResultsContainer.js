export default (quantity, percentage, type) => {
  let label;
  if (type === 'negativeQuantity') label = 'Negativa';
  if (type === 'positiveQuantity') label = 'Positiva';
  if (type === 'neutralQuantity') label = 'Não Avaliada';

  const partialResults = document.createElement('div');
  partialResults.classList.add('container');
  partialResults.classList.add('w-50');
  partialResults.classList.add('d-flex');

  // Gera o container de quantidade
  const quantityColumn = document.createElement('div');
  quantityColumn.classList.add('col');
  quantityColumn.classList.add('d-flex');
  quantityColumn.classList.add('flex-column');
  quantityColumn.classList.add('justify-content-end');

  const h4TitleQuantity = document.createElement('h4');
  h4TitleQuantity.classList.add('text-center');
  h4TitleQuantity.innerText = `Quantidade ${label}`;

  const divQuantityContainer = document.createElement('div');
  divQuantityContainer.classList.add('bg-primary');
  divQuantityContainer.classList.add('text-center');
  divQuantityContainer.classList.add('m-2');
  divQuantityContainer.classList.add('p-3');
  divQuantityContainer.classList.add('rounded');
  divQuantityContainer.innerText = quantity;

  // Gera o container da porcentagem
  const percentageColumn = document.createElement('div');
  percentageColumn.classList.add('col');
  percentageColumn.classList.add('d-flex');
  percentageColumn.classList.add('flex-column');
  percentageColumn.classList.add('justify-content-end');

  const h4TitlePercentage = document.createElement('h4');
  h4TitlePercentage.classList.add('text-center');
  h4TitlePercentage.innerText = `% ${label}`;

  const divPercentageContainer = document.createElement('div');
  divPercentageContainer.classList.add('bg-primary');
  divPercentageContainer.classList.add('text-center');
  divPercentageContainer.classList.add('m-2');
  divPercentageContainer.classList.add('p-3');
  divPercentageContainer.classList.add('rounded');
  divPercentageContainer.innerText = `${percentage}%`;

  // Une os containers
  partialResults.appendChild(quantityColumn);
  quantityColumn.appendChild(h4TitleQuantity);
  quantityColumn.appendChild(divQuantityContainer);

  partialResults.appendChild(percentageColumn);
  percentageColumn.appendChild(h4TitlePercentage);
  percentageColumn.appendChild(divPercentageContainer);

  return partialResults;
};
