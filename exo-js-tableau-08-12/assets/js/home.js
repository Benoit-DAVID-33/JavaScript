// const users = [
//     { id : 1 , name : 'Atif', lastaname : 'Zourgani', age : 26 , mail : 'dev@gmail.com' , mdp : 'devdu33' , picture : 'assets/img/face4.jpg' , city : 'Merignac' , role : 'admin'},
//     { id : 2 , name : 'Mickael', lastaname : 'Durand', age : 22 , mail : 'mickaD@gmail.com' , mdp : 'riderdu33' , picture : 'assets/img/face3.jpg' , city : 'Blanquefort' , role : 'user'},
//     { id : 3 , name : 'Benoit', lastaname : 'David', age : 28 , mail : 'benoit@gmail.com' , mdp : 'balaisedu33' , picture : 'assets/img/face9.jpg' , city : 'loin' , role : 'user'},
//     { id : 4 , name : 'Maurane', lastaname : 'h', age : 22 , mail : 'maurane@gmail.com' , mdp : 'shapeduu33' , picture : 'assets/img/face7.jpg' , city : 'Bordeaux' , role : 'user'},
//     { id : 5 , name : 'Julia', lastaname : 'DelCartel', age : 26 , mail : 'julia@gmail.com' , mdp : 'mixicanosdu33' , picture : 'assets/img/face7.jpeg' , city : 'Merignac' , role : 'user'},
//     { id : 6 , name : 'Olivier', lastaname : 'desgateauxpouratif', age : 26 , mail : 'olivier@gmail.com' , mdp : 'desgateauxpouratif' , picture : 'assets/img/face6.jpg' , city : 'Bordeaux' , role : 'user'},
//     { id : 7 , name : 'Fouz', lastaname : 'Wayne', age : 26 , mail : 'fouz@gmail.com' , mdp : 'marocdu33' , picture : 'assets/img/face8.png' , city : 'lenord' , role : 'user'},
//     { id : 8 , name : 'claude', lastaname : 'Mrrobot', age : 20 , mail : 'claude@gmail.com' , mdp : 'claudedu33' , picture : 'assets/img/face2.jpg' , city : 'loinaussi' , role : 'user'},
//     { id : 9 , name : 'Bryan', lastaname : 'B', age : 25 , mail : 'bryan@gmail.com' , mdp : 'soldiergamerdu33' , picture : 'assets/img/face5.jpg' , city : 'Bordeaux' , role : 'user'},
//     { id : 10 , name : 'ludivine', lastaname : 'viana', age : 26 , mail : 'ludivine@gmail.com' , mdp : 'deleguedu33' , picture : 'assets/img/face10.jpg' , city : 'Bordeaux' , role : 'user'},
// ] ;

const articleContainer = document.getElementById('article');

//option 1

for (const user of users) {
    articleContainer.innerHTML += `<div><p>${user.name}</p><p>${user.lastaname}</p><p>${user.age}</p><p>${user.mail}</p><p>${user.mdp}</p><p>${user.city}</p><p>${user.role}</p><img src=${user.picture}></div>`;
    //articleContainer.innerHTML += `<img src="${user.picture}">`;
}

//option 2

// for (i = 0; i < users.length; i++ ) {
//     articleContainer.innerHTML += "<div>" + "<p>" + users[i].name + "</p>" + "<p>" + users[i].lastaname + "</p>" + "<p>" + users[i].age + "</p>" + "<p>" + users[i].mail + "</p>" + "<p>" + users[i].mdp + "</p>" + "<p>" + users[i].city + "</p>" + "<p>" + users[i].role + "</p>" + "<img src=" + users[i].picture + ">" + "</div>";
// }



// ----------- correction
//import { users } from './users.js';

//console.log(users);
//main.js
import  {users} from './users.js';


// const usersContainer = document.querySelector('.usersContainer');

// users.forEach((user)=>{
//     const userContainer = document.createElement('article');
//     const h3Element = document.createElement('h3');
//     const ulElement = document.createElement('ul');
//     const liElementAge = document.createElement('li');
//     const liElementAdress = document.createElement('li');
//     const liElementMail = document.createElement('li');
//     const liElementRole = document.createElement('li');
//     const imgElement = document.createElement('img');

//     const h3Content = document.createTextNode(user.name + ' ' + user.lastname);
//     const ageContent = document.createTextNode('Age : ' + user.age);
//     const mailContent = document.createTextNode('mail : ' + user.mail);
//     const roleContent = document.createTextNode('role : ' + user.role);
//     const adressContent = document.createTextNode('adress : ' + user.city);

//     imgElement.setAttribute('src', 'assets/img/' + user.picture);
//     imgElement.setAttribute('alt', 'image de ' + user.name + ' ' + user.lastname);

//     h3Element.appendChild(h3Content);
//     liElementRole.appendChild(roleContent);
//     liElementAge.appendChild(ageContent);
//     liElementAdress.appendChild(adressContent);
//     liElementMail.appendChild(mailContent);
//     ulElement.appendChild(liElementAdress);
//     ulElement.appendChild(liElementAge);
//     ulElement.appendChild(liElementMail);
//     ulElement.appendChild(liElementRole);

//     userContainer.appendChild(h3Element);
//     userContainer.appendChild(ulElement);
//     userContainer.appendChild(imgElement);

//     usersContainer.appendChild(userContainer);
// });
//console.log(i);


