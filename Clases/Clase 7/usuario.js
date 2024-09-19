export default class Usuario {
    #_nombre = "";
    #_clave = "";
    #_mail = "";
  
    get Nombre() {
      return this.#_nombre;
    }
    set Nombre(nuevoNombre) {
      if (typeof nuevoNombre === "string") {
        this.#_nombre = nuevoNombre;
      }
    }
    get Clave() {
      return this.#_clave;
    }
    set Clave(nuevaClave) {
      if (typeof nuevaClave === "string") {
        this.#_clave = nuevaClave;
      }
    }
    get Mail() {
      return this.#_mail;
    }
    set Mail(nuevoMail) {
      if (typeof nuevoMail === "string") {
        this.#_mail = nuevoMail;
      }
    }
  
    constructor(nombre, clave, mail) {
      if (
        typeof nombre === "string" &&
        typeof clave === "string" &&
        typeof mail === "string"
      ) {
        this.Nombre = nombre;
        this.Clave = clave;
        this.Mail = mail;
      }
    }
  
    static Registro(nombre, clave, mail){
      let usuarios = JSON.parse(localStorage.getItem("usuarios"));
      usuarios.push(new Usuario(nombre, clave, mail));
      localStorage.setItem("usuarios", JSON.stringify(usuarios));
    }
  
    static Listado() {
      let usuarios = JSON.parse(localStorage.getItem("usuarios"));
  
      for (let i = 0; i < usuarios.length; i++) {
        console.log(`Nombre: ${usuarios[i].Nombre} 
    Clave: ${usuarios[i].Clave}
    Mail: ${usuarios[i].Mail}`);
      }
    }
  
    static Login(mail, contraseña) {
      let usuarios = JSON.parse(localStorage.getItem("usuarios"));
  
      for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].Mail === mail) {
          if (usuarios[i].Clave === contraseña) {
            return "Verificado";
          } else {
            return "Error en los datos";
          }
        }
      }
      return "Usuario no registrado";
    }
  
    toJSON() {
      return {
        Nombre: this.#_nombre,
        Clave: this.#_clave,
        Mail: this.#_mail,
      };
    }
  }