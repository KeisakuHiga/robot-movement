const readlineSync = require('readline-sync');

class Robot {
  constructor(x, y) {
    this.x = x
    this.y = y
  }


}

const placeRobot = () => {
  
}

const run = () => {
  console.log('You can set a start position where your toy robot will be placed.')
  console.log('Where would you like to set your toy robot?')
  console.log('Choose position x and y!')
  let x
  let y
  x = readlineSync.question('Select a number from 0 ~ 4 for x position');
  y = readlineSync.question('Select a number from 0 ~ 4 for x position');
  const newRobot = new Robot(x, y)
  console.log(newRobot)
}

run()