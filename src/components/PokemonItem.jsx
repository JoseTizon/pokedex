import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import getType from '../utils/getType';

const PokemonItem = ({ pokemonUrl, pokemons }) => {

    const [ pokemon, setPokemon] = useState({})

    const navigate = useNavigate()

    useEffect(() => {
        axios.get(pokemonUrl)
            .then(res => setPokemon(res.data))
    }, [])
    
    return (
        <div onClick={() => navigate(`/pokedex/${pokemon.id}`)} style={{backgroundColor: getType(pokemon.types?.[0].type.name)}} className="poke-card titles">
            <h1>{pokemon.name}</h1>
            <img src={pokemon.sprites?.front_default} alt="" />
        </div>
    );
};

export default PokemonItem;