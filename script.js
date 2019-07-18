const readlineSync = require('readline-sync');

class Robot {
  constructor() {
    this.x = 0
    this.y = 0
    this.direction = 'N'
    this.directions = ['N', 'E', 'S', 'W']
    this.place()
  }

  place = () => {
    console.log('You can set a start position where your toy robot will be placed.')
    console.log('')
    console.log('Where would you like to set your toy robot?')
    console.log('')
    console.log('Set the start position x, y and a direction!')
    console.log('')
    this.x = readlineSync.questionInt('Type a number from 0 ~ 4 for "x"')
    while(this.x < 0 || this.x > 4 ) {
      console.log('Warning! Please type a valid number(0 ~ 4)')
      console.log('')
      this.x = readlineSync.questionInt('Type a number from 0 ~ 4 for "x"')
    }
    console.log('')
    this.y = readlineSync.questionInt('Type a number from 0 ~ 4 for "y"')
    while(this.y < 0 || this.y > 4 ) {
      console.log('Warning! Please type a valid number(0 ~ 4)')
      console.log('')
      this.y = readlineSync.questionInt('Type a number from 0 ~ 4 for "y"')
    }

    console.log('')
    this.direction = readlineSync.question('Type a direction from "N", "S", "E" and "W"').toUpperCase() 
    while(this.direction !== "N" && this.direction !== "S" && this.direction !== "E" && this.direction !== "W") {
      console.log('Wording! Please type a valid direction!')
      console.log('')
      this.direction = readlineSync.question('Type a direction from "N", "S", "E" and "W"').toUpperCase()
    }
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
  const newRobot = new Robot()
  newRobot.move()
  newRobot.move()
  newRobot.left()
  newRobot.move()
  newRobot.report()
}

run()