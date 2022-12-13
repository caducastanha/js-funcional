const cart = [
  { name: 'Caneta', amount: 10, price: 8.0 },
  { name: 'Impressora', amount: 1, price: 650.0 },
  { name: 'Caderno', amount: 4, price: 28.0 },
  { name: 'Lapis', amount: 3, price: 2.0 },
  { name: 'Tesoura', amount: 1, price: 20.0 },
]

const getTotalProduct = ({ amount, price }) => amount * price

const getTotalCart = (ac, el) => ac + el

const totalCart = cart
  .map(getTotalProduct)
  .reduce(getTotalCart)

console.log(totalCart);

Array.prototype.myReduce = function (fn, initial) {
  let ac = initial

  for (let i = 0; i < this.length; i++) {
    if(!ac && i === 0) {
      ac = this[i]
      continue
    }

    ac = fn(ac, this[i], i, this)
  }

  return ac
}

const totalCartMyReduce = cart
  .map(getTotalProduct)
  .myReduce(getTotalCart)

console.log(totalCartMyReduce);