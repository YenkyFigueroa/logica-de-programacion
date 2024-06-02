/*Implemente una funcion que sume dos numeros
y devuelve su suma en binario, el numero debe ser una cadena */

function sumarYconvertirABinario(prop1, prop2){
 const suma = prop1 + prop2;
 const  binario = suma.toString(2);
 return binario;
}
console.log(sumarYconvertirABinario(1,1));
console.log(sumarYconvertirABinario(5,9));

/*const binario = (a,b) => (a+b).toString(2);
console.log(binario(7,10));*/