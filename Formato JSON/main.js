//Ejercicio 4.1: Crea un objeto JavaScript que represente un libro (con título, autor y año) y conviértelo a JSON.
const libro = {
    titulo: "Crepusculo",
    autor: "Stephenie Meyer",
    año:"2005"
};
 
const libroJSON = JSON.stringify(libro);
console.log(libroJSON)

//Ejercicio 4.2: Dado el JSON '{"nombre": "Ana", "edad": 30, "ciudad": "Madrid"}', conviértelo a objeto y muestra la edad.
const jsonString = '{"nombre":"Natalia", "edad": 30, "ciudad": "San Salvador"}';
const persona = JSON.parse(jsonString);
console.group(persona.edad);

//const jsonproductos = '[{"id": 1, "producto": "Lápiz"}, {"id": 2, "producto": "Borrador"}]';
import json
json_data =id '[{"id": 1, "producto": "Lápiz"}, {"id": 2, "producto": "Borrador"}]';
 
productos= json.loads(json_data)
for producto in productos
print (producto['producto'])