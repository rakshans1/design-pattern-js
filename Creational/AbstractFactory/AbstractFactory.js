// First of all we have our Door interface and some implementation for it
/*
Door interface :

getDescription()
*/

class WoodenDoor {
  getDescription() {
    console.log('I am a wooden Door');
  }
}

class IronDoor {
  getDescription() {
    console.log('I am a Iron Door');
  }
}

// Then we have some fitting experts for each door type
/*
DoorFittingExpert interface :

getDescription()
*/
class Welder {
  getDescription() {
      console.log('I can only fit iron doors')
  }
}

class Carpenter {
  getDescription() {
      console.log('I can only fit wooden doors')
  }
}
/*
Now we have our abstract factory that would let us make family of related objects 
i.e. wooden door factory would create a wooden door and wooden door fitting expert 
and iron door factory would create an iron door and iron door fitting expert
*/

/*
DoorFactory interface :

makeDoor()
makeFittingExpert()
*/
// Wooden factory to return carpenter and wooden door

class WoodenDoorFactory {
  makeDoor() {
    return new WoodenDoor();
  }
  makeFittingExpert() {
    return new Carpenter();
  }
}
// Iron door factory to get iron door and the relevant fitting expert
class IronDoorFactory {
  makeDoor(){
      return new IronDoor()
  }

  makeFittingExpert() {
      return new Welder()
  }
}

// And then it can be used as
const woodenFactory = new  WoodenDoorFactory();
const door = woodenFactory.makeDoor();
const expert = woodenFactory.makeFittingExpert();

door.getDescription();
expert.getDescription();

// Same for Iron Factory
const ironFactory = new IronDoorFactory()

const door1 = ironFactory.makeDoor()
const expert1 = ironFactory.makeFittingExpert()

door.getDescription();
expert.getDescription();