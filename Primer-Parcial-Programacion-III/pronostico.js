export default class Pronostico{
    #_day;
    #_temperature;
    #_wind;

    get day() { return this.#_day; }
    set day(value) { this.#_day = value; }

    get temperature() { return this.#_temperature; }
    set temperature(value) { this.#_temperature = value; }

    get wind() { return this.#_wind; }
    set wind(value) { this.#_wind = value; }

    constructor(day, temperature, wind){
        this.#_day = day;
        this.#_temperature = temperature;
        this.#_wind = wind;
    }

    createHtmlElement(){
        let divTarjeta = document.createElement("div");
        let divTitulo = document.createElement("h2");
        let divTemperaturaYViento = document.createElement("p");

        divTarjeta.id = this.#_day;
        divTarjeta.classList = "card";

        divTitulo.classList = "card-title";
        if(parseInt(this.#_day) === 1){
            divTitulo.innerText = "mañana";
        }else if(parseInt(this.#_day) === 2){
            divTitulo.innerText = "pasado";
        }else if(parseInt(this.#_day) === 3){
            divTitulo.innerText = "pasado mañana";
        }

        divTemperaturaYViento.innerText = `- Temperatura: ${this.#_temperature}\n- Viento: ${this.#_wind}`;
        divTemperaturaYViento.classList = "card-text";

        divTarjeta.appendChild(divTitulo);
        divTarjeta.appendChild(divTemperaturaYViento);

        return divTarjeta;
    }
}