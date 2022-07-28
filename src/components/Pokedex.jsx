import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import PokemonItem from "./PokemonItem";
import { useNavigate } from "react-router-dom";
import Pagination from "./Pagination";
import pokedex from '../assets/pokedex.png'

const Pokedex = () => {
  const user = useSelector((state) => state.user);

  const [pokemons, setPokemons] = useState([]);
  const [pokemonSearch, setPokemonSearch] = useState("");
  const [types, setTypes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1)
  const [pokemonPerPage] = useState(12)

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon`)
      .then((res) => setPokemons(res.data.results));
    axios.get("https://pokeapi.co/api/v2/type")
      .then((res) => setTypes(res.data.results));
  }, []);

  const search = (e) => {
    e.preventDefault(), navigate(`/pokedex/${pokemonSearch}`);
  };

  const filterType = (e) => {
    axios.get(e.target.value).then((res) => setPokemons(res.data.pokemon));
  };

  const indexOfLastPokemon = currentPage * pokemonPerPage
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonPerPage
  const currentPokemons = pokemons.slice(indexOfFirstPokemon, indexOfLastPokemon)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div>
      <header>
      <img src={pokedex} alt="pokedex title" />
      </header>
      <p className="trainer-title">Welcome <b>{user}</b>!</p>
      <form onSubmit={search} className="search">
        <input
          type="text"
          value={pokemonSearch}
          onChange={(e) => setPokemonSearch(e.target.value)}
          placeholder="Pokemon name..."
        />
        <button><i className="fa-solid fa-magnifying-glass"></i></button>
      </form>
      <div className="div-select">
      <select onChange={filterType}>
        <option value="">Select Type</option>
        {types.map((type) => (
          <option value={type.url} key={type.url}>
            {type.name}
          </option>
        ))}
      </select>
      </div>
      <ul className="d-flex">
        {currentPokemons.map((pokemon) => (
          <div key={pokemon.url ? pokemon.url : pokemon.pokemon.url}>
            <PokemonItem
              pokemonUrl={pokemon.url ? pokemon.url : pokemon.pokemon.url}
              pokemons={currentPokemons}
            />
          </div>
        ))}
      </ul>
      <Pagination 
        pokemonPerPage={pokemonPerPage} 
        totalPokemons={pokemons.length} 
        paginate={paginate}
      />
    </div>
  );
};

export default Pokedex;
