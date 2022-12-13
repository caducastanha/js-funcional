// Diz-se que uma linguagem de programação possui
// funções de primeira classe qunado funções nessa
// linguagem são tratadas como qualquer outra variável.

const x = 2;
const y = function (text) {
  return `O texto é: ${text}`;
}

console.log(x);
console.log(y('Hello'));