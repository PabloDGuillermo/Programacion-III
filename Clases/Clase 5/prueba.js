//Nros primos

console.log("Nros primos\n");

function encontrarPrimos(numero) {
  let numerosPrimos = [];

  for (let i = 2; i <= numero; i++) {
    if (esPrimo(i)) {
      numerosPrimos.push(i);
    }
  }

  console.log(
    "Los números primos hasta el " + numero + " son: " + numerosPrimos
  );
}

function esPrimo(numero) {
  let flag = 0;

  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
}

encontrarPrimos(10);

//Palíndromo

console.log("\n\nPalíndromos\n");

function esPalindromo(palabra) {
  let palabraInvertida = palabra.split("").reverse().join("");

  if (palabra === palabraInvertida) {
    return true;
  } else {
    return false;
  }
}

console.log(esPalindromo("neuquen"));
console.log(esPalindromo("reconocer"));
console.log(esPalindromo("rallar"));
console.log(esPalindromo("fdjshfdasjhfdkaskj"));

//Remover duplicados en array

console.log("\nRemover duplicados en un array\n");

function removerDuplicados(array = []) {
  let arrayRetorno = [];

  for (i = 0; i < array.length; i++) {
    if (!arrayRetorno.includes(array[i])) {
      arrayRetorno.push(array[i]);
    }
  }

  return arrayRetorno;
}

let array = [1, 2, 2, 3, 4, 3, 5];

let nuevoArray = removerDuplicados(array);

console.log(nuevoArray);

//Sumar dígitos a partir de un string
console.log("\nSumar dígitos a partir de un string\n");

function sumarDigitos(cadena) {
  let suma = 0;

  for (i = 0; i < cadena.length; i++) {
    suma += parseInt(cadena[i]);
  }

  return suma;
}

console.log(sumarDigitos("123456"));

//Convertir arrays anidados en un array plano
console.log("\nConvertir arrays anidados en un array plano\n");

function flatterArray(arrayAnidado) {
  let arrayRetorno = [];
}
