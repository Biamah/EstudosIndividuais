// dentro de um array de tres posições, alterar o valor do meio para 1, sem usar um for

const listaArray = [0, 0, 0];

listaArray[1] = 1;
// console.log(listaArray);

// alterar o último valor da lista do array

// listaArray[2] = 3;
// console.log(listaArray);

// mesma coisa usando length

let ultimoValor = listaArray.length - 1

listaArray[ultimoValor] = 5;
console.log(listaArray);