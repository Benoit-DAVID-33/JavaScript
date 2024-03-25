// const users = [
//     { id : 1 , name : 'Atif', lastaname : 'Zourgani', age : 26 , mail : 'dev@gmail.com' , mdp : 'devdu33' , picture : 'atif.png' , city : 'Merignac' , role : 'admin'},
//     { id : 2 , name : 'Mickael', lastaname : 'Durand', age : 22 , mail : 'mickaD@gmail.com' , mdp : 'riderdu33' , picture : 'mickael.png' , city : 'Blanquefort' , role : 'user'},
//     { id : 3 , name : 'Benoit', lastaname : 'David', age : 28 , mail : 'benoit@gmail.com' , mdp : 'balaisedu33' , picture : 'benoit.png' , city : 'loin' , role : 'user'},
//     { id : 1 , name : 'Maurane', lastaname : 'h', age : 22 , mail : 'maurane@gmail.com' , mdp : 'shapeduu33' , picture : 'maurane.png' , city : 'Bordeaux' , role : 'user'},
//     { id : 1 , name : 'Julia', lastaname : 'DelCartel', age : 26 , mail : 'julia@gmail.com' , mdp : 'mixicanosdu33' , picture : 'julia.png' , city : 'Merignac' , role : 'user'},
//     { id : 1 , name : 'Olivier', lastaname : 'desgateauxpouratif', age : 26 , mail : 'olivier@gmail.com' , mdp : 'desgateauxpouratif' , picture : 'olivier.png' , city : 'Bordeaux' , role : 'user'},
//     { id : 1 , name : 'Fouz', lastaname : 'Wayne', age : 26 , mail : 'fouz@gmail.com' , mdp : 'marocdu33' , picture : 'fouz.png' , city : 'lenord' , role : 'user'},
//     { id : 1 , name : 'claude', lastaname : 'Mrrobot', age : 20 , mail : 'claude@gmail.com' , mdp : 'claudedu33' , picture : 'claude.png' , city : 'loinaussi' , role : 'user'},
//     { id : 1 , name : 'Bryan', lastaname : 'B', age : 25 , mail : 'bryan@gmail.com' , mdp : 'soldiergamerdu33' , picture : 'bryan.png' , city : 'Bordeaux' , role : 'user'},
//     { id : 1 , name : 'ludivine', lastaname : 'viana', age : 26 , mail : 'ludivine@gmail.com' , mdp : 'deleguedu33' , picture : 'ludivine.png' , city : 'Bordeaux' , role : 'user'},
// ] ;

//console.log(users);

//page de login
//1 - faire un formulaire de login
//2 - A l'envoi un form déclencher une function "loginByMailAndMdp"
//2.5 - reucperer les value du form
//3 - dans la function boucler sur chaque elements du tableau user pour comparer mail et mdp
//4 - dans le cas ou le mdp et le mail concorde on redirige vers home page
//5 - gerer les cas ou l'une des deux values est fausse et envoyer un message d'information à la vue

// afficher l'heure et la date
// new date
//stTimout

/*function loginByMailAndMdp(){
    const btn = document.getElementById('btn');
    btn.addEventListener('click', ()=>{loginByMailAndMdp;
  
        const userMail = document.getElementById('email').value;
        const userMdp = document.getElementById('password').value;


        users.forEach((user)=>{
            if(userMail === user.mail){
            
                console.log('trouvé');
                console.log(user);
                console.log(user.mail);
        
                console.log('Entrez');
                }
                if(userMdp === user.mdp){
                
                console.log('Entrez');
                alert('Entrez')
                window.location.href = 'home.html';
            
                }else{
                console.log('Erreur 404');
                alert('erreur 404');
        }
        
  });
    
})}    */

//loginByMailAndMdp();

/* correction ---*/


const logginForm = document.getElementById('logginForm');
const messageContainer = document.getElementById('message');

logginForm.addEventListener('submit', (e)=>{
    const userEmail = document.getElementById('email').value;
    const userMdp =document.getElementById('password').value;
    
    e.preventDefault();
    if(userEmail && userMdp){
        users.forEach((user)=>{
            if(userEmail === user.mail){
                if(userMdp === user.mdp){
                    document.location.href="home.html";
                }else{
                    messageContainer.innerHTML = 'login false';
                }
            }
        });
    }else{
        messageContainer.innerHTML = 'un ou plusieurs champs sont vides';
    }
});

//------------ FIN


// -------- LocalStorage ---------- */

// btn.onclick =()=>{
//     localStorage.setItem('email' , email.value);
// };



// const articleContainer = document.getElementById('article');

// articleContainer.innerHTML = users;

// console.log(users);

/* exemple -------- */

let value = 'toto';

function first(){
    console.log('value dans first', value);
    
    second();
}

function second(){
    console.log('value dans second', value);
    
    last();
}

function last(){
    console.log('value dans last', value);
}

first();

/*-------------------- heure date ----------------*/

//let date = new date.now();
//console.log(date);

//          function refresh(){
//              var t = 1000; // rafraîchissement en millisecondes
//              setTimeout('showDate()',t);
//          }
         
//          function showDate() {
//              var date = new Date();
//              var h = date.getHours();
//              var m = date.getMinutes();
//              var s = date.getSeconds();
//              if( h < 10 ){ h = '0' + h; }
//              if( m < 10 ){ m = '0' + m; }
//              if( s < 10 ){ s = '0' + s; }
//              var time = h + ':' + m + ':' + s ;
//              document.getElementById('horloge').innerHTML = time;
//              refresh();
//           }
// showDate();



// var now = new Date();

// var annee   = now.getFullYear();
// var mois    = ('0'+now.getMonth()+1).slice(-2);
// var jour    = ('0'+now.getDate()   ).slice(-2);
// var heure   = ('0'+now.getHours()  ).slice(-2);
// var minute  = ('0'+now.getMinutes()).slice(-2);
// var seconde = ('0'+now.getSeconds()).slice(-2);

// alert( "Nous sommes le "+jour+"/"+mois+"/"+annee+" et il est "+heure+" heure "+minute+" minutes "+seconde+" secondes" );



// récupérer les elements du formulaire sans rechargement!!////////////////

//const loginForm = docuement.getElementById('logginForm';)

//loginForm.addEventListener('submit', (e)=>{
 //   e.preventDefault();
//}



const startChrono = document.getElementById('startChrono');
const startI = 10;
const chronoContainer = document.getElementById('chrono');

function chrono(startI){
    if(startI >= 0){
        chronoContainer.innerHTML = startI;
        startI = startI -1;
        setTimeout(()=>{chrono(startI)}, 1000);
        
    }else{
        chronoContainer.innerHTML = 'fini';
    }
    
}

startChrono.addEventListener('click', ()=>{
    chrono(startI);
});




