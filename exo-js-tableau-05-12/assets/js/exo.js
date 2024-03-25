// /*const pokemons = [
//     ['pikachu', 'jaune', 12],
//     ['bulbizarre', 'vert', 1],
//     ['carapuce', 'bleu', 5]
// ];


// document.getElementById("poke1").innerHTML = pokemons[0];
// document.getElementById("poke2").innerHTML = pokemons[1];
// document.getElementById("poke3").innerHTML = pokemons[2];

// console.log('pokemons');


// /*const pokemonContainer=document.getElementById('pokemonContainer');
// pokemonContainer.innerHTML = '<h1 class="title">'  + 'Mon Pokemon ' + pokemons[0][0] + '</h1>';


// pokemons.forEach((pokemon, i)=>{
//     console.log(pokemon);
//     console.log(i);
// })*/


// /*-----------------------------------------------------*/


// /*const pikachu = ['pikachu', 025, 'Electrik', 'pikachu.png'];
// const pokemonContainer = document.querySelector('.pokemonContainer');

// //create element -> methode qui permet de créer un element html
// const articleElement = document.createElement('article');
// const h1Element = document.createElement('h1');
// const numbElement = document.createElement('p');
// const typeElement = document.createElement('p');
// const imgElement = document.createElement('img');

// // creat texte node -> methode qui me permet de créer le contenu a injecté
// let h1Content = document.createTextNode(pikachu[0]);
// let numbContent = document.createTextNode(pikachu[1]);
// let typeContent = document.createTextNode(pikachu[2]);
// console.log()

// // appenchild -> methode qui permet de donner un enfant à un element
// articleElement.appendChild(h1Element);
// articleElement.appendChild(numbElement);
// articleElement.appendChild(typeElement);
// articleElement.appendChild(imgElement);
// console.log(articleElement);


// h1Element.appendChild(h1Content);
// numbElement.appendChild(numbContent);
// typeElement.appendChild(typeContent);

// // j'utilise appendchild pour donner en enfant mon elements articleElement, a un element sur mon dom (html)
// pokemonContainer.appendChild(articleElement);
// console.log(articleElement);*/

//---------------------------------------


// const pokemons = [
//     ['pikachu', 025, 'Electrik', 'Pikachu.png'],
//     ['Onix', 042, 'Pierre', 'dragofeu.png'],
//     ['Tortank', 009, 'eau', 'evoli.png'],
//     ['Bulbizarre', 110, 'herbe', 'bulbizare.png'],
// ];

// const pokemonsJson =[
//     { name : 'bulbimerde', number: 007, categorie : 'plantophile', img: 'dragofeu.png'},
//     { name : 'dragopute', number: 69, categorie : 'feurougeOphile', img: 'Pikachu.png'},
//     { name : 'tortue4L', number: 000, categorie: 'casseauto', img: 'bulbizare.png'},
//     { name : 'oniXXL', number: 445, categorie: 'fosseseptique', img: 'evoli.png'},
    
    
// ];

// const pokemonContainer = document.querySelector('.pokemonsContainer');

// pokemonsJson.forEach((pokemon)=>{
 
        
// const articleElement = document.createElement('article');
// const h1Element = document.createElement('h1');
// const numbElement = document.createElement('p');
// const typeElement = document.createElement('p');
// const imgElement = document.createElement('img');


// let h1Content = document.createTextNode(pokemon.name);
// let numbContent = document.createTextNode(pokemon.number);
// let typeContent = document.createTextNode(pokemon.categorie);

// //création des attributs de l'element img
// imgElement.setAttribute('src', 'assets/img/' + pokemon.img);
// imgElement.setAttribute('alt', 'image du pokemon ' + pokemon.name);

// // appenchild -> methode qui permet de donner un enfant a un element
// articleElement.appendChild(h1Element);
// articleElement.appendChild(numbElement);
// articleElement.appendChild(typeElement);
// articleElement.appendChild(imgElement);

// h1Element.appendChild(h1Content);
// numbElement.appendChild(numbContent);
// typeElement.appendChild(typeContent);

// // j'utilse appendchild pour donner en enfant mon element articleElement, a un element
// pokemonContainer.appendChild(articleElement);
// });
// pokemons.forEach((pokemon)=>{
    
//     console.log(pokemons);
// });

