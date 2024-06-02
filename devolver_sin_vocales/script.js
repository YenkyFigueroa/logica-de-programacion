/*Escribe una funcion que tome una cadena y
devuelva una nueva sin vocales */

function  eliminarVocales(cadena){
    return cadena.split('')
    .filter(letra => !"aeiouAEIOU"
    .includes(letra.toLowerCase()))
    .join('');
}
console.log(eliminarVocales("Hola como estas")); 
console.log(eliminarVocales("Programacion en JavaScript es facil"));  