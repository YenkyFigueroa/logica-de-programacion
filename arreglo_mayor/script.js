/*Escriba una funcion que devuelva el elemento 
mayor de un arreglo de numeros. */

function  mayorNumero(arr){
    if (arr.length === 0) {
        return "El arreglo esta vacio"
    }

    const mayor = Math.max(...arr);
   return `El numero mayor es ${mayor}`;
}
console.log(mayorNumero([])) // El arreglo esta vacío
console.log(mayorNumero([1,2,3])) // El numero mayor es 3
console.log(mayorNumero([5,7,4,-9,8])) // El numero mayor es 8