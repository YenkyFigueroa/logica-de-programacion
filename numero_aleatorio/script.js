/*Escriba una funcion que haga de forma aleatoria
un numero entre 1 y 10 y verifica si el numero es par  o impar.*/

function  numerosAleatorios() {
    let num = Math.floor(Math.random() * 10) + 1;
    if (num % 2 ==  0) {
        return "El número generado es: "+ num+ ". Es un número PAR.";
    } else{
        return "El número generado es: "+ num+". Es un número IMPAR.";
    }
}

console.log(numerosAleatorios());
console.log(numerosAleatorios());
console.log(numerosAleatorios());