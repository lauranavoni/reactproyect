'use strict';

console.log('-------------- index.ES6.js -----------------');
var mensaje = 'Hola ReactJS';
console.log(mensaje);

var suma = function suma(a, b) {
  return a + b;
};
var dobleDe = function dobleDe(a) {
  return 2 * a;
};

var num1 = 6,
    num2 = 19;

console.log('La suma de ' + num1 + ' m\xE1s ' + num2 + ' es ' + suma(num1, num2));
console.log('El doble de ' + num1 + ' es ' + dobleDe(num1));
console.log('---------------------------------------------');
