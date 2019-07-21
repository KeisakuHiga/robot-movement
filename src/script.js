function sum(a, b) {
  return a + b;
}
module.exports = sum;

const readlineSync = require('readline-sync');
class Robot {
  constructor() {
    this.x = 0
    this.y = 0
    this.f = 'NORTH'
    this.directions = ['NORTH', 'EAST', 'SOUTH', 'WEST']
    this.place()
  }

  printCommands = () => {
    console.log(`\nRobot is at [${this.x}, ${this.y}] and facing ${this.f}\n`)
    console.log('Choose your command!')
    const userChoice = readlineSync.questionInt('1. Place the robot to a new place!\n2. Move forward!\n3. Turn left!\n4. Turn right!\n5. Report the place where the robot is!\n6. Quit!\n');
    return userChoice
  }

  place = () => {
    this.x = readlineSync.questionInt('Type a number from 0 ~ 4 for "X"\n')
    while(this.x < 0 || this.x > 4 ) {
      console.clear()
      console.log('WARNING! Please type a valid number(0 ~ 4)\n')
      this.x = readlineSync.questionInt('Type a number from 0 ~ 4 for "X"\n')
    }
    console.clear()
    this.y = readlineSync.questionInt('Type a number from 0 ~ 4 for "Y"\n')
    while(this.y < 0 || this.y > 4 ) {
      console.clear()
      console.log('WARNING! Please type a valid number(0 ~ 4)\n')
      this.y = readlineSync.questionInt('Type a number from 0 ~ 4 for "Y"\n')
    }
    console.clear()
    this.f = readlineSync.question('Type a direction from "NORTH", "SOUTH", "EAST" and "WEST"\n').toUpperCase() 
    while(this.f !== "NORTH" && this.f !== "SOUTH" && this.f !== "EAST" && this.f !== "WEST") {
      console.clear()
      console.log('WARNING! Please type a valid direction!\n')
      this.f = readlineSync.question('Type a direction from "NORTH", "SOUTH", "EAST" and "WEST"\n').toUpperCase()
    }
  }

  move = () => {
    let option = this.f
    switch(option) {
      case "NORTH":
        if(this.y === 4) {
          console.log('You cannot move to NORTH!')
        } else {
          this.y++
          console.log('Robot moved forward!\n')
        }
        break;
      case "SOUTH":
        if(this.y === 0) {
          console.log('You cannot move to SOUTH!')
        } else {
          this.y--
          console.log('Robot moved forward!\n')
        }
        break;
      case "EAST":
        if(this.x === 4) {
          console.log('You cannot move to EAST!')
        } else {
          this.x++
          console.log('Robot moved forward!\n')
        }
        break;
      case "WEST":
        if(this.x === 0) {
          console.log('You cannot move to WEST!')
        } else {
          this.x--
          console.log('Robot moved forward!\n')
        }
        break;
      default:
        console.log('Please enter a valid number!')
    }
  }

  left = () => {
    let index = this.directions.findIndex(d => d === this.f)
    if (!index) {
      this.f = this.directions[this.directions.length - 1]
    } else {
      index--
      this.f = this.directions[index]
    }
  }

  right = () => {
    let index = this.directions.findIndex(d => d === this.f)
    if (index === 3) {
      this.f = this.directions[0]
    } else {
      index++
      this.f = this.directions[index]
    }
  }

  report = () => {
    console.log(`${this.x}, ${this.y}, ${this.f}`)
  }

  run = () => {
    let command
    while( command !== 6) {
      command = this.printCommands()
      switch(command) {
        case 1:
          console.clear()
          this.place()
  
          break;
        case 2:
          this.move()
          break;
        case 3:
          this.left()
          console.clear()
          console.log('Robot turned left!\n')
          break;
        case 4:
          this.right()
          console.clear()
          console.log('Robot turned right!\n')
          break;
        case 5:
          console.clear()
          console.log('Robot is at...\n')
          this.report()
          break;
        case 6:
          console.clear()
          console.log('See you!')
          break;
        default:
          console.log('Type a validate command number!\n')
      }
    }
  }
}

const newRobot = new Robot()
newRobot.run()

