/*Crea una funcion que genere la tabla de multiplicar
del numero 5, que no se muestre 5 * 5, y mostar
el resultado de los demas */

function  generaTabla() {
    let num = 5;
    for (let i=1;i<=10;i++){
        if  (i!== 5){
            console.log(`${num} x ${i} = ${num*i}`);    
        }
        
    }    
    
}
generaTabla();