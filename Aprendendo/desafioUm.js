// trocar os valores dentro da matriz para 1

const matriz = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
]

for (let i = 0; i < matriz.length; i++) {
  for (let e = 0; e < matriz[i].length; e++) {
    matriz[i][e] = 1;
  }
}

matriz[1][2] = 3;

console.log(matriz);