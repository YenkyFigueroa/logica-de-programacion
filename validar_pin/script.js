/*Crear una funcion para validar un pin
que acepte 4 o 6 caracteres de longitud solo numeros */

function  validatePin(pin) {
    if(pin.length === 4 || pin.length === 6){
        return pin.split('')
        .every(element => !isNaN(element));
    }else{
        return false;
    }
}

console.log(validatePin("1234")); //true
console.log(validatePin("123abc")); //false
console.log(validatePin(123456)); // true