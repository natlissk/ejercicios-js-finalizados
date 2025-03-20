//Ejercicio 2.1: Dado el array [3, 7, 2, 9, 5], calcula su suma usando for o for...of.
 
const numeros =  [3, 7, 2, 9, 5];
let suma = 0 ;
 
for(let num of numeros){
    suma += num;
}
 
console.log(suma);

//cicio 2.2: Encuentra el número mayor en el array [12, 45, 6, 89, 23].
const nUmeros = [12, 45, 6, 89, 23];
let maximo = numeros[0];
 
for(let num of numeros){
    if (num > maximo){
        maximo = num
    }
}
 
console.log(maximo);

//Ejercicio 2.3: Filtra los números menores a 10 del array [15, 3, 8, 12, 1] y crea un nuevo array.
const numeros = [15, 3, 8, 12, 1];
const menoesA10 = numeros.filter(num => num < 10);
 
console.log(menoesA10);