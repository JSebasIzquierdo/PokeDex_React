import React from "react";
import "./PokemonCards.css";
import { Link } from "react-router-dom";

const PokemonCards = (props) => {
  const { pokemon } = props;

  return (
    <Link className="link__pokemon" to={`/pokemon/${pokemon.name}`}>
      <div className="container__pokemonCards">
        <main className="grid__pokemonCards">
          <article>
            <div id="container__pokemonCards__img">
              <img
                id="pokemon_img"
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
              ></img>
            </div>

            <div id="container__pokemonCards__description">
              <div className="container___pokemonCards__name">
                <h3>{pokemon.name}</h3>
              </div>
              <div className="pokemon__type__container">
                {pokemon.types.map((type, idx) => {
                  return (
                    <div className="pokemon__type" key={idx}>
                      {type.type.name}
                    </div>
                  );
                })}
              </div>
            </div>
          </article>
        </main>
      </div>
    </Link>
  );
};

export default PokemonCards;
