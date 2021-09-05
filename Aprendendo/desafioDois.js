// preencher com 1 apenas as linhas impares

const matriz = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
]

// aqui ele faz o loop apenas nas linhas impares
for (let i = 0; i < matriz.length; i++) {
  if (i % 2 === 0) {
    for (let e = 0; e < matriz[i].length; e++) {
      matriz[i][e] = 1;
    }
  }
}


// aqui ele repete o loop em todas as linhas
// for (let i = 0; i < matriz.length; i++) {
//   for (let j = 0; j < matriz[i].length; j++) {
//     if (i % 2 === 0) {
//       matriz[i][j] = 1;
//     }
//   }
// }

console.log(matriz);