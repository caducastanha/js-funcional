const randomNumber = (min, max, numbersPro) => {
  if (min > max) {
    [max, min] = [min, max]
  }

  return new Promise((resolve, reject) => {
    const random = parseInt(Math.random() * (max - min + 1)) + min
    if (numbersPro.includes(random)) {
      reject(`Número repetido ${random}`)
    } else {
      resolve(random)
    }
  })
}

async function megasena(qtdd) {
  try {
    const numbers = []

    for (const _ of Array(qtdd).fill()) {
      numbers.push(await randomNumber(1, 5, numbers))
    }

    return numbers

  } catch (error) {
    throw 'Numero repetido'
  }
}

megasena(2)
  .then(console.log)
  .catch(console.log)