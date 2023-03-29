function PokemonCard({pokemon}) {

   return (
   <figure className="card_img"> 
   {pokemon.imgSrc ? <img src={pokemon.imgSrc} alt={pokemon.name}/> : <p>"???"</p>}  
    <figcaption>{pokemon.name}</figcaption>   
     </figure>
     )   

 }


// AJOUT NOUVELLE FONCTION QUETE TROIS //





export default PokemonCard