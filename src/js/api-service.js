export function renderPokemonCard(pokemon) {
  const markup = pokemonCardTpl(pokemon);
  refs.cardContainer.innerHTML = markup;
}
