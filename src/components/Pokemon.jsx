import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import getType from "../utils/getType";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState({});
  const [stats, setStats] = useState([]);
  const [moves, setMoves] = useState([]);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) => {
      setPokemon(res.data);
      setStats(res.data.stats);
      setMoves(res.data.moves);
    });
  }, [id]);

  return (
    <div style={{ backgroundColor: getType(pokemon.types?.[0].type.name) }}>
      <header>
        <img src="../assets/pokedex-title.png" alt="" />
      </header>
      <button onClick={() => navigate("/pokedex")} className="btn-return">
        <i className="fa-solid fa-arrow-rotate-left"></i>
      </button>
      <div className="single-pokemon-page">
        <div className="bg-white first">
          <h1 className="titles">{pokemon.name}</h1>
          <img src={pokemon.sprites?.front_default} alt="poke-sprite" className="main-pic" />
        </div>
        <div className="bg-white second d-flex">
          <p style={{ backgroundColor: getType(pokemon.types?.[0].type.name) }} className="titles">
            {pokemon.types?.[0].type.name}
          </p>
          <p style={{ backgroundColor: getType(pokemon.types?.[1]?.type.name) }} className="titles">
            {pokemon.types?.[1]?.type.name}
          </p>
        </div>
        <div className="bg-white third">
          <h1>Stats</h1>
          {
            stats.map((stat) => (
                <p key={stat.stat?.name} className="titles">
                <b>{stat.stat?.name}: </b>{stat.base_stat}</p>
            ))
          }
        </div>
        <div className="bg-white fourth">
          <h1>Moves</h1>
          <div className="d-flex">
          {
            moves.map((move) => (
                <p key={move.move?.name} className="titles">{move.move?.name}</p>
            ))
          }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
