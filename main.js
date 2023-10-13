"use strict";

// Crear la estructura del HTML
// poner clases de JS a los elementos de HTML
// sacar los elementos de HTML que vayamos a utilizar
//crear un numero aleatorio
//crear una funcion para convertir el num aleatorio en piedra, papel y tijera
//Escuchar el evento con su funcion manejadora
//obtener value de la usuaria, ejecutar la funcion del dato del ordenador
//comparar el dato de la usuaria y del ordenador y decidir quien gano, perdio o empato.


//Poner event.PreventDefault() solo si es necesario.
//crear la función para recoger los valores
//dentro de handleClick hacer toda la lógica de lo que estan pidiendo
//Hacer las condicionales para que aparezca el mensaje si empata, pierde o gana

const selectUser = document.querySelector(".js-select");//seleccion de la usuaria
const btnPlay = document.querySelector(".js-btn-play");//boton
const msj = document.querySelector(".js-msj");//pintar el resultado
const btnReset = document.querySelector(".js-reiniciar-game");

const pJugador = document.querySelector(".js-p-jugador");
const pComputadora = document.querySelector(".js-p-computadora");


//variable para guardar el score y otra con el contador

let playerScore = 0;//va a ir cambiando, no puede ser const
let pcScore = 0;
let moves = 0;

/*const piedra = document.querySelector('.js-piedra');
const papel = document.querySelector('.js-papel');
const tijera = document.querySelector('.js-tijera');*/

//const valueMsj = select.value;
//función generar piedra, papel, tijera (numeros del 1-3 = piedra; 4-6 = papel; 7-9 = tijera) aleatorios
//maximo 10 jugadas
 
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);//las funciones con return devuelven un valor, y yo para poder utilizarlo tengo que guardarlo en algun lugar
}
//console.log(getRandomNumber(9));

function generarJugadaPc() {//solo esta hehco el piedra
 const random = getRandomNumber(9);//siempre que hay una funcion con return necesito guardar lo que retorna. 
  let pcValue ='';
  if (random >= 7) {
    pcValue = 'Papel'//return pcValue;
  } else if (random >= 4) {
    pcValue = 'Piedra'
  } else {
    pcValue = 'Tijera'
  }
  return pcValue;//tambien se puede poner el retunr en cada caso
}


function painScore(){
  pJugador.innerHTML = playerScore;
  pComputadora.innerHTML = pcScore;
}

function playGame(){
  const valuePc = generarJugadaPc();
  const valueUser = selectUser.value;
  console.log('mov ordenador' + valuePc)
  console.log('mov usuaria' + valueUser)

  if(valueUser !== ''){
    moves++;
  if (valuePc === valueUser){
    msj.innerHTML = 'Empate';
  }
   else if (valueUser === 'Piedra'){
   if (valuePc === 'Tijera'){
    msj.innerHTML = '¡Has ganado!';
    playerScore++;
   }
 else {
    msj.innerHTML = '¡Has perdido!';
    pcScore++;
  }
  }

  else if (valueUser === 'Papel'){
    if (valuePc === 'Tijera'){
     msj.innerHTML = '¡Has perdido!';
     pcScore++;//cuando hay contadores o acumuladores de datos --- NUNCA TRABAJADOMOS CON EL HTML DIRECTAMENTE, usamos una variable.
    }
  else {
     msj.innerHTML = '¡Has ganado!';
     playerScore++;
   }
   }

   else if (valueUser === 'Tijera'){
    if (valuePc === 'Piedra'){
     msj.innerHTML = '¡Has perdido!';
     pcScore++;
    }
  else {
     msj.innerHTML = '¡Has ganado!';
     playerScore++;
   }
   }
   painScore();
}}

function gameOver(){
  if (moves >= 10){
    btnReset.classList.remove('hidden');
    btnPlay.classList.add('hidden');
   
  if (pcScore > playerScore){
    //gano pc
  } else if (playerScore > pcScore) {
    //gano usuaria
   } else {
    //empate
  }
}
};

/*
(userSelection === "piedra" && pcSelection === "tijera") || 

(userSelection === "papel" && pcSelection === "piedra") || 

(userSelection === "tijera" && pcSelection === "papel")*/

//ejecutar la funcion manejadora
function handleClick(event) {
  event.preventDefault();
  playGame();
  gameOver()
   
  //changeSelector();
  // console.log(numeroAleatorio);
 }


btnPlay.addEventListener("click", handleClick);


/*hacer condicionales
 si sale piedra vs piedra === empate
 si sale piedra vs papel ==> pierde
 si sale piedra vs tijera ==> gana

 si sale papel vs papel === empate
 si sale papel vs piedra ==> gana
 si sale papel vs tijera ==> pierde

 si sale tijera vs piedra === pierde
 si sale tijera vs papel ==> gana
 si sale tijera vs tijera ==> empate
*/


