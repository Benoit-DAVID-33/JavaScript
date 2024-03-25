for (var i = 1; i < 6; i++) {
    console.log(i);
}

for (var i = 1; i < 10; i=i+2) {
    console.log(i);
}

for (var i = 5; i >= 0; i--) {
    console.log(i);
}

/*for (var i = 1; i < 8; i++) {
    console.log(i*12);
}*/

for (let i=0; i > 7; i++){
    for (let k = 1; k < i; k++){
        console.log(k);
    }
}

const cars=['bmw', 'mercedes', 'audi'];

console.log(cars[0]);

for (let i = 0; i < 3; i++) {
    console.log(cars[i]);
}



/*------------------------------------------------*/




/*let btn=document.querySelector('#idBtn');
let showCar=document.querySelector('#carsOpel');

/*function myAlert(){
    alert ('le click fonctionne');
}*/

/*function showCarOpel(){
    showCar.classList.toggle = "displayNone";
}

btn.addEventListener('click', showCarOpel);*/


/*--------------------------------------------------*/



const carsContainer =document.querySelectorAll('.carsContainer');
const btns = document.querySelectorAll('.idBtn');

/*function showCars(){
    alert('showCars');
    carsContainer.classList.toggle = ("displayNone");
}*/

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', ()=> {
        for(let k = 0; k < carsContainer.length ; k++){
            carsContainer[k].classList.add('displayNone');
        }
            carsContainer[i].classList.toggle('displayNone'); 
            
    });
}


