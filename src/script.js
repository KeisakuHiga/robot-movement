const fs = require('fs')

class Robot {
  constructor() {
    this.x = 0
    this.y = 0
    this.f = 'NORTH'
    this.directions = ['NORTH', 'EAST', 'SOUTH', 'WEST']
    this.commands = []
    this.readInputData()
    this.run(this.commands)
  }

// read input data function from text file
  readInputData = () => {
    this.commands = fs.readFileSync('src/input/input1.txt').toString().split("\n")
  }
// this will return an object that has x, y and f data, and the data will be
// passed to place function which receive the object as an argument

// if the first line of input data is not PLACE command,
// all commands written after the first line should be ignored

// if a PLACE command gives greater than 4 for x and y, and wrong directions
// this command will return null

  place = (line) => {
    this.x = line.slice(6,7)
    this.y = line.slice(8,9)
    this.f = line.slice(10)
    if(this.x < 0 || this.x > 4) {
      return null
    } else if(this.y < 0 || this.y > 4) {
      return null
    } else if (this.f !== "NORTH" && this.f !== "SOUTH" && this.f !== "EAST" && this.f !== "WEST") {
      return null
    } else {
      return true
    }
  }

  move = () => {
    let option = this.f
    switch(option) {
      case "NORTH":
        if(this.y === 4) {
        } else {
          return this.y++
        }
        break;
      case "SOUTH":
        if(this.y === 0) {
        } else {
          return this.y--
        }
        break;
      case "EAST":
        if(this.x === 4) {
        } else {
          return this.x++
        }
        break;
      case "WEST":
        if(this.x === 0) {
        } else {
          return this.x--
        }
        break;
      default:
        console.log('Please enter a valid number!')
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
// the result
  report = () => {
    // fs.writeFile('src/output', data, (err) => {
    //   if(err) throw err;
    // })
    console.log(`${this.x}, ${this.y}, ${this.f}`)
  }

  run = (commands) => {
    if(!commands[0].includes('PLACE')) {
      return null
    } else {
      try {
        commands.forEach(command => {
          if(command.includes('PLACE')) {
            const result = this.place(command)
            if(result === null) {
              throw('error')
            }
          } else {
            switch(command) {
              case 'MOVE':
                this.move()
                break;
              case 'LEFT':
                this.left()
                break;
              case 'RIGHT':
                this.right()
                break;
              case 'REPORT':
                this.report()
                break;
              default:
                return null
            }
          }
        })
      } catch(err) {
        console.log(err)
      }
    }
  }
}

module.exports = Robot