import '../css/common.css';

fetch('https://pokeapi.co/api/v2/pokemon/ditto')
  .then(r => r.json())
  .then(console.log);
