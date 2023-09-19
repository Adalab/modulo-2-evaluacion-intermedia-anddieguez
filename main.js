"use strict";

// Crear la estructura del HTML
// poner clases de JS a los elementos de HTML
// sacar los elementos de HTML que vayamos a utilizar
//Escuchar el evento con su funcion manejadora
//Poner event.PreventDefault() solo si es necesario.
//crear la función para recoger los valores
//dentro de handleClick hacer toda la lógica de lo que estan pidiendo
//Hacer las condicionales para que aparezca el mensaje si empata, pierde o gana

const select = document.querySelector('.js-select');
const msj = document.querySelector('.js-msj');
const pJugador = document.querySelector('.js-p-jugador');
const pComputadora = document.querySelector('.js-p-computadora');
const btnPlay = document.querySelector('.js-btn-play');  

//función generar piedra, papel, tijera (numeros del 1-3 = piedra; 4-6 = papel; 7-9 = tijera) aleatorios
//maximo 10 jugadas


/*function getRandomNumber(max) {
    return Math.ceil(Math.random() * 9);
    console.log(getRandomNumber);
   }*/
   
 const randomNumber = parseInt(Math.random(9));
 console.log(randomNumber);

//declarar la funcion
function changeSelector (){
    const valueMsj = select.value;
     msj.innerHTML = valueMsj;
     console.log(msj);
};

//ejecutar la funcion
function handleClick(){
    changeSelector();
}




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

console.log('hola');

btnPlay.addEventListener ("click", handleClick);