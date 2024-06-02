/*Escribir una funcion para convertir un nombre en iniciales
esto requiere estrictamente dos palabras con espacios
entre ellas. El resultado debe ser dos letras mayusculas
separada por un punto. */

function  nombreIniciales(nombre){
    let Partesnombres = nombre.trim().split("");
    if (Partesnombres.length <2) {
        return "El nombre debe tener al menos dos partes"
    };
    let primeraLetraNombre= Partesnombres[0].toUpperCase();
    let segundaLetraApellido= Partesnombres [1].toUpperCase();
     return `${primeraLetraNombre}.${segundaLetraApellido}`;
}
console.log(nombreIniciales ("juan perez")); //JP
console.log(nombreIniciales ("maria jose"));//MJ