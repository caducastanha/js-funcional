const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'data.txt')

const getFile = (caminho) => {
  return new Promise((resolve, reject) => {
    fs.readFile(caminho, (err, content) => {
      if (err) {
        reject('Erro na leitura do arquivo')
      }
      resolve(content.toString())
    })
  })
}

getFile(caminho)
  .then(console.log)
  .catch(console.log)
