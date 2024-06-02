/*Devolver un arreglo , donde el primer elemento es el recuento de numeros positivos, 
y el segundo elemento es el recuento de numero positivo */

function  contarPositivos(input){
    if(!input ||  input.length == 0) {
    return [];
}

let sumaposit = 0;
let sumanega = 0;
for (let i = 0; i < input.length; i++) {
   if(input[i] > 0 ){
      sumaposit += input[i];
   }else if(input[i] < 0){   
      sumanega += input[i] ;
    }
}
return [sumaposit,sumanega]
}
console.log(contarPositivos([1,-2,3,-4,5]));//devuelve [3,2]