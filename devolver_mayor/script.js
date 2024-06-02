/* Crear una funcion que reciba dos numeros
como parametro y devuelva el mayor de ellos.*/

function  MayorNumero(num1, num2) {
    if (num1 > num2){
        return "El numero mas grande es: "+ num1;
    }else{
        return "El numero mas grande es: "+ num2;
    }
}

console.log(MayorNumero(5,8));
console.log(MayorNumero(7,3));
console.log(MayorNumero(-4,-9));