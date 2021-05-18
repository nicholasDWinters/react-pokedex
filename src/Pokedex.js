import React from 'react';
import Pokecard from './Pokecard';



const Pokedex = (props) => {

    return (
        <>
            <h1>Pokedex</h1>
            {props.pokemon.map(p => <Pokecard key={p.id} id={p.id} name={p.name} type={p.type} baseExp={p.base_experience} />)}

        </>
    );
};

export default Pokedex;