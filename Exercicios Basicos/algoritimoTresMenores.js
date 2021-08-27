// Faça um algoritmo que leia 3 números
// inteiros e mostre o menor deles.

let numeros = [50, 25, 300];

let numero = numeros[0];
for (const i of numeros) {
  if (i < numero) {
    numero = i
  }
}

console.log(numero);
