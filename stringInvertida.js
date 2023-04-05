let string = prompt('Informe seu nome completo: ');
let stringInvertida = "";

for (let i = string.length - 1; i >= 0; i--) {
  stringInvertida += string[i];
}

console.log(`Seu nome invertido: ${stringInvertida}`);