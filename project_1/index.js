const path = require('path')
const {
  readDir,
  endsWith,
  readFiles,
  removeEmptyLines,
  removeLineWithTimes,
  removeLineWithNumbers,
  removeCharacters,
  joinWord,
  separatorFor,
} = require('./functions')

const __path = path.join(__dirname, '..', 'dados', 'legendas')

const equalsWord = words => {
  return words.reduce((prevWords, currentWord) => {
    const p = currentWord.toLowerCase()
    if (prevWords[p]) {
      prevWords[p] += 1
    } else {
      prevWords[p] = 1
    }
    return prevWords
  }, {})
}

readDir(__path)
  .then(endsWith)
  .then(readFiles)
  .then(joinWord)
  .then(separatorFor('\n'))
  .then(removeEmptyLines)
  .then(removeLineWithTimes)
  .then(removeLineWithNumbers)
  .then(removeCharacters)
  .then(joinWord)
  .then(separatorFor(' '))
  .then(removeLineWithNumbers)
  .then(equalsWord)
  .then(obj => {
    const newArray = []
    for (const key in obj) {
      newArray.push({value:obj[key], key})
    }
    return newArray
  })
  .then(array => array.sort((a, b) => b.value-a.value).map(value => `${value.key}: ${value.value}`) )
  .then(console.log)
  .catch(console.log)
