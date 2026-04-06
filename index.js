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





function ejercicio2(){
var valores = [true, 5, false, "hola", "adios", 2];

var suma = valores[1] > valores[5];
var resta = valores[1] > valores[5];
var multiplicacion = valores[1] > valores[5];
var division = valores[1] > valores[5];
var potencia = valores[1] > valores[5];
var mayor = valores[4] > valores[3];  
if (valores[3],length<valores[4],length) {
  console.log("la afirmacion es: ", valores[2]);
} 
else if (valores[3],length<valores[4],length)
{
  console.log("la afirmacion es: ", valores[0]);
}


console.log("Suma: ", suma)
console.log("Resta: ", resta)
console.log("Multiplicacion: ", multiplicacion)
console.log("Division: ", division)
console.log("Potencia: ", potencia)
}





function ejercicio3(){
var num1 = 5;
var num2 = 8;
if(num1<num2) {
console.log("numero1 no es mayor que numero2");
}
if(num2>0) {
console.log("numero2 es positivo");
}
if(num1<0) {
console.log("numero1 es negativo o distinto de cero");
}
if(num1+1 <num2) {
console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero 2")
}}






function ejercicio4(){
var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K','E', 'T'];
var dni= prompt("Escriba su DNI: ")

if(dni = null ||isNaN(dni)|| dni== ""|| dni<0 || dni>99999999)
{
    console.log("El numero proporcionado no es valido");
}
 
else{
    var resto = dni % 23;
    console.log("Resto: ", resto);
    console.log("Letras: ", letras);
}
}





function ejercicio5(){
var num = prompt("ingrese un numero entero")
// Número del cual queremos calcular el factorial
var numero = 5;

// Variable para almacenar el resultado
var factorial = 1;

// Bucle for para calcular el factorial
for (var i = 1; i <= numero; i++) {
  factorial *= i; // equivalente a factorial = factorial * i
}
console.log("el factorial de: "+ numero +"es:"+ factorial)
// Mostrar el resultado en consola
}





function Ejercicio6(){
    var num = prompt("ingrese un numero");

    if (isNaN(num)||num == null||num=="")
    {
        document.writeln("No es un numero");
    }

    else if(num % 2 === 0)
    {
        document.writeln("El numero ingresado es: ", num);
        document.writeln("El numero es par");
    }
    else
    {
        document.writeln("El numero ingresado es: ", num);
        document.writeln("El numero es impar");
    }
}





function Ejercicio7(){}