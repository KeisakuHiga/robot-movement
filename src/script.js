const fs = require('fs')

class Robot {
  constructor(inputFilePath) {
    this.x = 0
    this.y = 0
    this.f = 'NORTH'
    this.directions = ['NORTH', 'EAST', 'SOUTH', 'WEST']
    this.commands = []
    this.readInputData(inputFilePath)
    this.run(this.commands)
  }

// read input data function from text file
  readInputData = (inputFilePath) => {
    try {
      const arrayOfCommands = fs.readFileSync(inputFilePath).toString().split("\n")
      return this.commands = arrayOfCommands
    } catch (err) {
      return err
    }
  }

  // if a PLACE command gives greater than 4 for x and y, and wrong directions
  // this command will return null
  place = (line) => {
    const placeLetter = line.slice(0, 5)
    this.x = line.slice(6, 7)
    this.y = line.slice(8, 9)
    this.f = line.slice(10)
    if(placeLetter !== 'PLACE') {
      return null
    } else if(this.x < 0 || this.x > 4) {
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
        if(this.y == 4) {
          return null
        } else {
          this.y++
          return this.y
        }
      case "SOUTH":
        if(this.y == 0) {
          return null
        } else {
          this.y--
          return this.y
        }
      case "EAST":
        if(this.x == 4) {
          return null
        } else {
          this.x++
          return this.x
        }
      case "WEST":
        if(this.x == 0) {
          return null
        } else {
          this.x--
          return this.x
        }
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

  report = () => {
    const report = `Robot is at X: ${this.x}, Y: ${this.y} and facing ${this.f}`
    console.log(report)
  }

  // output data function which creates a text file to show the inputs data and the result
  output = () => {
    const output = `Output: ${this.x}, ${this.y}, ${this.f}`
    fs.writeFile('src/output/output.txt', output, (err) => {
      if(err) throw err;
    })
    return output
  }

  // if the first line of input data is not PLACE command,
  // all commands written after the first line should be ignored
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
                throw('error')
            }
          }
        })
        // create output file after all commands having done
        this.output()
      } catch(err) {
        return err
      }
    }
  }
}

module.exports = Robot