// /*console.log(articleElement);

// /*1- utilsant le meme système de creation de noeud et en utilsant un foreach. 
// afficher tout les elements "pokemon" de mon array pokemons

// 2- gerer les images*/

//--------------------------------------------

// const btn=document.getElementById('btn');
// const input=document.getElementById('txt'); 

// let valueBefore = input.value;

// btn.addEventListener('click', ()=>{
//   let valueAfter = input.value;
//   console.log(valueBefore);
//   console.log(valueAfter);
//   alert(valueAfter);
// });

//---------------------------------------

// const btn = document.getElementById('btn');
// const form= document.getElementById('form');

// btn.addEventListener('click', ()=>{
//     let valueForm  = form.value;
//     console.log(valueForm);
// });
//-------------------------------------------


// const agePays = [
//     ['france', 18],
//     ['usa', 21],
//     ['japon', 18]
// ];



// // let valueAge = age.value;
// // let valuePays = pays.value;

// //console.log(valueAge);

// function majeur(){
//     const age=document.getElementById('age');
//     const pays=document.getElementById('country');
    
//     if (pays === 'france' && age >= 18 ){
//         alert('bienvenue');
//     }else{
//         alert('erreur');
//     }
// }  

// function check(){
//              let nbr;
//              nbr = Number(document.getElementById("age").value);
//              if(nbr < 18)
//              {
//                 alert("Vous n'êtes pas un adulte");
//              }
//              else
//              {
//                 alert("Vous êtes un adulte");
//              }
//          }

// console.log(agePays);
//-----------------------
const majorityByCountries = [
    { country: 'France', majority: 18},
    { country: 'USA', majority: 21},
    { country: 'Arabie saoudite', majority: 15},
    { country: 'japon', majority: 18},
    { country: 'Tadjikistant', majority: 17},
    { country: 'Yémen', majority: 15},
    { country: 'Jamaique', majority: 16},
    { country: 'Honduras', majority: 21},
    { country: 'Espagne', majority: 18}
];
//cible l'element qui porte l'id btn dans le dom
const btn = document.getElementById('btn');

function selectCountry(){
    //selectionner mon element ou injecter mon noeud
    const selectContainer = document.getElementById('selectCountry');
    
    majorityByCountries.forEach((majorityByCountry) => {
        
        //creation de l'element option
        const optionElement = document.createElement('option');
        //creation d'un contenu 
        const optionContent = document.createTextNode(majorityByCountry.country);
        //mon contenu devient enfant de mon contenant
        optionElement.appendChild(optionContent);
        //creation de l'attribut value et de son contenu
        optionElement.setAttribute('value', majorityByCountry.country);
        //mon element option devien l'enfant de mon select container
        selectContainer.appendChild(optionElement);
});
}
    

//ecoute d'event sur btn pour lancer la function =>
btn.addEventListener('click', ()=>{
    //stock la valeur de l'input qui porte l'id ageInpute dans la varaible userAge
    const userAge = document.getElementById('ageInput').value;
    //stock la value de l'input qui porte l'id selectCountry dans la variable userCountry
    const userCountry = document.getElementById('selectCountry').value;

    //boucle sur chaque elements du tableau majorityByCountries (appelle ces elements majorityByCountry)  
    majorityByCountries.forEach((majorityByCountry)=>{
        //condition -> si la value dans l'input est strictement egal 
        if(userCountry === majorityByCountry.country){
            //si la première condition est respecté
            //condition -> si la value dans userAge est > ou = a la value dans majorityByCountry qui porte la key majority
            console.log('trouvé');
            console.log(majorityByCountry);
            console.log(majorityByCountry.majority);
            //window.location.href = 'index.html':
            if(userAge >= majorityByCountry.majority){
                //si la condition est respecté on utilise windows location pour rediriger vers la page "home"
                console.log('majeur');
            //sinon (si il est pas majeur il est forcement mineur alors pas besoin de faire de condition)
            }else{
                console.log('mineur');
            //si la condition est respecté j'injecte grace a innerHTML la phrase concatené
            //document.getElementById('modalMessage').innerHTML = 'En ' + userCountry + ' a ' + userAge + ' ans, vous êtes mineur.'
        }
        }
    });
    
});

//execute la fonction selectCountry au chargement de la page
selectCountry();








