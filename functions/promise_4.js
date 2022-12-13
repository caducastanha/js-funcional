const randomNumber = (min, max, time) => {
  if (min > max) {
    [max, min] = [min, max]
  }

  return new Promise(resolve => {
    setTimeout(() => {
      const random = parseInt(Math.random() * (max - min + 1)) + min
      resolve(random)
    }, time);
  })
}

const moreRandomNumber = () => {
  return Promise.all([
    randomNumber(10, 30, 2000),
    randomNumber(10, 30, 500),
    randomNumber(10, 30, 1000),
    randomNumber(10, 30, 2000),
  ])
}

console.time('promise')

moreRandomNumber()
  .then(console.log)
  .finally(() => console.timeEnd('promise'))