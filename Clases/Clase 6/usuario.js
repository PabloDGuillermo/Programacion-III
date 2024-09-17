export default class Usuario {
  #_nombre = "";
  #_clave = "";
  #_mail = "";

  get Nombre() {
    return this._nombre;
  }
  get Clave() {
    return this._clave;
  }
  get Mail() {
    return this._mail;
  }

  constructor(nombre, clave, mail) {
    if (
      typeof nombre == "string" &&
      typeof clave == "string" &&
      typeof mail == "string"
    ) {
      this._nombre = nombre;
      this._clave = clave;
      this._mail = mail;
    }
  }

  static Listado() {
    let usuarios = JSON.parse(localStorage.getItem("usuarios"));

    for (let i = 0; i < usuarios.length; i++) {
      console.log(`Nombre: ${usuarios[i]._nombre} 
Clave: ${usuarios[i]._clave}
Mail: ${usuarios[i]._mail}`);
    }
  }

  static Login(mail, contraseña) {
    let usuarios = JSON.parse(localStorage.getItem("usuarios"));

    for (let i = 0; i < usuarios.length; i++) {
      if (usuarios[i]._mail === mail) {
        if (usuarios[i]._clave === contraseña) {
          return "Verificado";
        } else {
          return "Error en los datos";
        }
      }
    }
    return "Usuario no registrado";
  }
}
