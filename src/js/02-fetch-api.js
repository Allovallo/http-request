import '../css/common.css';
import pokemonCardTpl from '../templates/pokemon-card.hbs';

const refs = {
  cardContainer: document.querySelector('.js-card-container'),
  searchForm: document.querySelector('.js-search-form'),
};

refs.searchForm.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();

  const form = e.currentTarget;
  const searchQuery = form.elements.query.value;

  fetchPokemon(searchQuery)
    .then(renderPokemonCard)
    .catch(onFetchError)
    .finally(() => form.reset());
}

function fetchPokemon(pokemonId) {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;

  return fetch(url).then(response => response.json());
}

function onFetchError(error) {
  alert('Щось пійшло не так, ми не знайшли вашого покемона(');
}
