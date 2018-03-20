/*
Coffee interface:
getCost()
getDescription()
*/

class SimpleCoffee{

  getCost() {
      return 10
  }

  getDescription() {
      return 'Simple coffee'
  }
}

// We want to make the code extensible to allow options to modify it if required. Lets make some add-ons (decorators)

class MilkCoffee {


  constructor(coffee) {
      this.coffee = coffee
  }

  getCost() {
      return this.coffee.getCost() + 2
  }

  getDescription() {
      return this.coffee.getDescription() + ', milk'
  }
}

class WhipCoffee {

  constructor(coffee) {
      this.coffee = coffee
  }

  getCost() {
      return this.coffee.getCost() + 5
  }

  getDescription() {
      return this.coffee.getDescription() + ', whip'
  }
}



class VanillaCoffee {

  constructor(coffee) {
      this.coffee = coffee
  }

  getCost() {
      return this.coffee.getCost() + 3
  }

  getDescription() {
      return this.coffee.getDescription() + ', vanilla'
  }
}

let someCoffee

someCoffee = new SimpleCoffee()

console.log(someCoffee.getCost());
console.log(someCoffee.getDescription());

someCoffee = new MilkCoffee(someCoffee);

console.log(someCoffee.getCost());
console.log(someCoffee.getDescription());

someCoffee = new WhipCoffee(someCoffee);

console.log(someCoffee.getCost());
console.log(someCoffee.getDescription());

someCoffee = new VanillaCoffee(someCoffee);

console.log(someCoffee.getCost());
console.log(someCoffee.getDescription());