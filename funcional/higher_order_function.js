// Funções que operam em outras funções,
// tomando-as como argumentos ou retornando-as,
// são chamadas de higher-order functions.

function exec(initialText) {
  return function (fn, ...params) {
    return `${initialText} ${fn(...params)}`
  }
}

function somar(a, b, c) {
  return a + b + c;
}

function mult(a, b) {
  return a * b;
}

const r1 = exec('O resultado da soma é:')(somar, 1, 2, 3);
const r2 = exec('O resultado da multiplicação é:')(mult, 1, 2);

console.log(r1);
console.log(r2);