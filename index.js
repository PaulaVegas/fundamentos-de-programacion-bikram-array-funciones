//PAIR PROGRAMMING

//Arrays
const arrayVacio = [];
const arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const arrayNumerosPares = [0, 2, 4, 6, 8];
const arrayBidimensional = [
  [0, 1, 2],
  ["a", "b", "c"],
];

//Funciones
function suma(a, b) {
  return a + b;
}

function potenciacion(a, b) {
  return Math.pow(a, b);
}

function separarPalabras(string) {
  return string.split(" ");
}

function repetirString(string, numero) {
  return (arrayRepe = string.repeat(numero));
}

function esPrimo(numero) {
  for (let i = 2; i < numero / 2; i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
}

function ordenarArray(array) {
  return array.reverse();
}

// function ordenarArray(array) {
//   return array.sort(function (a, b) {
//     return a - b;
//   });
// }

function obtenerPares(array) {
  return array.filter((number) => number % 2 === 0);
}

// /*No entiendo bien */
function pintarArray(array) {
  let arrayPintado = array[0].toString();

  for (let i = 1; i < array.length; i++) {
    arrayPintado += ", " + array[i].toString();
  }
  return "[" + arrayPintado + "]";
}

pintarArray([0, 1, 2]);

/*No entiendo bien */
function arrayMapi(array, funcion) {
  let arrayFuncion = [];
  for (let i = 0; i < array.length; i++) {
    arrayFuncion[i] = funcion(array[i]);
  }
  return arrayFuncion;
}

function eliminarDuplicados(array) {
  let arrayNuevo = [];
  for (i = 0; i < array.length; i++) {
    if (!arrayNuevo.includes(array[i])) {
      arrayNuevo.push(array[i]);
    }
  }
  return arrayNuevo;
}

// //PROYECTO
const arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];
const holaMundo = ["Hola", "Mundo"];
const loGuardoTodo = ["hola", "que", 23, 42.33, "tal"];
const arrayDeArrays = [
  [756, "nombre"],
  [225, "apellido"],
  [298, "direccion"],
];

function multiplicacion(a, b) {
  return a * b;
}

function division(a, b) {
  return a / b;
}

function esPar(numero) {
  if (numero % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

function resta(a, b) {
  return a - b;
}
//El resto de funciones ya estaban declaradas
arrayFunciones = [suma, resta, multiplicacion];

function ordenarArray2(array) {
  return array.sort(function (a, b) {
    return b - a;
  });
}

function obtenerImpares(array) {
  return array.filter((number) => number % 2 !== 0);
}

function sumarArray(array) {
  let suma = 0;
  for (let i = 0; i < array.length; i++) {
    suma += array[i];
  }
  return suma;
}

function multiplicarArray(array) {
  let multiplicacion = 1;
  for (let i = 0; i < array.length; i++) {
    multiplicacion *= array[i];
  }
  return multiplicacion;
}
