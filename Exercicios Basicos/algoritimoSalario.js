// Uma empresa tem para um determinado funcionário uma ficha contendo: o nome, número de horas trabalhadas e o No. de dependentes dele.
// Considerando que: 
// A empresa paga R$ 12 por hora e R$ 40 por dependentes. 
// Sobre o salário são feito descontos de 8,5% para o INSS e 5% para IR. 
// Faça um algoritmo para ler o Nome, número de horas trabalhadas e número de dependentes de um funcionário. Após a leitura, escreva qual o Nome, salário bruto, os valores descontados para cada tipo de imposto e finalmente qual o salário líquido do funcionário. 

// calculo do salario Bruto
function calculaSalarioBruto(horasTrabalhadas, dependentes) {
  let calculaHoras = horasTrabalhadas * 12;
  let calculaDependentes = dependentes * 40;
  let calculo = calculaHoras + calculaDependentes;

  return calculo;
}

console.log(calculaSalarioBruto(40, 3));

// calculo do Desconto
function calculoDesconto() {
  let salario = calculaSalarioBruto(40, 3);
  let descontoInss = salario * 0.085;
  let descontoIr = salario * 0.05;
  let calculo = descontoInss + descontoIr;

  return calculo;
}

console.log(calculoDesconto());

// salario Liquido
const calculoSalarioLiquido = calculaSalarioBruto(40, 3) - calculoDesconto();

console.log(calculoSalarioLiquido);