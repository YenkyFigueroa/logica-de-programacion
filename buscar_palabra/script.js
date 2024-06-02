/*Implementa una funcion que busque la palabra 'llave'
dentro de un arreglo y si lo encuentra, indicar posicion. */

function  buscarPalabra(arr, llave){
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].toLowerCase() === llave) return `La palabra "${llave}" se encuentra en el indice ${i}`;
    }
    return "No se ha encontrado la palabra";
}

const frutas = ['manzana', 'pera', 'platano','kiwi'];
console.log(buscarPalabra(frutas,'kiwi')); // La palabra "kiwi" se encuentra en el indice 3 
console.log(buscarPalabra(frutas,'naranja'));// No se ha encontrado la palabra