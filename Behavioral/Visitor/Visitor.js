class Monkey {
  shout() {
    console.log('Ooh oo aa aa!')
  }

  accept(operation) {
    operation.visitMonkey(this)
  }
}

class Lion {
  roar() {
    console.log('Roaaar!')
  }

  accept(operation) {
    operation.visitLion(this)
  }
}

class Dolphin {
  speak() {
    console.log('Tuut tuttu tuutt!')
  }

  accept(operation) {
    operation.visitDolphin(this)
  }
}

const speak = {
  visitMonkey(monkey) {
    monkey.shout()
  },
  visitLion(lion) {
    lion.roar()
  },
  visitDolphin(dolphin) {
    dolphin.speak()
  }
}


const monkey = new Monkey()
const lion = new Lion()
const dolphin = new Dolphin()

monkey.accept(speak)    // Ooh oo aa aa!
lion.accept(speak)      // Roaaar!
dolphin.accept(speak)   // Tuut tutt tuutt!


// We could have done this simply by having a inheritance hierarchy for the animals but then we would have to modify the animals whenever we would have to add new actions to animals. But now we will not have to change them. For example, let's say we are asked to add the jump behavior to the animals, we can simply add that by creating a new visitor i.e.

const jump = {
  visitMonkey(monkey) {
    console.log('Jumped 20 feet high! on to the tree!')
  },
  visitLion(lion) {
    console.log('Jumped 7 feet! Back on the ground!')
  },
  visitDolphin(dolphin) {
    console.log('Walked on water a little and disappeared')
  }
}


monkey.accept(speak)   // Ooh oo aa aa!
monkey.accept(jump)    // Jumped 20 feet high! on to the tree!

lion.accept(speak)     // Roaaar!
lion.accept(jump)      // Jumped 7 feet! Back on the ground!

dolphin.accept(speak)  // Tuut tutt tuutt!
dolphin.accept(jump)// Walked on water a little and disappeared