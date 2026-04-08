/*Definir una función que determine si la cadena de texto que se le pasa como parámetro es
un palíndromo, es decir, si se lee de la misma forma desde la izquierda y desde la derecha.
Ejemplo de palíndromo complejo: "La ruta nos aporto otro paso natural". */
function Ejercicio10()
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