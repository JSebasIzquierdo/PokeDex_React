import React from "react";
import "./LayoutDescription.css";

const LayoutDescription = (props) => {
  const { pokemonName } = props;

  if (pokemonName.sprites == undefined) {
    return <div>Loading...</div>;
  }
  return (
    <div id="description__container">
      <div>
        <h1>Descripción del Pokémon</h1>
      </div>
      <div id="description__container_img">
        <img
          id="image__description"
          src={pokemonName.sprites.front_default}
        ></img>
      </div>
      <div id="description__container__info">
        <div id="description__info__title">
          <h2>{pokemonName.name}</h2>
        </div>
        <div id="type__container">
          <div>
            <h2>{pokemonName.types.name}</h2>
          </div>
        </div>
        <div>
          <div id="description__info__stats">
            <div id="stats">
              <h3>Salud</h3>
              <h4>{pokemonName.stats[0].base_stat}</h4>
            </div>
            <div id="stats">
              <h3>Ataque</h3> {pokemonName.stats[1].base_stat}
            </div>
            <div id="stats">
              <h3>Defensa</h3> {pokemonName.stats[2].base_stat}
            </div>
            <div id="stats">
              <h3>Velocidad</h3> {pokemonName.stats[5].base_stat}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutDescription;
