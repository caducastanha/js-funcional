function hasErrorOrNo (value, errorProb)  {
  return new Promise((resolve, reject) => {
    if (Math.random() < errorProb) {
      reject('Ocorreu um erro')
    } else {
      resolve(value)
    }
  })
}

hasErrorOrNo('Teste', 0.9)
  .then(console.log)
  .catch(console.log)
