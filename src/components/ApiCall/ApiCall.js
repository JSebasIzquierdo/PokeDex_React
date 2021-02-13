export const requestPokemon = async () => {
  try {
    let api_endpoint = `https://pokeapi.co/api/v2/pokemon/?limit=811`;
    const response = await fetch(api_endpoint);
    const data = await response.json();
    return data;
  } catch (err) {}
};

export const getPokemonURL = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {}
};

export const getPokemonDescription = async (name) => {
  console.log(name);
  try {
    let api_endpoint = `https://pokeapi.co/api/v2/pokemon`;
    let api_query = `${api_endpoint}/${name}`;
    const response = await fetch(api_query);
    const data = await response.json();
    return data;
  } catch (err) {}
};


// export const getPokemonAbility = async (name) => {
//   console.log(name);
//   try {
//     let api_endpoint = `https://pokeapi.co/api/v2/ability`;
//     let api_query = `${api_endpoint}/${name}`;
//     console.log(api_query);
//     const response = await fetch(api_query);
//     const data = await response.json();
//     return data;
//   } catch (err) {}
// };
