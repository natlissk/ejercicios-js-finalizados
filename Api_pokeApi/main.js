

async function obtenerUsuarios() {
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1000");
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }
                const data = await response.json();
                const listaUsuarios = document.getElementById("js7.3");
         
                data.results.forEach(user => {
                    const li = document.createElement("li");
                    li.textContent = user.name;
                    listaUsuarios.appendChild(li);
                });
            } catch (error) {
                console.log("Error al obtener datos:", error.message);
            }
        }
         
        obtenerUsuarios();