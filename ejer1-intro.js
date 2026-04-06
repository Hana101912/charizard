/* Crear un array llamado meses y que almacene el nombre de los doce meses del año.
Mostrar por pantalla los doce nombres utilizando la función console.log().*/ 
// Crear el array con los nombres de los meses
function ejercicio1(){
var meses = [
  "Enero", 
  "Febrero", 
  "Marzo", 
  "Abril", 
  "Mayo", 
  "Junio", 
  "Julio", 
  "Agosto", 
  "Septiembre", 
  "Octubre", 
  "Noviembre", 
  "Diciembre"
];
var eleccion = prompt("ingrese un mes del año");
// Mostrar los nombres de los meses en consola
console.log("el usuario ingreso: " + eleccion);
console.log("todos los meses del año son:  " + meses);
}