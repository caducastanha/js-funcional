const carts = [
  { name: 'Caneta', amount: 10, price: 7.99 },
  { name: 'Impressora', amount: 1, price: 649.99 },
  { name: 'Caderno', amount: 4, price: 27.99 },
  { name: 'Lapis', amount: 3, price: 1.99 },
  { name: 'Tesoura', amount: 1, price: 19.99 },
]

const getName = item => item.name
console.log(carts.map(getName));

const getTotal = item => item.amount * item.price
console.log(carts.map(getTotal));

Array.prototype.myMap = function(fn) {
  const newValues = []
  for (let i = 0; i < this.length; i++) {
    newValues.push(fn(this[i], i, this))
  }
  return newValues
}

console.log(carts.myMap(getName));

console.log(carts.myMap(getTotal));

