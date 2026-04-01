/*El calculo de la letra del Documento Nacional de Identidad (DNI) es un proceso matematico
sencillo que se basa en obtener el resto de la division entera del numero de DNI y el nimero
23. A partir del resto de la division, se obtiene la letra seleccionandola dentro de un array de
letras.
El array de letras es:
var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K','E', 'T'];

Por tanto si el resto de la division es 0, la letra del DNI es la T y si el resto es 3 la letra es la
A. Con estos datos, elaborar un pequeño script que:
Almacene en una variable el numero de DNI indicado por el usuario y en otra variable la
letra del DNI que se ha indicado.
En primer lugar (y en una sola instruccion) se debe comprobar si el numero es menor que 0
o mayor que 99999999. Si ese es el caso, se muestra un mensaje al usuario indicando que
el numero proporcionado no es valido y el programa no muestra mas mensajes.
Si el numero es valido, se calcula la letra que le corresponde segun el metodo explicado
anteriormente.
Una vez calculada la letra, se debe comparar con la letra indicada por el usuario. Si no
coinciden, se muestra un mensaje al usuario diciendole que la letra que ha indicado no es
correcta. En otro caso, se muestra un mensaje indicando que el numero y la letra de DNI
son correctos.*/
var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K','E', 'T'];
