//generar un patron de asterisco en forma piramide

function  generaPiramide(altura) {
   
    for (let i=1; i<= altura; i++){
        let fila = "";
        let espacios = " ".repeat(altura - i);
        let  asterisco = "*".repeat((2*i - 1));    
         fila = espacios +  asterisco;  
       console.log(fila);
}

}
console.log(generaPiramide(5));