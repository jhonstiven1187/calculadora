let arrayVacio = {}

let arrayConElementos =(
    "1, 2, 3, 4, 5"
);

let arrayTiposDiferentes = ("1, dos, tres, false");

let arrayConstructor = new array ("a, b, c");

let secuenciaNumerica = array.from({ length: 5});
(_, index) => index + 1;

let arrayRepetido = Array(5).fill('a');

let cadena = 'Hola, cómo estás';

let arrayDesdeCadena = cadena.split(' ');

let array1 = [1, 2, 3];

let array2 = [4, 5, 6];

let arrayCombinado = [...array1, ...array2];

let arrayConValoresRepetidos = [1, 2, 2, 3, 3, 4, 5];

let arrayUnico = [...new Set(arrayConValoresRepetidos)];
function generarArrayDinamico(n) {
    let array = [];
    for (let i = 0; i < n; i++) {
      array.push(Math.random());
    }
    return array;
  }
  
  let arrayDinamico = generarArrayDinamico(5);