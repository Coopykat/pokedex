import PropTypes from "prop-types";

function PokemonCard({pokemon}) {

   return (
   <figure className="card_img"> 
   {pokemon.imgSrc ? <img src={pokemon.imgSrc} alt={pokemon.name}/> : <p>"???"</p>}  
    <figcaption>{pokemon.name}</figcaption>   
     </figure>
     )   

 }

PokemonCard.propTypes = {
    pokemon : PropTypes.shape({
    name : PropTypes.string.isRequired,
    ImgSrc : PropTypes.bool,
})

}




export default PokemonCard