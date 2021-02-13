import React from "react";
import "./PokeLists.css";
import PokemonCards from "../PokemonCards/PokemonCards";
import { requestPokemon } from "../ApiCall/ApiCall";
import { getPokemonURL } from "../ApiCall/ApiCall";

const { useState, useEffect } = React;

const PokeLists = () => {
  const [pokemon, setPokemon] = useState([]);

  const fetchPokemon = async () => {
    try {
      const data = await requestPokemon();
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonURL(pokemon.url);
      });
      const results = await Promise.all(promises);
      setPokemon(results);
    } catch (err) {}
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <div className="container__pokemon__cards">
      {pokemon.map((pokemon) => {
        return (
          <PokemonCards pokemon={pokemon} key={pokemon.name}></PokemonCards>
        );
      })}
    </div>
  );
};

export default PokeLists;
