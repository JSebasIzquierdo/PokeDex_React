import React from "react";
import { getPokemonDescription } from "../ApiCall/ApiCall";
import { getPokemonAbility } from "../ApiCall/ApiCall";
import "./DescriptionPokemon.css";
import LayoutDescription from "../LayoutDescription/LayoutDescription";
const { useState, useEffect } = React;

const DescriptionPokemon = (props) => {
  const pokemon = props.match.params.name;
  const [pokemonName, setPokemonName] = useState([]);
  const [pokemonAbility, setPokemonAbility] = useState([]);

  const fetchPokemonDescription = async () => {
    try {
      const data = await getPokemonDescription(pokemon);
      setPokemonName(data);
    } catch (err) {}
  };

  // const fetchPokemonAbility = async () => {
  //   try {
  //     const data = await getPokemonAbility(pokemon);
  //     setPokemonAbility(data);
  //   } catch (err) {}
  // };

  useEffect(() => {
    fetchPokemonDescription();
  }, []);

  return (
    <LayoutDescription
      pokemonName={pokemonName}
      pokemonAbility={pokemonAbility}
    />
  );
};

export default DescriptionPokemon;
