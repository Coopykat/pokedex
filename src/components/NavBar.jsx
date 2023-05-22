import React from 'react'




const NavBar = ({handleLess, handleClick, pokemonList, pokemonIndex }) => {

    const handleNext = () => {
        if (pokemonList[pokemonIndex].name === 'pikachu') {
          alert('Pika Pika!');
        }
        handleClick();
      };

    return (
      <nav>
        <button onClick={handleLess}id="previous-btn">Précédent</button>
        <button onClick={handleClick}id="next-btn">Suivant</button>
      </nav>
    );
  };

export default NavBar;