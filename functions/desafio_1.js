const cart = [
  { name: 'Caneta', amount: 10, price: 8.0, fragile: true },
  { name: 'Impressora', amount: 1, price: 650.0, fragile: true },
  { name: 'Caderno', amount: 4, price: 28.0, fragile: false },
  { name: 'Lapis', amount: 3, price: 2.0, fragile: false },
  { name: 'Tesoura', amount: 1, price: 20.0, fragile: false },
]

// 1. fragil: true
// 2. amount * price
// 3. media totais

const getFragiles = item => item.fragile
const getTotalProduct = ({amount, price}) => amount * price
const getMedia = (acc, el, index, list) => {
  if(index === list.length -1){
    return (acc + el)/ list.length
  } else {
    return acc + el
  }
}

const result = cart
  .filter(getFragiles)
  .map(getTotalProduct)
  .reduce(getMedia)

console.log(result);