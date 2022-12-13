// O QUE É FUNÇÃO PURA?
// Uma função pura é uma função em que o valor
// de retorno é determinado apenas por seus valores
// de entrada, sem efeitos colaterais observáveis

let qtde = 0;

// pura
function somar(a, b) {
  qtde++;
  return a + b;
}

console.log('qtde', qtde);
console.log(somar(3, 2));
console.log(somar(3, 2));
console.log(somar(3, 2));
console.log(somar(3, 2));
console.log('qtde', qtde);