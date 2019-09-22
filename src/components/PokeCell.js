import React from 'react';
import sprites from '../assets/sprites.png';
import './style/PokeCell.css';


const PokeCell = ({ pokeClass,handleOnClick }) => {
    // eslint-disable-next-line 
  const { id, backgroundPosition } = pokeClass;
  const style = { backgroundImage: `url(${sprites})`, backgroundPosition };

  return <button onClick={() => handleOnClick(id)} style={style} className="poke-cell"></button>
};

export default PokeCell;
