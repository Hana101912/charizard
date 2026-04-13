/*Definir la siguiente jerarquía de objetos, haciendo uso de los prototipos de JavaScript:
Objeto Persona con las propiedades nombre, edad y género, y el método obtDetalles(), que
muestra por pantalla las propiedades de la persona.
Objeto Estudiante, que hereda de Persona, e incluye las propiedades curso y grupo y el
método registrar().
Objeto Profesor, que hereda de Persona, e incluye las propiedades asignatura y nivel y el
método asignar().
Crear los objetos y casos de prueba necesarios para comprobar el correcto funcionamiento
de la jerarquía. */
function Ejercicio9(){
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