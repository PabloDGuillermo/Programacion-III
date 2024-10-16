import Serie from "./serie.js";

let acumuladorSeriesTraidas = 0;
let contadorSeriesTraidas = 0;

const elementoDivSeries = document.getElementById("series");
const elementoBotonSiguiente = document.getElementById("siguiente");
const elementoBotonAnterior = document.getElementById("anterior");

let modeToggler = document.getElementById("mode-toggler");
let html = document.getElementsByTagName("html")[0];

async function traerDatos(api) {
  const respuesta = await fetch(api);

  const json = await respuesta.json();

  const serie = Serie.createFromJsonString(JSON.stringify(json));

  let elementoHTML = serie.createHtmlElement();

  elementoDivSeries.appendChild(elementoHTML);
}

window.onload = () => {
  for (let i = 0; i < 6; i++) {
    let url = `https://api.tvmaze.com/shows/${i + 1}`;
    contadorSeriesTraidas += 1;
    acumuladorSeriesTraidas += 1;
    traerDatos(url);
  }

  const theme = localStorage.getItem("theme");
  switch (theme) {
    case "dark":
      modeToggler.classList.remove("bi-brightness-high");
      modeToggler.classList.add("bi-moon");
      html.setAttribute("data-bs-theme", "dark");
      break;
    case (null, "light"):
      modeToggler.classList.add("bi-brightness-high");
      modeToggler.classList.remove("bi-moon");
      html.setAttribute("data-bs-theme", "light");
      break;
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

modeToggler.addEventListener("click", () => {
  // REVISAMOS QUE MODO ESTAMOS USANDO
  if (html.getAttribute("data-bs-theme") == "light") {
    // ESTAMOS EN MODO LIGHT
    modeToggler.classList.remove("bi-brightness-high");
    modeToggler.classList.add("bi-moon");
    //SETEAMOS LA PROPIEDAD DARK
    html.setAttribute("data-bs-theme", "dark");
    //GUARDAMOS LA PROPIEDAD DARK EN LOCAL STORAGE
    localStorage.setItem("theme", "dark");
  } else {
    // ESTAMOS EN MODO DARK
    modeToggler.classList.add("bi-brightness-high");
    modeToggler.classList.remove("bi-moon");
    //SETEAMOS LA PROPIEDAD LIGHT
    html.setAttribute("data-bs-theme", "light");
    //GUARDAMOS LA PROPIEDAD LIGHT EN LOCAL STORAGE
    localStorage.setItem("theme", "light");
  }
});