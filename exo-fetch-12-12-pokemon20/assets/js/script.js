// https://pokebuildapi.fr/api/v1/pokemon/limit/20



async function getPokemons(){
    const promise = await fetch('https://pokebuildapi.fr/api/v1/pokemon/limit/20');
    if(promise.ok === true){
        let pokemons = await promise.json();
        return pokemons;
    }else{
        alert('promise non ok');
    }
}

async function showPokemons(pokemons){
    console.log(pokemons);
    const pokemonsContainer = document.querySelector('.pokemonsContainer');
    
    pokemons.forEach((pokemon) =>{
        console.log(pokemon); 
        
    const pokemonContainer = document.createElement('article');
    const h3Element = document.createElement('h3');
    const ulElement = document.createElement('ul');
    const liElementId = document.createElement('li');
    const liElementPokedexId = document.createElement('li');
    const liElementName = document.createElement('li');
    const imgPokeballElement = document.createElement('img');
    
    const ulElement2 = document.createElement('ul');
    
    const imgElement = document.createElement('img');
    const imgElement2 = document.createElement('img');
    
    imgPokeballElement.setAttribute('src', './assets/img/pokeball.png');
    imgPokeballElement.setAttribute('alt', "illustration d'une pokeball");
    imgPokeballElement.setAttribute('id', 'pokeball');
    imgPokeballElement.setAttribute('title', 'Cliquez');

    const h3Content = document.createTextNode(pokemon.name + ' ' + pokemon.pokedexId);
    const idContent = document.createTextNode('id : ' + pokemon.id);
    const PokedexIdContent = document.createTextNode('PokedexId : ' + pokemon.pokedexId);
    const nameContent = document.createTextNode('name : ' + pokemon.name);
    

    const statsContent = document.createTextNode('STATS : ' + 'HP :' + ' ' + pokemon.stats.HP + ' , ' 
        + 'Attack :' + ' ' + pokemon.stats.attack + ' , ' 
        + 'Defense :' + ' ' + pokemon.stats.defense + ' , ' 
        + 'Special attack :' + ' ' + pokemon.stats.special_attack + ' , '
        + 'Special_defense :' + ' ' + pokemon.stats.special_defense + ' , '
        + 'Speed :' + ' ' + pokemon.stats.speed);
    

    imgElement.setAttribute('src', pokemon.image);
    imgElement.setAttribute('alt', 'image de ' + pokemon.name + ' ' + pokemon.pokedexId);
    imgElement.setAttribute('id', 'picture1');
    
    imgElement2.setAttribute('src', pokemon.sprite);
    imgElement2.setAttribute('alt', 'image de ' + pokemon.name );
    imgElement2.setAttribute('id', 'picture2');


    h3Element.appendChild(h3Content);
    liElementId.appendChild(idContent);
    liElementPokedexId.appendChild(PokedexIdContent);
    liElementName.appendChild(nameContent);
    
    
    ulElement.appendChild(liElementId);
    ulElement.appendChild(liElementPokedexId);
    ulElement.appendChild(liElementName);
    
    ulElement2.appendChild(statsContent);
    
    ulElement2.setAttribute('id', 'stats');

    pokemonContainer.appendChild(h3Element);
    pokemonContainer.appendChild(ulElement);

    const typeBox = document.createElement('div');
    const ulElementType = document.createElement('ul');
        pokemon.apiTypes.forEach((type)=>{
       
            const liElementType = document.createElement('li');
            const typeContent = document.createTextNode( 'Types :'+ ' ' + type.name);
    
            ulElementType.appendChild(liElementType);
            liElementType.appendChild(typeContent);
            ulElementType.appendChild(liElementType);
            
            
            pokemonContainer.appendChild(ulElementType);
            ulElementType.setAttribute('id', 'formUlType');
    //  ---------------      
            const imgElement = document.createElement('img');
            imgElement.setAttribute('src', type.image);
            liElementType.appendChild(imgElement);
            ulElementType.appendChild(liElementType);
            liElementType.setAttribute('id', 'formType');
            
     });
     
     
    pokemonContainer.appendChild(imgElement);
    pokemonContainer.appendChild(imgElement2);
    pokemonContainer.appendChild(ulElement2);
    pokemonsContainer.appendChild(pokemonContainer);
    
    pokemonContainer.appendChild(imgPokeballElement);
    pokemonsContainer.appendChild(pokemonContainer);
    
    


    switch (pokemon.apiTypes[0].name) {
        case 'Poison':
        pokemonContainer.classList.add('poison');
    break;
        case 'Feu':
            pokemonContainer.classList.add('feu');
    break;
        case 'Eau':
            pokemonContainer.classList.add('eau');
    break;
        case 'Insecte':
            pokemonContainer.classList.add('insecte');
    break;
        case 'Vol':
            pokemonContainer.classList.add('vol');
    break;
        case 'Normal':
            pokemonContainer.classList.add('normal');
    break;
    
    break;
  default:
}
    imgPokeballElement.addEventListener('click', ()=>{
        localStorage.setItem('pokemonId', pokemon.id)
        window.location.href = "showPokemon.html";
    });
    });
}

getPokemons().then(pokemons => showPokemons(pokemons));
    


