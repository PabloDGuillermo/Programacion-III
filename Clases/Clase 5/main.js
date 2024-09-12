//Para escribir por consola
console.log("Hola mundo!");

//Para declarar variables
let variable = 1 //Para variables que cambian
const otraVariable = "constante" //Para variables constantes
var noLaUsamos = "nunca" //no se usa más hace años

let nombreVariable//nombres de las variables let en camelCase
const NOMBREVARIABLE = 0//nombres de las variables const todas en mayúsculas

//No diferencia entre números enteros y decimales
let numeroUno = 1;
let numeroDos = 12.5
// ambos son de tipo number

//diferencia tipos booleanos
let booleano = true;

//tipo object

//objeto literal
let personaLiteral = {
    nombre: "Pablo",
    apellido: "Guillermo",

    saludar: function() {
        console.log("hola soy " + this.nombre)
    }
}

//objeto clase
class Persona{
    nombre;
    apellido;

    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }

    saludar(){
        console.log("hola soy " + this.nombre)
    }
}

let personaClase = Persona("Malena", "Morales Delfino");

console.log(personaLiteral)
console.log(personaClase)

personaLiteral.saludar();
personaClase.saludar();

//Arrays

//Los indices empiezan en el 0
let numeros = [1, 2, 3, 4, 5, 6]
let nombres = ["Pablo", "Malena", "Agustín"]

//para acceder a un indice en específico, se usan las llaves
console.log(nombres[1]);

//Se pueden definir los objetos dentro del array con {}

let objetos = [{new: Persona("Fernando", "Piñeiro")}, {new: Persona("Lucas", "Diez")}]

//Acá vimos if, while, etc, pero son lo mismo que en C#
