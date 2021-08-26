// O preço de um automóvel é calculado pela
// soma do preço de fábrica com o preço dos 
// impostos (45% do preço de fábrica) e a 
// percentagem do revendedor (28% do preço 
// de fábrica).  
// Faça um algoritmo que leia o nome do 
// automóvel e o preço de fábrica e escreva o 
// nome do automóvel e o preço final. 

const calculaPrecoFinal = (nomeCarro, precoFabrica) => {
  let precoImposto = precoFabrica * 0.45;
  let porcentagemVendedor = precoFabrica * 0.28;

  const precoFinal = calculaImposto(precoImposto, porcentagemVendedor) + precoFabrica;
  console.log(nomeCarro, precoFinal);
}

let nomeCarro = "Fusca";

const calculaImposto = (precoImposto, porcentagemVendedor) => {
  let valorImposto = precoImposto + porcentagemVendedor
  return valorImposto
}

calculaPrecoFinal(nomeCarro, 100);
calculaPrecoFinal(nomeCarro, 200);
calculaPrecoFinal(nomeCarro, 300);
