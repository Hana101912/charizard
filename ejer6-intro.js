/*Escribir el código de una función a la que se pasa como parámetro un número entero y
devuelve como resultado una cadena de texto que indica si el número es par o impar.
Mostrar por pantalla el resultado devuelto por la función.*/
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