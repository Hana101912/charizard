/*Definir una función que muestre información sobre una cadena de texto que se le pasa
como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena
está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas. */
function Ejercicio7(){
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