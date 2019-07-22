// const readlineSync = require('readline-sync');
const fs = require('fs')
class Robot {
  constructor() {
    this.x = 0
    this.y = 0
    this.f = 'NORTH'
    this.directions = ['NORTH', 'EAST', 'SOUTH', 'WEST']
    this.readInput()
  }
  
  // printCommands function might not necessary
  printCommands = () => {
    // console.log(`\nRobot is at [${this.x}, ${this.y}] and facing ${this.f}\n`)
    // console.log('Choose your command!')
    // const userChoice = readlineSync.questionInt('1. Place the robot to a new place!\n2. Move forward!\n3. Turn left!\n4. Turn right!\n5. Report the place where the robot is!\n6. Quit!\n');
    return userChoice
  }

// read input data function from text file
  readInput = () => {
    fs.readFile('src/input/input1.txt', (err, data) => {
      if(err) throw err;
      console.log(data.toString())
    })
  }
// this will return an object that has x, y and f data, and the data will be
// passed to place function which receive the object as an argument

// if the first line of input data is not PLACE command,
// all commands written after the first line should be ignored

// if a PLACE command gives greater than 4 for x and y, and wrong directions
// this command will return null

  place = (inputObj) => {
    // this.x = readlineSync.questionInt('Type a number from 0 ~ 4 for "X"\n')
    while(this.x < 0 || this.x > 4 ) {
      // console.clear()
      // console.log('WARNING! Please type a valid number(0 ~ 4)\n')
      // this.x = readlineSync.questionInt('Type a number from 0 ~ 4 for "X"\n')
    }
    console.clear()
    // this.y = readlineSync.questionInt('Type a number from 0 ~ 4 for "Y"\n')
    while(this.y < 0 || this.y > 4 ) {
      // console.clear()
      // console.log('WARNING! Please type a valid number(0 ~ 4)\n')
      // this.y = readlineSync.questionInt('Type a number from 0 ~ 4 for "Y"\n')
    }
    console.clear()
    // this.f = readlineSync.question('Type a direction from "NORTH", "SOUTH", "EAST" and "WEST"\n').toUpperCase() 
    while(this.f !== "NORTH" && this.f !== "SOUTH" && this.f !== "EAST" && this.f !== "WEST") {
      // console.clear()
      // console.log('WARNING! Please type a valid direction!\n')
      // this.f = readlineSync.question('Type a direction from "NORTH", "SOUTH", "EAST" and "WEST"\n').toUpperCase()
    }
  }

  move = () => {
    let option = this.f
    switch(option) {
      case "NORTH":
        if(this.y === 4) {
          // console.log('You cannot move to NORTH!')
        } else {
          // console.log('Robot moved forward!\n')
          return this.y++
        }
        break;
      case "SOUTH":
        if(this.y === 0) {
          // console.log('You cannot move to SOUTH!')
        } else {
          // console.log('Robot moved forward!\n')
          return this.y--
        }
        break;
      case "EAST":
        if(this.x === 4) {
          // console.log('You cannot move to EAST!')
        } else {
          // console.log('Robot moved forward!\n')
          return this.x++
        }
        break;
      case "WEST":
        if(this.x === 0) {
          // console.log('You cannot move to WEST!')
        } else {
          // console.log('Robot moved forward!\n')
          return this.x--
        }
        break;
      default:
        // console.log('Please enter a valid number!')
    }
  }

  left = () => {
    let index = this.directions.findIndex(d => d === this.f)
    if (!index) {
      return this.f = this.directions[this.directions.length - 1]
    } else {
      index--
      return this.f = this.directions[index]
    }
  }

  right = () => {
    let index = this.directions.findIndex(d => d === this.f)
    if (index === 3) {
      return this.f = this.directions[0]
    } else {
      index++
      return this.f = this.directions[index]
    }
  }

// output data function which creates a text file to show the inputs data and 
// the result even if
  report = () => {
    // console.log(`${this.x}, ${this.y}, ${this.f}`)
  }

  // run function might not be necessary
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

module.exports = Robot