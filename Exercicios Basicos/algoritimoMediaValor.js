// Dado uma série de 20 valores reais,  faça
// uma algoritmo que calcule e escreva a 
// média aritmética destes valores, entretanto 
// se a média obtida for maior que 8 deverá ser 
// atribuída 10 para a média.

function calculaValoresMedia(valores) {

  let valor = 0;
  for (const x of valores) {
    valor = valor + x;
  }

  let quantidadeDeValores = valores.length;
  let media = valor / quantidadeDeValores;
  return media;

}

let valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let media = calculaValoresMedia(valores)

if (media >= 8) {
  media = 10;
}


console.log(media);
