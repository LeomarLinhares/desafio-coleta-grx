import partialResultsContainer from './components/partialResultsContainer.js';
import apiResultHandle from './helpers/apiResultHandle.js';

const resultsContainer = document.getElementById('resultsContainer');
const totalResult = document.getElementById('totalResult');

async function getResults(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function renderResults() {
  const results = await getResults('http://localhost:5000/api');
  const calculatedResults = apiResultHandle(results);

  totalResult.innerText = calculatedResults.total;

  calculatedResults.partials.forEach(partial => {
    const partialResults = partialResultsContainer(
      partial.quantity,
      ((partial.quantity / calculatedResults.total) * 100).toFixed(1),
      partial.type,
    );
    resultsContainer.appendChild(partialResults);
  });
}

renderResults();
