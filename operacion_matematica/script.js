/*Crear una funcion que realice cuatro operaciones
matematicas basicas. debe tomar tres argumentos */

function calcOperacion(num1,operador,num2){
    switch (operador) {
        case '+':
            return num1 + num2;
            break;
        case '-':
            return num1 - num2;
            break;
        case '*':
            return num1 * num2;
            break;
        case '/':
            if (num2 == 0) {
                console.log('Error: No se  puede dividir entre cero');
            } else{
               return num1 / num2;  
            }            
            break;
        default:
            console.log("Error: Operador  invalido");
    }
}
console.log("Suma",calcOperacion(5,'+',7)); //8
console.log("Resta",calcOperacion(10,'-',3));//7
console.log("Multiplicacion",calcOperacion(6,'*',4));//24
console.log("Divicion",calcOperacion(12,'/',2));//6