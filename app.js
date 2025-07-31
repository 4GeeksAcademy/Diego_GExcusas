import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//Creamos los arrays con las frases
let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

//Declaramos el string que se va a generar
let excusa;

//console.log("Hello Rigo from the console!");

//Este método hará que se genere una nueva excusa al recargar la página
window.onload = function() {
  //write your code here
  //Obtenemos una posicion aleatoria de cada array
  let quien = who[Math.floor(Math.random() * who.length)]; 
  let accion = action[Math.floor(Math.random() * who.length)];
  let que = what[Math.floor(Math.random() * who.length)];
  let cuando = when[Math.floor(Math.random() * who.length)];

  

  excusa = quien + " " + accion + " " + que + " " + " " + cuando;

  //enviamos la frase al HTML
  document.getElementById('excusa').textContent = excusa;
  
}
