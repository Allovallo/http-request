import '../css/common.css';
import pokemonCardTpl from '../templates/pokemon-card.hbs';
import API from './api-service';
import getRefs from './get-refs';

const refs = getRefs();

refs.searchForm.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();

  const form = e.currentTarget;
  const searchQuery = form.elements.query.value;

  API.fetchPokemon(searchQuery)
    .then(renderPokemonCard)
    .catch(onFetchError)
    .finally(() => form.reset());
}

function renderPokemonCard(pokemon) {
  const markup = pokemonCardTpl(pokemon);
  refs.cardContainer.innerHTML = markup;
}

function onFetchError(error) {
  alert('Щось пійшло не так, ми не знайшли вашого покемона(');
}

// ======================================

// fetch(
//   'https://pixabay.com/api/?key=4823621-792051e21e56534e6ae2e472f&q=yellow+flowers&image_type=photo',
// )
//   .then(r => r.json)
//   .then(console.log);

const url = 'https://newsapi.org/v2/everything?q=cars';
const options = {
  headers: {
    Authorization: 'API_KEY',
  },
};

fetch(url, options)
  .then(r => r.json)
  .then(console.log);
