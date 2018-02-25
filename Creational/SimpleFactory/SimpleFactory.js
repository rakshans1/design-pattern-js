// First of all we have a door interface and the implementation
/*
Door

getWidth()
getHeight()

*/

class WoodenDoor {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getWidth() {
    return this.width;
  }

  getHeight() {
    return this.height;
  }
}

// Then we have our door factory that makes the door and returns it

const DoorFactory = {
  makeDoor: (width, height) => new WoodenDoor(width, height)
}

// And then it can be used as

const door = DoorFactory.makeDoor(100, 200);
console.log('Width', door.getWidth());
console.log('Height', door.getHeight())