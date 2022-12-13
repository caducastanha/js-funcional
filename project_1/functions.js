const fs = require('fs')
const path = require('path')

const readDir = __path => {
  return new Promise((resolve, reject) => {
    try {
      const files = fs.readdirSync(__path).map(file => path.join(__path, file))
      resolve(files)
    } catch (error) {
      reject(error)
    }
  })
}

const endsWith = files => {
  return files.filter(file => file.endsWith('.srt'))
}

const removeEmptyLines = lines => {
  return lines.filter(line => line.trim())
}

const removeLineWithTimes = lines => {
  return lines.filter(line => !line.includes('-->'))
}

const removeLineWithNumbers = lines => {
  return lines.filter(line => {
    const num = parseInt(line.trim())
    return num !== num
  })
}

const removeCharacters = lines => {
  const characters = ['<i>', '</i>', '\r', '-', '?', '.', '"', '♪', ',', '_', '</font>', '<font>', '[', ']', '(', ')', '!']
  return lines.map(line => {
    let text = line
    characters.forEach(char => {
      text = text.split(char).join('')
    })
    return text.trim()
  })
}

const readFile = __path => {
  return new Promise((resolve, reject) => {
    try {
      const file = fs.readFileSync(__path, { encoding: 'utf-8' }).toString()
      resolve(file)
    } catch (error) {
      reject(error)
    }
  })
}

const readFiles = files => {
  return Promise.all(files.map(file => readFile(file)))
}

const joinWord = array => {
  return array.join(' ')
}

const separatorFor = simbol => {
  return text => text.split(simbol)
}


module.exports = {
  readDir,
  endsWith,
  readFiles,
  removeEmptyLines,
  removeLineWithTimes,
  removeLineWithNumbers,
  removeCharacters,
  joinWord,
  separatorFor,
}