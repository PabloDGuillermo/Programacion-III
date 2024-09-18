export default class Auto {
  #_color = "";
  #_precio = 0;
  #_marca = "";
  #_fecha = Date();

  constructor(color, precio, marca, fecha) {
    if (typeof color == "string") {
      this.#_color = color;
    }
    if (typeof precio == "number") {
      this.#_precio = precio;
    }
    if (typeof marca == "string") {
      this.#_marca = marca;
    }
    if (fecha instanceof Date) {
      this.#_fecha = fecha;
    }
  }

  get Color() {
    return this.#_color;
  }
  get Precio() {
    return this.#_precio;
  }
  set Precio(nuevoPrecio){
    if(typeof nuevoPrecio === "number"){
      this.#_precio = nuevoPrecio;
    }
  }
  get Marca() {
    return this.#_marca;
  }
  get Fecha() {
    return this.#_fecha;
  }

  AgregarImpuestos(numero) {
    if (typeof numero === "number") {
      console.log(`Precio original de ${this.Marca}: ${this.Precio}`);
      this.Precio += numero;
      console.log(`Precio con impuesto agregado: ${this.Precio}`);
    }
  }

  static MostrarAuto(auto) {
    if (auto instanceof Auto) {
      let cadena =
        "Información del Auto\n- Color: " +
        auto.Color +
        "\n- Precio: " +
        auto.Precio +
        "\n- Marca: " +
        auto.Marca +
        "\n-Fecha: " +
        auto.Fecha +
        "\n";
      console.log(cadena);
    }
  }

  static Equals(auto1, auto2) {
    if (auto1 instanceof Auto && auto2 instanceof Auto) {
      if (auto1.Marca === auto2.Marca) {
        return true;
      }
      return false;
    }
  }

  static Add(auto1, auto2) {
    if (auto1 instanceof Auto && auto2 instanceof Auto) {
      if (this.Equals(auto1, auto2) && auto1.Color === auto2.Color) {
        return auto1.Precio + auto2.Precio;
      } else {
        console.log("\nERROR. No son de la misma marca o color\n");
        return 0;
      }
    }
  }
}
