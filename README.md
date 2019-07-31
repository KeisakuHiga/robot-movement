# Toy Robot Movement Simulator
Toy robot movement simulator is written in **Node.js**.
## Table Of Contents

- [Description](#description)
- [Installation and Operating Instructions](#installation-and-operating-instructions)
- [Testing Instructions](#testing-instructions)

## Description
- This application is a simulation of a toy robot moving on a square tabletop, of dimensions 5 units x 5 units.
- There are no other obstructions on the table surface.
- The robot is free to roam around the surface of the table, but must be prevented from falling to destruction.
- Any movement that would result in the robot falling from the table must be prevented, however further valid movement commands must still be allowed.
- Create an application that can read in commands of the following form -
```
PLACE X,Y,F
MOVE
LEFT
RIGHT
REPORT
```
- Where PLACE will put the toy robot on the table in position X,Y and facing NORTH, SOUTH, EAST or WEST. The origin (0,0) can be considered to be the SOUTH WEST most corner.
- It is required that the first command to the robot is a PLACE command, after that, any sequence of commands may be issued, in any order, including another PLACE command. The application should discard all commands in the sequence until a valid PLACE command has been executed.
- Where MOVE will move the toy robot one unit forward in the direction it is currently facing.
- Where LEFT and RIGHT will rotate the robot 90 degrees in the specified direction without changing the position of the robot.
- Where REPORT will announce the X,Y and F of the robot. This can be in any form, but standard output is sufficient.
- A robot that is not on the table can choose to ignore the MOVE, LEFT, RIGHT and REPORT commands.
- There is not any graphical output showing the movement of the toy robot.
- The toy robot must not fall off the table during movement. This also includes the initial placement of the toy robot. 
- Any move that would cause the robot to fall must be ignored.

## Installation and operating instructions
### Prerequisites

- The first thing you need to have is Node.js on your computer.You can download the Node.js installer from the Node.js website at: https://nodejs.org/en/download/

- Once Node.js is installed, open a terminal and enter the `node --version` on command line to verify that it is installed correctly.

### Installation procedures

To get the application, just clone the repository, and change directory into it
```
$ git clone https://github.com/KeisakuHiga/robot-movement.git
$ cd robot-movement
```

### Operating instructions

Step1: Input your commands into `src/input/your_commands.txt`. Your commands should start PLACE command.

Step2: Run `npm start` in your CLI

Step3: You can see the output from `src/output/output.txt`

### Input and output examples
#### Example1
```
Input1:
PLACE 0,0,NORTH
MOVE
REPORT
```
```
Output1:
0,1,NORTH
```
#### Example2
```
Input2:
PLACE 0,0,NORTH
LEFT
REPORT
```
```
Output2:
0,0,WEST
```
#### Example3
```
Input3:
PLACE 1,2,EAST
MOVE
MOVE
LEFT
MOVE
REPORT
```
```
Output3:
3,3,NORTH
```

## Testing instructions

The following dependencies are used for the testing,

- [chai](https://www.chaijs.com/)
- [mocha](https://mochajs.org/)
- [sinon](https://sinonjs.org/)
- [nyc](https://github.com/istanbuljs/nyc)

You should run the following commands in your CLI
```
$ npm install
$ npm test
```
