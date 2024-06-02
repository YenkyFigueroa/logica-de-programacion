/*Crea una funcion que tome un conjunto de numeros
y devuelva el inverso aditivo de cada uno,
todo lo positivo se vuelve negativo y lo negatico a positivo */

function  invertirAditivo(numero){
    const arregloInvertido = []
    for (let i=0;i< numero.length ; i++){
        if (numero[i] >= 0) {
            arregloInvertido.push(-1 * numero[i])
        } else{
           arregloInvertido.push(Math.abs(numero[i]))
        }
        
    }
   return arregloInvertido;
}

console.log(invertirAditivo([23,-56,78,-90,123])) // [23,56,78,90,-123]