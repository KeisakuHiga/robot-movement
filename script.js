const readlineSync = require('readline-sync');

class Robot {
  constructor(x, y, direction) {
    this.x = parseInt(x)
    this.y = parseInt(y)
    this.direction = direction
  }

  move = () => {
    let option = this.direction
    switch(option) {
      case "N":
        if(this.y === 4) {
          console.log('You can move to North!')
        } else {
          this.y++
        }
        break;
      case "S":
        if(this.y === 0) {
          console.log('You can move to South!')
        } else {
          this.y--
        }
        break;
      case "E":
        if(this.x === 4) {
          console.log('You can move to East!')
        } else {
          this.x++
        }
        break;
      case "W":
        if(this.x === 0) {
          console.log('You can move to West!')
        } else {
          this.x--
        }
        break;
      default:
        console.log('Please enter a valid number!')
    }
  }

}

const run = () => {
  console.log('You can set a start position where your toy robot will be placed.')
  console.log('Where would you like to set your toy robot?')
  console.log('Set the start position x, y and a direction!')
  let x
  let y
  let direction
  x = readlineSync.question('Type a number from 0 ~ 4');
  y = readlineSync.question('Type a number from 0 ~ 4');
  direction = readlineSync.question('Type a direction from "N", "S", "E" and "W"');
  const newRobot = new Robot(x, y, direction)
  newRobot.move()
  newRobot.move()
  newRobot.move()
  newRobot.move()
  newRobot.move()
  newRobot.move()
  console.log(newRobot)
}

run()