/*Crear una funcion que tome un numero
como argumento y devuelva la cadena
si el numero es par o impar */

function  esParOIpar(numero) {
    if (numero % 2 ==0 ) {
        return "El numero es Par";
    } else{
         return "El numero es Impar" ;
     }
}
console.log(esParOIpar(15));
console.log(esParOIpar(8));