import { useState } from 'react'
import PokemonCard from './components/PokemonCard'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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



  // return (
  //   <div>
  //     <PokemonCard pokemon={pokemon}/>
  //   </div>

  // );


  // STATE DES ETATS D'AME ERIC //



const [pokemonIndex, setPokemonIndex] = useState(0);

const handleClick = () => {
  setPokemonIndex(pokemonIndex +1);
}

const handleLess = () => {
  setPokemonIndex(pokemonIndex -1);
}

const pokemon = pokemonList[pokemonIndex];

return (
  <>
  <PokemonCard pokemon={pokemon} />
  {pokemonIndex > 0 &&<button onClick={handleLess}>Précédent</button>}
  {pokemonIndex < pokemonList.length -1 &&<button onClick={handleClick}>Suivant</button>}
  </>
);
};












export default App
