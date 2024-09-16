import Auto from "./auto.js"
import Garage from "./garage.js"

let garage1 = new Garage("Malena SRL", 1500);
let auto1 = new Auto("Celeste", 1000, "Corsa", new Date("1997,12,24"));
let auto2 = new Auto("Colorado", 1500, "Gol", new Date("1993,4,30"));
let auto3 = new Auto("Violeta", 2500, "Vento", new Date("1990,1,25"));
let auto4 = new Auto("Blanco", 10000, "Ferrari", new Date("1974,5,12"));

garage1.Add(auto1);
garage1.Add(auto2);
garage1.Add(auto3);
garage1.Add(auto4);

garage1.MostrarGarage();

garage1.Add(auto4);

garage1.Remove(auto2);

garage1.MostrarGarage();