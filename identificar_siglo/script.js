/*Crear una funcion que permite identificar siglo
se encuentra un año dado,  */

function  esSiglo(año){
    let siglo = año / 100;
    if (año % 100 > 0) {
        siglo++
      } 
      let mensaje = `El año ${año} es del siglo  ${Math.floor(siglo)}`;
       return mensaje ;
}
console.log(esSiglo(2000))
console.log(esSiglo(1700))
console.log(esSiglo(2023))
console.log(esSiglo(1900))  
