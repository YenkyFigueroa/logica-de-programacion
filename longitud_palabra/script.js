/*Crea una funcion que calcule la longitud 
de una palabra si es corta o larga*/

function    cortaOlarga(palabra){
   if (palabra.length <= 5) {
     return `La palabra ${palabra } es demasiado corta`;
   } else{
     return `La palabra ${palabra } tiene muchas letras`;
   }
}
console.log(cortaOlarga("perro"));