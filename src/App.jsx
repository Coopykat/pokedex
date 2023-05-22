import { useState } from 'react'
import { useEffect } from 'react';
import PokemonCard from './components/PokemonCard'
import NavBar from './components/NavBar';
import './App.css'


function App() {

  
const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

const [pokemonIndex, setPokemonIndex] = useState(0);

const handleClick = () => {
  const selectedPokemon = pokemonList[pokemonIndex];
  if (selectedPokemon.name === 'pikachu') {
    alert('Pika Pika!');
  }
  setPokemonIndex(pokemonIndex + 1);
};

const handleLess = () => {
  const selectedPokemon = pokemonList[pokemonIndex];
  if (selectedPokemon.name === 'pikachu') {
    alert('Pika Pika!');
  }
  setPokemonIndex(pokemonIndex -1);
}



const pokemon = pokemonList[pokemonIndex];

useEffect(
  () =>  {
    alert('hello pokemon trainer :)')
  }, 
  []
);

return (
  <div>
  <NavBar handleLess={handleLess} handleClick={handleClick}  pokemonList={pokemonList} pokemonIndex={pokemonIndex} />
  <>
    <PokemonCard pokemon={pokemon} />
  </>
</div>
);
};


export default App
