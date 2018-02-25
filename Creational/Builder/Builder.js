// First of all we have our burger that we want to make
class Burger {
  constructor(builder) {
    this.size = builder.size
    this.cheeze = builder.cheeze || false
    this.pepperoni = builder.pepperoni || false
    this.lettuce = builder.lettuce || false
    this.tomato = builder.tomato || false
  }
}

// And then we have the builder
class BurgerBuilder {

  constructor(size) {
      this.size = size
  }

  addPepperoni() {
      this.pepperoni = true
      return this
  }

  addLettuce() {
      this.lettuce = true
      return this
  }

  addCheeze() {
      this.cheeze = true
      return this
  }

  addTomato() {
      this.tomato = true
      return this
  }

  build() {
      return new Burger(this)
  }
}

// And then it can be used as:
const burger = (new BurgerBuilder(14))
    .addPepperoni()
    .addLettuce()
    .addTomato()
    .build()

console.log(burger);