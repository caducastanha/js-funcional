class Product {
  constructor(name, price, desc = 0.1) {
    this._name = name
    this.price = price
    this.desc = desc
  }

  get name() {
    return this._name
  }

set name(newName) {
  this._name = newName
}

 get finalPrice() {
    return this.price * (1 - this.desc)
  }
}

const p = new Product('Notebook', 5000)
console.log(p.name)
p.name = 'Dell'
console.log(p.name)
console.log(p.price)
console.log(p.finalPrice)