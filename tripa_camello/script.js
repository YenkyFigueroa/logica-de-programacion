/*Crea una funcion que rompa la tripa del camello,
utilizando un espacio entre las palabras */

function  breakCamelCase(str) {
    let newStr = '';
     for (let i=0;i<str.length;i++){
         if (str[i] === str[i].toUpperCase() && i >0) {
             newStr += ' '; 
         }
         newStr+=str[i];
         }
          return newStr;
      }
console.log(breakCamelCase("camelCase")); 