/*Crear una funcion que combierta numeros 
en su representacion textual. */

function  convertirNumeroATexto(numero){
    let unidades = ['','uno','dos','tres','cuatro','cinco', 'seis','siete','ocho','nueve','diez'];

    if (typeof numero !== "number") {
        return  "Error, el parametro debe ser de tipo numerico";
    }
    if (numero >= 0  && numero <=10) {
         return unidades[numero];
     } else{
        return  `Error, el parametro debe estar entre  0 y 10`;
    }
}
console.log(convertirNumeroATexto(5)); // devuelve "cinco"
console.log(convertirNumeroATexto("hola"));//devuelve "Error, el parametro debe ser de tipo