const readlineSync = require('readline-sync');

class Robot {
  constructor(x, y, direction) {
    this.x = x
    this.y = y
    this.direction = direction
    this.directions = ['N', 'E', 'S', 'W']
  }

  move = () => {
    let option = this.direction
    switch(option) {
      case "N":
        if(this.y === 4) {
          console.log('You cannot move to North!')
        } else {
          this.y++
        }
        break;
      case "S":
        if(this.y === 0) {
          console.log('You cannot move to South!')
        } else {
          this.y--
        }
        break;
      case "E":
        if(this.x === 4) {
          console.log('You cannot move to East!')
        } else {
          this.x++
        }
        break;
      case "W":
        if(this.x === 0) {
          console.log('You cannot move to West!')
        } else {
          this.x--
        }
        break;
      default:
        console.log('Please enter a valid number!')
    }
  }

  left = () => {
    let index = this.directions.findIndex(d => d === this.direction)
    if (!index) {
      this.direction = this.directions[this.directions.length - 1]
    } else {
      index--
      this.direction = this.directions[index]
    }
  }

  right = () => {
    let index = this.directions.findIndex(d => d === this.direction)
    if (index === 3) {
      this.direction = this.directions[0]
    } else {
      index++
      this.direction = this.directions[index]
    }
  }

  report = () => {
    console.log(`${this.x}, ${this.y}, ${this.direction}`)
  }
}

const run = () => {
  console.log('You can set a start position where your toy robot will be placed.')
  console.log('Where would you like to set your toy robot?')
  console.log('Set the start position x, y and a direction!')
  let x
  let y
  let direction

  x = readlineSync.questionInt('Type a number from 0 ~ 4 for "x"')
  while(x < 0 || x > 4 ) {
    console.log('Warning! Please type a valid number(0 ~ 4)')
    x = readlineSync.questionInt('Type a number from 0 ~ 4 for "x"')
  }

  y = readlineSync.questionInt('Type a number from 0 ~ 4 for "y"')
  while(y < 0 || y > 4 ) {
    console.log('Warning! Please type a valid number(0 ~ 4)')
    y = readlineSync.questionInt('Type a number from 0 ~ 4 for "y"')
  }

  direction = readlineSync.question('Type a direction from "N", "S", "E" and "W"').toUpperCase() 
  while(direction !== "N" && direction !== "S" && direction !== "E" && direction !== "W") {
    console.log('Wording! Please type a valid direction!')
    direction = readlineSync.question('Type a direction from "N", "S", "E" and "W"').toUpperCase()
  }

  const newRobot = new Robot(x, y, direction)
  newRobot.move()
  newRobot.move()
  newRobot.left()
  newRobot.move()
  newRobot.report()
}

run()