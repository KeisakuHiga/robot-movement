const readlineSync = require('readline-sync');
class Robot {
  constructor() {
    this.x = 0
    this.y = 0
    this.direction = 'N'
    this.directions = ['N', 'E', 'S', 'W']
    this.place()
  }

  printCommands = () => {
    console.log(`\nRobot is at [${this.x}, ${this.y}] and facing ${this.direction}\n`)
    console.log('Choose your command!')
    const userChoice = readlineSync.questionInt('1. Place the robot to a new place!\n2. Move forward!\n3. Turn left!\n4. Turn right!\n5. Report the place where the robot is!\n6. Quit!\n');
    return userChoice
  }

  place = () => {
    this.x = readlineSync.questionInt('Type a number from 0 ~ 4 for "x"\n')
    while(this.x < 0 || this.x > 4 ) {
      console.clear()
      console.log('Warning! Please type a valid number(0 ~ 4)\n')
      this.x = readlineSync.questionInt('Type a number from 0 ~ 4 for "x"\n')
    }
    console.clear()
    this.y = readlineSync.questionInt('Type a number from 0 ~ 4 for "y"\n')
    while(this.y < 0 || this.y > 4 ) {
      console.clear()
      console.log('Warning! Please type a valid number(0 ~ 4)\n')
      this.y = readlineSync.questionInt('Type a number from 0 ~ 4 for "y"\n')
    }
    console.clear()
    this.direction = readlineSync.question('Type a direction from "N", "S", "E" and "W"\n').toUpperCase() 
    while(this.direction !== "N" && this.direction !== "S" && this.direction !== "E" && this.direction !== "W") {
      console.clear()
      console.log('Wording! Please type a valid direction!\n')
      this.direction = readlineSync.question('Type a direction from "N", "S", "E" and "W"\n').toUpperCase()
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
          console.clear()
          console.log('Robot moved forward!\n')
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
