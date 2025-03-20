//Ejercicio 5.1: Escribe una función que divida dos números. Usa try...catch para manejar división por cero.
function dividir (a, b){
    try{
        if(b === 0 ){
            throw new Error(" tu no lo puedes dividir por cero.");
           
        }
        return a / b
    } catch (error){
        console.log(error.message);
        return null;
    }
   
}
 
 
console.log(dividir(10, 2));
console.log(dividir(8, 0));
 
//Ejercicio 5.1: Escribe una función que divida dos números. Usa try...catch para manejar división por cero.
function dividir (a, b){
    try{
        if(b === 0 ){
            throw new Error(" tu no lo puedes dividir por cero.");
           
        }
        return a / b
    } catch (error){
        console.log(error.message);
        return null;
    }
   
}
 
 
console.log(dividir(10, 2));
console.log(dividir(8, 0));
 
//Ejercicio 5.3 (Desafío): Usa try...catch...finally para asegurar que un mensaje se imprima siempre, haya error o no.
try {
    let x = 10;
   
} catch (error) {
   
    console.log ("ha ocurrido un error.");
 
}finally{
    console.log("Este mensaje se imprimirá siempre, haya error o no.");
}
 

 