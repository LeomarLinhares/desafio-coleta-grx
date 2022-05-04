import partialResultsContainer from './components/partialResultsContainer.js';

const resultsContainer = document.getElementById('resultsContainer');
const totalResultsContainer = document.getElementById('totalResultsContainer');

async function getResults(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function renderResults() {
  const results = await getResults('http://localhost:5000');
}

renderResults();
