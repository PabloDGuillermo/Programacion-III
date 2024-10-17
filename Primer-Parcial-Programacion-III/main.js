import Clima from "./clima.js";
import Pronostico from "./pronostico.js";

let divClima = document.getElementById("clima");
let divBusqueda = document.getElementById("busqueda");
let inputTraerCiudad = document.getElementById("traer-ciudad");
let botonBusqueda = document.getElementById("buscar");


botonBusqueda.addEventListener("click", (ciudadBuscada) => traerCiudad(ciudadBuscada));

window.onload = async () => {
    const respuesta = await fetch("https://weather-api-progra-3.vercel.app/weather/avellaneda");
    
    const json = await respuesta.json();
    
    let clima = Clima.createFromJsonString(JSON.stringify(json));
    
    let elementoClima = clima.createHtmlElement();
    
    for (let i = 0; i < clima.forecast.length; i++) {
        let pronostico = new Pronostico(clima.forecast[i].day, clima.forecast[i].temperature, clima.forecast[i].wind)
        
        elementoClima.appendChild(pronostico.createHtmlElement());
    }
    
    divClima.appendChild(elementoClima);
}

async function traerCiudad(ciudadABuscar) {
    let ciudadBuscada = inputTraerCiudad.value;
    const respuesta = await fetch(`https://weather-api-progra-3.vercel.app/weather/${ciudadBuscada}`);

    const json = await respuesta.json();

    let clima = Clima.createFromJsonString(JSON.stringify(json));

    let elementoClima = clima.createHtmlElement();

    for (let i = 0; i < clima.forecast.length; i++) {
        let pronostico = new Pronostico(clima.forecast[i].day, clima.forecast[i].temperature, clima.forecast[i].wind)

        elementoClima.appendChild(pronostico.createHtmlElement());
    }

    divBusqueda.appendChild(elementoClima);
}