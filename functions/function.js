const somar = a => {
  return b => {
    return c => {
      return a + b + c
    }
  }
}

console.log(somar(4)(3)(3));

const calcular = a => {
  return b => {
    return fn => {
      return fn(a, b)
    }
  }
}

const subtrair = (a, b) => a - b
const mult = (a, b) => a * b

console.log(calcular(6)(3)(subtrair));
console.log(calcular(6)(3)(mult));

