console.log("test");

async function getPokemon() {
  const pokemon = await fetch("https://pokeapi.co/api/v2/pokemon");
  const json = await pokemon.json();
  console.log(json);
  console.log(pokemon);
}

getPokemon();
