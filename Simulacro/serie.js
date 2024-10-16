export default class Serie {
  #_id;
  #_url;
  #_name;
  #_language;
  #_genres;
  #_image;

  get id() {
    return this.#_id;
  }
  set id(value) {
    this.#_id = value;
  }

  get url() {
    return this.#_url;
  }
  set url(value) {
    this.#_url = value;
  }

  get name() {
    return this.#_name;
  }
  set name(value) {
    this.#_name = value;
  }

  get language() {
    return this.#_language;
  }
  set language(value) {
    this.#_language = value;
  }

  get genres() {
    return this.#_genres;
  }
  set genres(value) {
    this.#_genres = value;
  }

  get image() {
    return this.#_image;
  }
  set image(value) {
    this.#_image = value;
  }

  constructor(id, url, name, language, genres, image) {
    if (typeof id == "number") {
        this.#_id = id;
    }
    if (typeof url == "string") {
      this.#_url = url;
    }
    if (typeof name == "string") {
      this.#_name = name;
    }
    if (typeof language == "string") {
      this.#_language = language;
    }
    if (genres instanceof Array) {
      this.#_genres = genres;
    }
    if (image instanceof Object) {
      this.#_image = image;
    }
  }

  toJsonString() {
    return JSON.stringify(this);
  }

  static createFromJsonString(json) {
    let objetoJSON = JSON.parse(json);

    return new Serie(parseInt(objetoJSON.id), objetoJSON.url, objetoJSON.name, objetoJSON.language, objetoJSON.genres, objetoJSON.image);
  }

  createHtmlElement(){
    let nodoDiv = document.createElement("div");
    let nodoH5 = document.createElement("h5");
    let nodoTexto = document.createElement("p");
    let nodoImagen = document.createElement("img");
    let nodoLink = document.createElement("a");
    let nodoBoton = document.createElement("button");
    let texto;

    if(this.name === "Not Found"){
      texto = "La serie no existe";
    }else{
      texto = `ID: ${this.id}\n- Idioma: ${this.language}\n- Género: ${this.genres}`;
    }
    nodoDiv.id = this.id
    nodoDiv.classList = "card";

    nodoH5.classList = "card-title";
    nodoH5.innerText = this.#_name;

    nodoTexto.classList = "card-text";
    nodoTexto.innerText = texto;

    nodoImagen.src = this.image.medium;
    
    nodoLink.href = this.url;
    nodoLink.target = "_blank";
    nodoLink.appendChild(nodoImagen);

    nodoBoton.addEventListener("click", () => Serie.guardarSerie(this));
    nodoBoton.innerText = "Guardar";
    nodoBoton.classList = "btn btn-secondary";
    nodoBoton.id = `boton${this.id}`;

    nodoDiv.appendChild(nodoH5);
    nodoDiv.appendChild(nodoTexto);
    nodoDiv.appendChild(nodoLink);
    nodoDiv.appendChild(nodoBoton);

    return nodoDiv;
  }

  static guardarSerie(serie){
    localStorage.setItem(serie.id, serie.toJsonString());
  }

  toJSON(){
    return {
      id: this.#_id,
      genres: this.#_genres,
      image: this.#_image,
      language: this.#_language,
      name: this.#_name,
      url: this.#_url
    }
  }
}
