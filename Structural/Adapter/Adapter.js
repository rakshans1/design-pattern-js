// Consider a game where there is a hunter and he hunts lions.

// First we have an interface Lion that all types of lions have to implement

/*
Lion interface :

roar()
*/

class AfricanLion  {
  roar() {}
}

class AsianLion  {
  roar() {}
}

// And hunter expects any implementation of Lion interface to hunt.

class Hunter {
  hunt(lion) {
      // ... some code before
      lion.roar()
      //... some code after
  }
}

// Now let's say we have to add a WildDog in our game so that hunter can hunt that also. But we can't do that directly because dog has a different interface. 
// To make it compatible for our hunter, we will have to create an adapter that is compatible

class WildDog {
  bark() {

  }
}
// Adapter around wild dog to make it compatible with our game
class WildDogAdapter {
  constructor(dog) {
    this.dog = dog;
  }

  roar() {
    this.dog.bark();
  }
}

// And now the WildDog can be used in our game using WildDogAdapter.

const wildDog = new WildDog();
const wildDogAdapter = new WildDogAdapter(wildDog)

const hunter = new Hunter();
hunter.hunt(wildDogAdapter);
