/*Crear una funcion que reciva una secuencia como
argumento, y devuelva una lista de argumentos donde
no hay elementos adyacentes  iguales.*/

function  eliminar_elementos_adyacentes(secuencia){
    let resultado = [];
    for (let i=0;i<secuencia.length;i++){
        if (resultado[resultado.length-1]!=secuencia[i]){
            resultado.push(secuencia[i]);
        }
        
    }
   return resultado;
}
console.log(eliminar_elementos_adyacentes([2,3,4,5,5,6,7,8,9,9]))
console.log(eliminar_elementos_adyacentes(['h','o','l','a', 'm','u','n','o','d','s']));
 
