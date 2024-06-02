/*Crear una funcion para contar ovejas presente en la matriz. */

function  countSheep(mat) {
    let count = 0;
    if (mat && Array.isArray(mat)) {
        mat.forEach(function(isPresent)  {
            if(isPresent === true){
                count++;

            }
        });
    } else{
        return 0;
        
    }  
    return count;
}
/*A continuacion se crean las matrices que se utilizaran a traves de llamadas a la función anterior*/
let m1 = [true, false, true, true, true, true,false, true,
    true, false, true, true, true, true,false, true,
    true, false, true, true, true, true,false, true]; 
console.log("La cantidad de oviedos en la primera matriz es: " + countSheep(m1));

let m2 = [[false, false], [true, true]]; // Matriz  2x2 con dos filas y  2 columnas
console.log("\n La cantidad de oviedos en la segunda matriz es: " + countSheep(m2));