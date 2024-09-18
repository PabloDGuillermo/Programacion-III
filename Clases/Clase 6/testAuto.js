import Auto from "./auto.js"

let auto1 = new Auto("Celeste", "Corsa");
let auto2 = new Auto("Blanco", "Corsa");

let auto3 = new Auto("Colorado", 500, "Gol");
let auto4 = new Auto("Colorado", 3000, "Gol");

let auto5 = new Auto("Verde", 2400, "Vento", new Date(1997, 11, 24));

console.log("Comienzo de testAuto.js");

//Utilizar el método “AgregarImpuesto” en los últimos tres objetos, agregando $ 1500 al atributo precio.
console.log("\nUtilizar el método “AgregarImpuesto” en los últimos tres objetos, agregando $ 1500 al atributo precio.")
auto3.AgregarImpuestos(1500);
auto4.AgregarImpuestos(1500);
auto5.AgregarImpuestos(1500);

//Obtener el importe sumado del primer objeto “Auto” más el segundo y mostrar el resultado obtenido.
console.log("\nObtener el importe sumado del primer objeto “Auto” más el segundo y mostrar el resultado obtenido.")
console.log(Auto.Add(auto1, auto2));

//Comparar el primer “Auto” con el segundo y quinto objeto e informar si son iguales o no.
console.log("\nComparar el primer “Auto” con el segundo y quinto objeto e informar si son iguales o no.")
console.log(Auto.Equals(auto1,auto2));
console.log(Auto.Equals(auto1,auto5));

//Utilizar el método de clase “MostrarAuto” para mostrar cada los objetos impares (1, 3, 5).
console.log("\nUtilizar el método de clase “MostrarAuto” para mostrar cada los objetos impares (1, 3, 5).")
Auto.MostrarAuto(auto1);
Auto.MostrarAuto(auto3);
Auto.MostrarAuto(auto5);

console.log("Fin de testAuto.js");