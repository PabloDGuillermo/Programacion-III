export default class Auto {
  _color = "";
  _precio = 0;
  _marca = "";
  _fecha = Date();

  constructor(color, precio, marca, fecha) {
    if (typeof color == "string") {
      this._color = color;
    }
    if (typeof precio == "number") {
      this._precio = precio;
    }
    if (typeof marca == "string") {
      this._marca = marca;
    }
    if (fecha instanceof Date) {
      this._fecha = fecha;
    }
  }

  get Color() {
    return this._color;
  }
  get Precio() {
    return this._precio;
  }
  get Marca() {
    return this._marca;
  }
  get Fecha() {
    return this._fecha;
  }

  AgregarImpuestos(numero) {
    if (typeof numero == "number") {
      this._precio += numero;
    }
  }

  static MostrarAuto(auto) {
    if (auto instanceof Auto) {
      let cadena =
        "Información del Auto\n- Color: " +
        auto._color +
        "\n- Precio: " +
        auto._precio +
        "\n- Marca: " +
        auto._marca +
        "\n-Fecha: " +
        auto._fecha +
        "\n";
      console.log(cadena);
    }
  }

  static Equals(auto1, auto2) {
    if (auto1 instanceof Auto && auto2 instanceof Auto) {
      if (auto1._marca === auto2._marca) {
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
