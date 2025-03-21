//Ejercicio 7.1: Usa fetch() para obtener datos de la API https://jsonplaceholder.typicode.com/users y muestra los nombres.
fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
        data.forEach(user => console.log(user.name));
    })
    .catch(error => console.error("Error al obtener datos:", error));
 

 

 
 

    

 