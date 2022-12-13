const randomNumber = (min, max) => {
  if (min > max) {
    [max, min] = [min, max]
  }

  return new Promise(resolve => {
    const random = parseInt(Math.random() * (max - min + 1)) + min
    resolve(random)
  })
}

randomNumber(30, 20)
  .then(console.log)