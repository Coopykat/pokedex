function PokemonCard() {
// return <figure>
//   <img
//   src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="bulbasaur" />
//   <figcaption>Bulbasaur</figcaption>
//   </figure>
  const pokemon = pokemonList[0]    
   return (
   <figure className="card_img"> 
   {pokemon.imgSrc ? <img src={pokemon.imgSrc} alt={pokemon.name}/> : <p>"???"</p>}  
    <figcaption>{pokemon.name}</figcaption>   
     </figure>
     )   
 }


// AJOUT NOUVELLE FONCTION QUETE TROIS //

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];



export default PokemonCard