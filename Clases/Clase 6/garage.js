import Auto from "./auto.js";

export default class Garage{
    #_razonSocial = "";
    #_precioPorHora = 0;
    #_autos = [Auto];

    get RazonSocial(){return this.#_razonSocial}
    set RazonSocial(nuevaRazonSocial){
        if(typeof nuevaRazonSocial === "string"){
            this.#_razonSocial = nuevaRazonSocial;
        }
    }
    get PrecioPorHora(){return this.#_precioPorHora}
    set PrecioPorHora(nuevoPrecioPorHora){
        if(typeof nuevoPrecioPorHora === "number"){
            this.#_precioPorHora = nuevoPrecioPorHora;
        }
    }
    get Autos(){return this.#_autos}

    constructor(razonSocial, precioPorHora){
        if(typeof razonSocial === "string"){
            this.RazonSocial = razonSocial;
        }
        if(typeof precioPorHora === "number"){
            this.PrecioPorHora = precioPorHora;
        }
    }

    MostrarGarage(){
        let cadena= "Información del Garage\n- Razon Social: " + this.RazonSocial + "\n- Precio por Hora: " + this.PrecioPorHora + "\n- Autos guardados: " + (this.Autos.length - 1);
        console.log(cadena);
        for(let i = 0; i<this.Autos.length; i++){
            Auto.MostrarAuto(this.Autos[i]);
        }
    }

    Equals(auto){
        if(auto instanceof Auto){
            for(let i = 0; i<this.Autos.length; i++){
                if(this.Autos[i] === auto){
                    return true;
                }
            }
        }
        return false;
    }

    Add(auto){
        if(auto instanceof Auto){
            if(!this.Equals(auto)){
                this.Autos.push(auto);
            }else{
                console.log("El auto ya está en el Garage");
            }
        }
    }

    Remove(auto){
        if(auto instanceof Auto){
            if(this.Equals(auto)){
                this.Autos.splice(this.Autos.indexOf(auto),1);
                console.log(`Se removió con éxito el auto:`);
                Auto.MostrarAuto(auto)
            }else{
                console.log("El auto no está en el Garage");
            }
        }
    }
}