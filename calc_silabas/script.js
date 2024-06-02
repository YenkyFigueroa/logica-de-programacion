/*Crea una funcion para calcular cuantas silabas
tiene cada palabra e imprimir el resultado */

function  contarSilabas(palabras){  
    const vocales ='aeiou';
     let silabas= palabras.split('')
     .filter(char => vocales.includes(char)).length; 
     console.log(`la palabra ${palabras} tiene ${silabas} silabas`);

}

contarSilabas("hola");
contarSilabas("perro");
