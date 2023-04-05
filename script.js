const numUser = parseInt(prompt("Digite um número: "));

// Pegando número do user //

// variaveis de para iniciar o loop
let n1 = 0;
let n2 = 1;
let numUserPertence = false;

// array para armazenar a sequencia e para depois exibir na tela
const fibonacci = [n1, n2];


/* loop fibonacci, aonde á sequencia de fibonacci vai até o numero 
que o user informou e depois exibe na tela se o número pertence á sequencia*/

while (n2 <= numUser) {

  const next = n1 + n2;
  fibonacci.push(next);

  if (n2 === numUser) {
    numUserPertence = true;
    break;
  }

  const numProximo = n1 + n2;
  n1 = n2;
  n2 = numProximo;

}

console.log(`Sequencia de fibonacci até ${numUser}: ${fibonacci.join(", ")}`)

if (numUserPertence) {
  console.log(`${numUser} pertence á sequencia de fibonacci`)
} else {
  console.log(`${numUser} Não pertence á sequencia de fibonacci`)
}