function ejercicio1(){
let meses = [
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
let valores = [true, 5, false, "hola", "adios", 2];

let suma = valores[1] > valores[5];
let resta = valores[1] > valores[5];
let multiplicacion = valores[1] > valores[5];
let division = valores[1] > valores[5];
let potencia = valores[1] > valores[5];
let mayor = valores[4] > valores[3];  
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
let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K','E', 'T'];
let dni= prompt("Escriba su DNI: ")

if(dni = null ||isNaN(dni)|| dni== ""|| dni<0 || dni>99999999)
{
    console.log("El numero proporcionado no es valido");
}
 
else{
    let resto = dni % 23;
    console.log("Resto: ", resto);
    console.log("Letras: ", letras);
}
}





function ejercicio5(){
let num = prompt("ingrese un numero entero")
// Número del cual queremos calcular el factorial
let numero = 5;

// Variable para almacenar el resultado
let factorial = 1;

// Bucle for para calcular el factorial
for (let i = 1; i <= numero; i++) {
  factorial *= i; // equivalente a factorial = factorial * i
}
console.log("el factorial de: "+ numero +"es:"+ factorial)
// Mostrar el resultado en consola
}





function ejercicio6(){
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





function ejercicio7(){
let text = prompt("Ingrese una palabra: ");
if(text == null || text == "" || !isNaN (text))
    {
    console.log("mal, algo esta mal");
    }

else if(text === text.toUpperCase()){
    console.log("el texto ingresado es: ", text);
    console.log("el texto esta conformado por mayusculas.");
}
else if(text == text.toLowerCase())
{
    console.log("el texto ingresado es: ", text);
    console.log("el texto esta conformado por minusculas.");
}
else{
    console.log("el texto ingresado es: ", text);
    console.log("el texto no tiene ni mayusculas ni minusculas.");
}
}





function ejercicio8()
{
    let texto = prompt("Ingrese un texto: ");
    let str = texto.replaceAll("","").toLocaleLowerCase();
    let arrStr = str.split("").reverse().join("");

    if(str == arrStr)
        {
            console.log("El texto ingresado es: ", texto);
            console.log("El texto ingresado es un palindromo");
    }
    else{
         console.log("El texto ingresado es: ", texto);
            console.log("El texto ingresado no es un palindromo");
    }
}





function ejercicio9(){
    let p1 = new Estudiante("Juan", 30, "masculino", "Matematicas", "1A");
    console.log(p1.registrar());
    p1.obtDetalles();
}
    function Persona(nombre, edad, genero) {
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }
    Persona.prototype.obtDetalles = function(){
        console.log(`Nombre: ${this.nombre}, Edad:${this.edad}, Género: ${this.nombre}`);
    }
    function Estudiante(nombre, edad, genero, curso, grupo) {
        Persona.call(this, nombre, edad, genero);
        this.curso = curso;
        this.grupo = grupo;
    }
    Estudiante.prototype = Object.create(Persona.prototype);
    Estudiante.prototype.contructor = Estudiante;
    Estudiante.prototype.registrar = function(){
        console.log(`${this.nombre}, a sido registrado en el curso${this.curso}, Grupo ${this.grupo}`); 
    }
    function Profesor(nombre, edad, genero, curso, grupo) {
        Profesor.call(this, nombre, edad, genero, asignatura, nivel);
        this.asignatura == asignatura;
        this.nivel == nivel;
    }
    Profesor.prototype.obtDetalles = function(){
        console.log(`Asignatura: ${this.asignatura}, nivel:${this.nivel}`);
    }





function ejercicio10(){
    let arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    for(i=0; i<36000; i++)
    {
        let dado1 = Math.floor(Math.random() * 6) +1;
        let dado2 = Math.floor(Math.random() * 6) +1;
        let suma = dado1 + dado2;
        arr[suma]=arr[suma]+1;
}

for(let j=2; j<13; j++)
    {
        console.log("el numero", j, "salio: ", arr[j], "veces en total.");
    }
}