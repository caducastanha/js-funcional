// O QUE É FUNÇÃO PURA?
// Uma função pura é uma função em que o valor
// de retorno é determinado apenas por seus valores
// de entrada, sem efeitos colaterais observáveis

// impura
function gerarNumeroAleatorio(min, max) {
  const fator = max - min + 1;
  console.log('Math.random()', Math.random());
  return parseInt(Math.random() * fator) + min
}

console.log(gerarNumeroAleatorio(5, 6));