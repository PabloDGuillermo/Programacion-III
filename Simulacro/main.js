import Serie from "./serie.js";

let acumuladorSeriesTraidas = 0;
let contadorSeriesTraidas = 0;

const elementoDivSeries = document.getElementById("series");
const elementoBotonSiguiente = document.getElementById("siguiente");
const elementoBotonAnterior = document.getElementById("anterior");

async function traerDatos(api) {
  const respuesta = await fetch(api);

  const json = await respuesta.json();

  const serie = Serie.createFromJsonString(JSON.stringify(json));

  let elementoHTML = serie.createHtmlElement();
  let nodoBoton = document.createElement("button");
  nodoBoton.innerText = "Guardar";
  nodoBoton.addEventListener("click", () => Serie.guardarSerie(serie));
  elementoHTML.appendChild(nodoBoton);
  
  let nodoImagen = document.createElement("img");
  let nodoLink = document.createElement("a");
  nodoImagen.src = serie.image.medium;
  nodoLink.href = serie.url;
  nodoLink.target = "_blank";
  nodoLink.appendChild(nodoImagen);
  elementoHTML.appendChild(nodoLink);

  elementoDivSeries.appendChild(elementoHTML);
}

window.onload = () => {
  for (let i = 0; i < 6; i++) {
    let url = `https://api.tvmaze.com/shows/${i + 1}`;
    contadorSeriesTraidas += 1;
    acumuladorSeriesTraidas += 1;
    traerDatos(url);
  }
};

function paginaSiguiente() {
  for (let i = acumuladorSeriesTraidas; i < contadorSeriesTraidas + 6; i++) {
    let url = `https://api.tvmaze.com/shows/${i + 1}`;
    traerDatos(url)
    elementoDivSeries.removeChild(elementoDivSeries.firstChild);
    acumuladorSeriesTraidas += 1;
  }
  contadorSeriesTraidas += 6;
}

elementoBotonSiguiente.addEventListener("click", () => {
  paginaSiguiente();
});

function paginaAnterior() {
  if (acumuladorSeriesTraidas > 6) {
    for (let i = acumuladorSeriesTraidas - 12; i < contadorSeriesTraidas - 6; i++) {
      acumuladorSeriesTraidas -= 1;
      let url = `https://api.tvmaze.com/shows/${i + 1}`;
      traerDatos(url);
      elementoDivSeries.removeChild(elementoDivSeries.lastChild);
    }
    contadorSeriesTraidas -= 6;
  }
}

elementoBotonAnterior.addEventListener("click", () => {
  paginaAnterior();
});

