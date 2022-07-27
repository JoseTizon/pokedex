import React from 'react';

const Pagination = ({ pokemonPerPage, totalPokemons, paginate}) => {

    const pageNumbers = []

    for(let i = 1; i <= Math.ceil(totalPokemons / pokemonPerPage); i++){
        pageNumbers.push(i)
    }

    return (
        <div>
            <ul className='pagination'>
                {
                    pageNumbers.map(number => (
                        <li key={number} className="page-item">
                            <a onClick={() => paginate(number)}>{number}</a>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Pagination;