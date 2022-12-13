function Product(name, price, desc = 0.1) {
  this.name = name
  this.price = price
  this.desc = desc

  this.finalPrice = function () {
    return this.price * (1 - this.desc)
  }
}

Product.prototype.log = function () {
  console.log(`Nome: ${this.name} \nPreço: R$ ${this.price}`)
}

const p = new Product('Notebook', 5000)
p.log()
console.log(p.price)
console.log(p.finalPrice())