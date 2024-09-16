export default class Usuario{
    _nombre = "";
    _clave = "";
    _mail = "";

    get Nombre(){ return this._nombre }
    get Clave(){return this._clave}
    get Mail(){return this._mail}

    static Registro(nombre, clave, mail){
        if(typeof nombre == "string" && typeof clave == "string" && typeof mail == "string"){
            this._nombre = nombre;
            this._clave = clave;
            this._mail = mail;
        }
    }

    static Listado(){
        let usuarios = localStorage.getItem("usuarios");

        usuarios.forEach(element => {
            console.log("Nombre: " + element.Nombre + "\nClave: " + element.Clave + "\nMail: " + element.Mail);
        });        
    }

    static Login(mail, contraseña){
        let usuarios = localStorage.getItem("usuarios");
        flag = false;

        usuarios.forEach((element) => {
            if(element.Mail === mail){
                if(element.Clave === contraseña){
                    return "Verificado";
                }
                else{
                    return "Error en los datos";
                }
            }
        })
        return "Usuario no registrado"
    }
}