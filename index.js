import { fetchOfficials } from './api.js';
import { renderResults } from './ui.js';

window.handleSearch = async function () {
  const query = document.getElementById('searchInput').value.trim();
  if (!query) return;

  const results = await fetchOfficials(query);
  renderResults(results);
};