//Ejercicio 3.1: Convierte esta función a arrow function:
const sumar = (a, b) => a + b;

//Ejercicio 3.2: Crea una arrow function que reciba un número y devuelva su cuadrado.
const cuadrado = num => num * num
 
console.log(cuadrado(4))

//Ejercicio 3.3 (Desafío): Usa una arrow function con map() para duplicar los valores del array [2, 4, 6].
const numeros = [2, 4, 6];
const duplicados = numeros.map(num => num * 2);
 
console.log(duplicados);