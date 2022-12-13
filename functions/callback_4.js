const carts = [
  { name: 'Caneta', amount: 10, price: 7.99 },
  { name: 'Impressora', amount: 1, price: 649.99 },
  { name: 'Caderno', amount: 4, price: 27.99 },
  { name: 'Lapis', amount: 3, price: 1.99 },
  { name: 'Tesoura', amount: 1, price: 19.99 },
]

const greaterThanOne = item => item.amount > 1

const items = carts.filter(greaterThanOne)

console.log(items);

Array.prototype.myFilter = function(fn) {
  const myValues = []
  for (let i = 0; i < this.length; i++) {
    if (fn(this[i], i, this)) {
      myValues.push(this[i])
    }
  }
  return myValues
}

const greaterThanThree = item => item.amount > 3

const newItems = carts.myFilter(greaterThanThree)

console.log(newItems);
