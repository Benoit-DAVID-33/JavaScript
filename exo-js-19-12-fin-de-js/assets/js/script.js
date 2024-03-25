clock();

function clock() {
  const date = new Date();
  const hours = ((date.getHours() + 11) % 12 + 1);
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const hour = hours * 30;
  const minute = minutes * 6;
  const second = seconds * 6;
  
  document.querySelector('.heure').style.transform = `rotate(${hour}deg)`;

  document.querySelector('.minute').style.transform = `rotate(${minute}deg)`;

  document.querySelector('.seconde').style.transform = `rotate(${second}deg)`;
}

setInterval(clock, 1000);





/*-------- texte qui clignote -------*/

function blink(Obj) { 

	if (Obj.style.visibility == "visible" ) 

	{ Obj.style.visibility = "hidden"; } 

	else 

	{ Obj.style.visibility = "visible"; } 

}

setInterval("blink(bl)",500); 



/* --------- arc en ciel ------- */


// function changeColor(){
//     if 
    
// }
// setInterval("changeColor()", 500);


 var rainbow = {
  // (A) SETTINGS
  // preset colors
  colors : ["fc0303", "45f52a", "2a7bf5", "2af5e4", "c92af5", "f5dd2a", "66655d"],
  // animation speed
  pause: 1000,
  // holder for all rainbow elements
  target : {}, 
 
  // (B) INITIALIZE RAINBOW EFFECT
  // el : ID of target element
  init : function (el) {
    rainbow.target[el] = {
      now : -1,
      timer : setInterval(function () {
        rainbow.run(el);
      }, rainbow.pause)
    };
  },
 
  // (C) UPDATE COLOR OF TARGET ELEMENT
  // el : ID of target element
  run : function (el) {
    rainbow.target[el].now++;
    if (rainbow.target[el].now >= rainbow.colors.length) { rainbow.target[el].now = 0; }
    document.getElementById(el).style.color = "#" + rainbow.colors[rainbow.target[el].now] ;
  }
};
 
// (D) ATTACH RAINBOW EFFECT ON PAGE LOAD
window.addEventListener("load", function () {
  rainbow.init("thisOne");
  rainbow.init("thisToo");
});



/* ------------ barre de progression ------*/

//Option 1

// var i = 0;
// function move() {
//   if (i == 0) {
//     i = 1;
//     var elem = document.getElementById("myBar");
//     var width = 1;
//     var id = setInterval(frame, 10);
//     function frame() {
//       if (width >= 100) {
//         clearInterval(id);
//         i = 0;
//       } else {
//         width++;
//         elem.style.width = width + "%";
//       }
//     }
//   }
// }

//Option 2

let i = 0;
function move() {
  if (i == 0) {
    i = 1;
    let elem = document.getElementById("myBar");
    let width = 0;
    let id = setInterval(frame, 60);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width + "%";
      }
    }
  }
}

move();

const click = document.getElementById('myBar');
click.addEventListener('click', move);



/* --------- feu tricolor ---------*/



// let lights = document.querySelectorAll('#trafficLight > div'), 
// 	  timers = [5000, 2000, 7000], counter = 0;

// window.addEventListener('load', start); 

// let start = setTimeout(function() {
//     traffic(); 
//   }, 5000);

// function traffic() { 
// 	for (let i=0; i < lights.length; i++) {
// 		lights[i].classList.remove('on');
// 	}
// 	  lights[counter].classList.add('on');
// 	  setTimeout(traffic, timers[counter]);
// 	  counter = (counter + 1) % timers.length;
// }

/* correction ----------*/

let lights = document.querySelectorAll('#trafficLight > div');
let timers = [5000, 2000, 7000];
let counter = timers.length - 1;

window.addEventListener('load', start); 

var start = setTimeout(function() {
    traffic(); 
   }, timers[counter]);

function traffic() { 
	// J'éteins tout le monde
	for (let i=0; i < lights.length; i++) {
		lights[i].classList.remove('on');
	}

	console.log(counter, timers[counter]);

	lights[counter].classList.add('on');
	setTimeout(traffic, timers[counter]);
	counter = counter <= 0 ? timers.length - 1 : counter - 1;
}


/* ---------------- animation ------------- */


function myMove() {
  let id = null;
  const elem = document.getElementById("animate");   
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + "px"; 
      elem.style.left = pos + "px"; 
    }
  }
}

const click2 = document.getElementById('btn');
click2.addEventListener('click', myMove);



/* --------- chargement d'une page différé ---------*/


