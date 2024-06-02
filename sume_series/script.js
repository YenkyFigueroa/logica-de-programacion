/*obtener una serie de numero y devolver la
suma de todos los positivos */

function  sumPositivos(sum){
    let suma =0;
   for (let i=0 ;i< sum.length;i++){
       if (sum[i] > 0) {
           suma += sum[i];
       }
   }
   return suma;
}
console.log(sumPositivos([1,2,-3,4,5]));
console.log(sumPositivos([-1, -2, -3, 4, -5]));