import React from 'react';
import './Pokecard.css';

const Pokecard = (props) => {
    let image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`;
    return (
        <div className='Pokecard'>

            <h3 className='Pokecard-name'>{props.name}</h3>
            <img className='Pokecard-img' alt={props.name} src={image} />
            <span className='Pokecard-description'>Type: {props.type}</span>
            <span className='Pokecard-description'>EXP: {props.baseExp}</span>
        </div>
    );
};

export default Pokecard;