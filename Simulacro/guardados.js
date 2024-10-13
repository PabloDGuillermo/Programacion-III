import Serie from "./serie.js";

let acumuladorSeriesTraidas = 0;
let contadorSeriesTraidas = 0;
let arraySeries = [];

const elementoDivSeries = document.getElementById("series");
const elementoBotonOrdenarPorNombre = document.getElementById("botonOrdenarPorNombre");

function obtenerLocalStorage() {
    for (let i = 0; i < localStorage.length; i++) {
        console.log(localStorage.getItem(localStorage.key(i)));
        let serieRecuperada = Serie.createFromJsonString(localStorage.getItem(localStorage.key(i)));
        arraySeries.push(serieRecuperada);
    }
    console.log(arraySeries);
}

async function dibujarSeriesEnPantalla(serie) {
    let elementoHTML = serie.createHtmlElement();
    let nodoBoton = document.createElement("button");
    nodoBoton.innerText = "Eliminar";
    nodoBoton.addEventListener("click", () => eliminarSerie(serie));
    elementoHTML.appendChild(nodoBoton);

    let nodoImagen = document.createElement("img");
    let nodoLink = document.createElement("a");
    nodoImagen.src = serie.image.medium;
    nodoLink.href = serie.url;
    nodoLink.target = "_blank";
    nodoLink.appendChild(nodoImagen);
    elementoHTML.appendChild(nodoLink);

    elementoDivSeries.insertBefore(elementoHTML, null);
}

window.onload = () => {
    obtenerLocalStorage();
    for (let i = 0; i < arraySeries.length; i++) {
        contadorSeriesTraidas += 1;
        acumuladorSeriesTraidas += 1;
        dibujarSeriesEnPantalla(arraySeries[i]);
    }
};

function eliminarSerie(serie){
    if(prompt("desea eliminar la serie? (s/n)") === "s"){
        localStorage.removeItem(serie.id);
        elementoDivSeries.removeChild(document.getElementById(serie.id));
    };
}