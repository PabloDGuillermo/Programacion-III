import Pronostico from "./pronostico.js";

export default class Clima {
    city;
    temperature;
    wind;
    description;
    forecast = [];

    get city() { return this.city; }
    set city(value) { this.city = value; }

    get temperature() { return this.temperature; }
    set temperature(value) { this.temperature = value; }

    get wind() { return this.wind; }
    set wind(value) { this.wind = value; }

    get description() { return this.description; }
    set description(value) { this.description = value; }

    get forecast() { return this.forecast; }
    set forecast(value) { this.forecast = value; }

    constructor(city, temperature, wind, description, forecast) {
        this.city = city;
        this.temperature = temperature;
        this.wind = wind;
        this.description = description;
        this.forecast = forecast;
    }

    toJsonString() {
        return JSON.stringify(this);
    }

    static createFromJsonString(clima) {
        let objetoJSON = JSON.parse(clima);

        return new Clima(objetoJSON.city, objetoJSON.temperature, objetoJSON.wind, objetoJSON.description, objetoJSON.forecast);
    }

    createHtmlElement() {
        let nodoTarjeta = document.createElement("div");
        let nodoTitulo = document.createElement("h1");
        let nodoInformacion = document.createElement("p");
        let nodoImagen = document.createElement("img");
        let nodoBoton = document.createElement("button");

        if (this.description === "Sunny") {
            nodoImagen.src = "sunny.png";
        } else {
            nodoImagen.src = "cloudy.png";
        }

        nodoTarjeta.classList = "card";

        nodoTitulo.classList = "card-title";
        nodoTitulo.innerText = this.city;

        nodoInformacion.classList = "card-text";
        nodoInformacion.innerText = `- Temperatura: ${this.temperature}\n- Viento: ${this.wind}\n- Descripción: ${this.description}`;

        nodoBoton.addEventListener("click", () => Clima.guardar(this));
        nodoBoton.innerText = "Guardar";
        nodoBoton.classList = "btn btn-secondary";
        nodoBoton.style.margin = "5px";

        nodoTarjeta.appendChild(nodoTitulo);
        nodoTarjeta.appendChild(nodoImagen);
        nodoTarjeta.appendChild(nodoInformacion);
        nodoTarjeta.appendChild(nodoBoton);

        return nodoTarjeta;
    }

    static guardar(clima) {
        let arrayClimasGuardados = JSON.parse(localStorage.getItem("climas-guardados"));

        if (!(arrayClimasGuardados instanceof Array)) {
            arrayClimasGuardados = [];
        }

        arrayClimasGuardados.push(clima);

        localStorage.setItem("climas-guardados", JSON.stringify(arrayClimasGuardados));
    }
}