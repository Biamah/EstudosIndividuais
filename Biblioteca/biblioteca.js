const books = [
  {
    number: "0001",
    title: "harry potter",
    author: "Jk Rolling",
    status: "Disponível",
    name: null
  },
  {
    number: "0002",
    title: "A ordem da fenix",
    author: "Jk Rolling",
    status: "Disponível",
    name: null
  },
  {
    number: "0003",
    title: "Se beber nao case",
    author: "So elas",
    status: "Disponível",
    name: null
  }
]

//tentativa de fazer funcionar input
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// funcao que vai executar os comandos
function main() {
  menuPrincipal()
}

// Aqui ficara os parametros
let opcaoUm = 01
let opcaoDois = 02
let opcaoTres = 03

function menuPrincipal() {
  console.log(`Menu Principal \n`)

  console.log(`${opcaoUm}. Retirar um livro`)
  console.log(`${opcaoDois}. Devolver um livro`)
  console.log(`${opcaoTres}. Doar um livro`);

  rl.question('Qual sua opção:', (answer) => {
    console.log(`Opção escolhida: ${answer}`);

    rl.close()
  })
}



main()


