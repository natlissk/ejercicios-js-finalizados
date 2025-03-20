//Ejercicio 7.1: Usa fetch() para obtener datos de la API https://jsonplaceholder.typicode.com/users y muestra los nombres.
fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
        data.forEach(user => console.log(user.name));
    })
    .catch(error => console.error("Error al obtener datos:", error));
 
///**Ejercicio 7.3** (Desafío): Combina `async/await` con `fetch` para obtener y mostrar datos de una API pública.
async function obtenerUsuarios() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }
        const data = await response.json();
        data.forEach(user => console.log(user.name));
    }catch (error){
        console.error("Error al obtener datos", error.message);
    }
}
 
obtenerUsuarios();
 

    

 