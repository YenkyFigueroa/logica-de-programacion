/*Escriba una funcion que elimina los signos
de exclamacion de una palabra determinada */

function  eliminarSignoExclamacion(palabra){
    return palabra.replace(/!/g,"");   //se utiliza el metodo replace para reemplazar todos los caracteres "!"
    return palabra.replace(/!/g,"");
}
console.log(eliminarSignoExclamacion("Hola!!"));//Imprime Hola
console.log(eliminarSignoExclamacion("Que onda!?")); //Imprime Que onda?