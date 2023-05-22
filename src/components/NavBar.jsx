import React from 'react'


const NavBar = ({ handleLess, handleClick }) => {
    return (
      <nav>
        <button onClick={handleLess}id="previous-btn">Précédent</button>
        <button onClick={handleClick}id="next-btn">Suivant</button>
      </nav>
    );
  };

export default NavBar