/*Crea una funcion para filtrar un abjecto que
tenga una propiedad espesifica que cumpla con 
un criterio determinado */

function  filterObject(obj, edadminima) {
    let filteredObj = [];
    for (let i =0; i < obj.length; i++){
        if (obj[i].hasOwnProperty('edad')){
            if(obj[i].edad > edadminima) {
                filteredObj.push(obj[i]);
            }
        }
    }
   return filteredObj;
}


const personas = [
    {nombre:"Juan", edad:25},
    {nombre:"María", edad:20},
    {nombre:"Lucas", edad:18},
    {nombre:"Ana", edad:10},
];  

let edadmin = 18;

console.log("Persona con edad mayor a", edadmin,
filterObject(personas, edadmin)); 

