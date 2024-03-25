// async function getPokemons(){
    
//     const promise = await fetch('https://pokebuildapi.fr/api/v1/pokemon/20');
//     if(promise.ok === true){
//         let pokemon = await promise.json();
//         return pokemon;
//         console.log(pokemon);
//     }else{
//         alert('promise non ok');
//     }
// }

// getPokemons();


const pokemonId = localStorage.getItem('pokemonId');

async function getPokemonById(){
    const promise = await fetch('https://pokebuildapi.fr/api/v1/pokemon/' + pokemonId);
    if(promise.ok === true){
        const pokemonById = await promise.json();
        return pokemonById;
    }
}

async function showPokemonById(pokemonById){
    const pokemonContainer = document.querySelector('.pokemonContainer');
    
    const h2Element = document.createElement("h2");
    const imgPokemonElement = document.create('img');
    const ulEvolutionElement = document.createElement('ul');
    
    const h2Content = document.createTextNode(pokemonById.name);
    
    imgPokemonElement.setAttribute('src', pokemonById.image);
    imgPokemonElement.setAttribute('alt', pokemonById.name);
    
    //boucle sur les evolutions du pokemon
    pokemonById.apiEvolutions.forEach((evolution)=>{
        const liEvolutionElement = document.createElement('li');
        const liEvolutionContent = document.createTextNode("L'évolution de ce pokemon");
        liEvolutionElement.appendChild(liEvolutionContent);
        pokemonContainer.appendChild(liEvolutionElement);
        liEvolutionElement.addEventListener('click', ()=>{
            //set mon localstorage
            localStorage.setItem('pokemonId', evolution.pokedexId)
            //au click je redirige vers showpokemon pour y afficher le pokemon clické
            window.location.href = "showPokemon.html";
        });
        
    });
    
    h2Element.appendChild(h2Content);
    
    pokemonContainer.appendChild(h2Element);
    pokemonContainer.appendChild(imgPokemonElement);
    

}

getPokemonById().then(pokemonById => showPokemonById(pokemonById));