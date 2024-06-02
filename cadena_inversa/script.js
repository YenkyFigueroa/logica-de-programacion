/*Crea una funcion que tome una cadena como
parametro y devuelva la cadena en orden inverso,
 */

function  reverseString(str){
    if (str.trim() === '') {
        return 'La cadena esta vacia';
      } else{
          let reversedStr = str.split('').reverse().join('');
          return reversedStr;
    }
}
console.log(reverseString("Hola Mundo")); // Devuelve "odMuna olA"
console.log(reverseString("   "));//Devuelve "La cadena esta vacia"

