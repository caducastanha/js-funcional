function exec(cb, a, b) {
  return cb(a, b)
}

const somar = (x, y) => {
  return x + y
}

const result = exec(somar, 56, 38)

console.log(result);