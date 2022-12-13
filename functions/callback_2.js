const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'data.txt')

console.log(caminho);

const showContent = (err, content) => {
  if (err) {
    console.log('Erro na leitura do arquivo')
  }
  console.log(content.toString())
}

fs.readFile(caminho, showContent)
