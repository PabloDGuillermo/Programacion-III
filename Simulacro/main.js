import Serie from "./serie.js"

const elementoDivSeries = document.getElementById("series");

async function traerDatos(api){
    const respuesta = await fetch(api);
    
    const json = await respuesta.json();
    
    const serie = Serie.createFromJsonString(json);
    
    let elementoHTML = serie.createHtmlElement();
    
    elementoDivSeries.insertBefore(elementoHTML, null);
}

window.onload = () => {
    for(let i = 0; i < 6; i++){
        let url = `https://api.tvmaze.com/shows/${i+1}`;

        traerDatos(url);
    }
}

