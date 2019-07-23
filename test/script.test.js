const Robot = require('../src/script')
// const assert = require('chai').assert
// const expect = require('chai').expect
const { assert, expect } = require('chai')
const should = require('chai').should()
const sinon  = require('sinon')

describe('Test for robot1 which starts from x: 0, y: 0, and f: WEST', () => {
  const testFile = 'test/testData/test1.test.txt'
  let robot1 = new Robot(testFile)
  
  describe('Test of constructor(inputFilePath) function', () => {
    it('robot1 should be set at x: 0, y: 0, and f: WEST', () => {
      assert.equal(robot1.x, 0)
      assert.equal(robot1.y, 0)
      assert.equal(robot1.f, 'WEST')
      expect(robot1.directions).to.be.an('array').with.lengthOf(4)
    })
  })
  
  describe('Test of readInputData(inputFilePath) function', ()=> {
    it('it will generate and return a new array of strings which are read from a input file', () => {
      const correctFilePath = 'test/testData/test3.test.txt'
      const arrayOfCommands = robot1.readInputData(correctFilePath)
      expect(arrayOfCommands).to.be.an('array')
    })
    it('if the input file path is not valid, it will return an error', () => {
      const wrongFilePath = 'wrong/file/path/test3.test.txt'
      const arrayOfCommands = robot1.readInputData(wrongFilePath)
      assert.equal(arrayOfCommands.errno, -2)
    })
  })

  describe('Test of place(line) function', ()=> {
    it('robot1 will be placed at x: 2, y: 3, f: WEST properly', () => { 
      const result = robot1.place('PLACE 2,3,WEST')
      assert.equal(result, true)
      assert.equal(robot1.x, 2)
      assert.equal(robot1.y, 3)
      assert.equal(robot1.f, 'WEST')
    })

    describe('the command about f direction should be "NORTH", "SOUTH", "EAST", or "WEST"', () => {
      it('when f direction is NORTH, the place(line) function return true', () => {
        const result = robot1.place('PLACE 2,3,NORTH')
        assert.equal(result, true)
      })
      it('when f direction is SOUTH, the place(line) function return true', () => {
        const result = robot1.place('PLACE 2,3,SOUTH')
        assert.equal(result, true)
      })
      it('when f direction is EAST, the place(line) function return true', () => {
        const result = robot1.place('PLACE 2,3,EAST')
        assert.equal(result, true)
      })
      it('when f direction is WEST, the place(line) function return true', () => {
        const result = robot1.place('PLACE 2,3,WEST')
        assert.equal(result, true)
      })
    })

    describe('place(line) function fails when', () => {
      it('the command letters is not UPPERCASE like "PLACE"', () => { 
        const result = robot1.place('place 2,3,WEST')
        assert.equal(result, null)
      })
      it('the command letters is not UPPERCASE like "WEST"', () => { 
        const result = robot1.place('PLACE 2,3,west')
        assert.equal(result, null)
      })
      it('the command about x position is greater than 4', () => { 
        const result = robot1.place('PLACE 5,3,WEST')
        assert.equal(result, null)
      })
      it('the command about x position is smaller than 0', () => { 
        const result = robot1.place('PLACE -1,3,WEST')
        assert.equal(result, null)
      })
      it('the command about y position is greater than 4', () => { 
        const result = robot1.place('PLACE 2,5,WEST')
        assert.equal(result, null)
      })
      it('the command about y position is smaller than 0', () => { 
        const result = robot1.place('PLACE 2,-1,WEST')
        assert.equal(result, null)
      })
      it('the command about f direction is not "NORTH", "SOUTH", "EAST", or "WEST"', () => { 
        const result = robot1.place('PLACE 2,3,SOMEWHERE')
        assert.equal(result, null)
      })
    })
  })

  describe('Test part 1 of move() function - start from x: 4, y: 4, f: EAST', ()=> {
    it('robot1 tries to move forward, but fails because it is at the table edge of EAST and feces EAST(x: 4, f: EAST)', () => {
      robot1.place('PLACE 4,4,EAST')
      robot1.move()
      assert.equal(robot1.x, 4)
    })
    it('robot1 turns left, faces NORTH, and tries to move forward, but fails because it is at the table edge of NORTH and feces NORTH(y: 4, f: NORTH)', () => {
      robot1.left()
      robot1.move()
      assert.equal(robot1.y, 4)
    })
    it('robot1 turns left, faces WEST, and tries to move forward, and the action will succeed(x: 3, f: WEST)', () => {
      robot1.left()
      robot1.move()
      assert.equal(robot1.x, 3)
    })
    it('robot1 turns left, faces SOUTH, and tries to move forward, and the action will succeed(y: 3, f: SOUTH)', () => {
      robot1.left()
      robot1.move()
      assert.equal(robot1.y, 3)
    })
  })

  describe('Test part 2 of move() function - start from x: 0, y: 0, f: WEST', ()=> {
    it('robot1 tries to move forward, but fails because it is at the table edge of WEST and feces WEST(x: 0, f: WEST)', () => {
      robot1.place('PLACE 0,0,WEST')
      robot1.move()
      assert.equal(robot1.x, 0)
    })
    it('robot1 turns left, faces SOUTH, and tries to move forward, but fails because it is at the table edge of SOUTH and feces SOUTH(y: 0, f: SOUTH)', () => {
      robot1.left()
      robot1.move()
      assert.equal(robot1.y, 0)
    })
    it('robot1 turns left, faces EAST, and tries to move forward, and the action will succeed(x: 1, f: EAST)', () => {
      robot1.left()
      robot1.move()
      assert.equal(robot1.x, 1)
    })
    it('robot1 turns left, faces NORTH, and tries to move forward, and the action will succeed(y: 1, f: NORTH)', () => {
      robot1.left()
      robot1.move()
      assert.equal(robot1.y, 1)
    })
  })

  describe('Test of left() function', ()=> {
    it('when robot1 faces NORTH, it will turn to WEST', () => {
      assert.equal(robot1.left(), 'WEST')
    })
    it('when robot1 faces WEST, it will turn to SOUTH', () => {
      assert.equal(robot1.left(), 'SOUTH')
    })
    it('when robot1 faces SOUTH, it will turn to EAST', () => {
      assert.equal(robot1.left(), 'EAST')
    })
    it('when robot1 faces EAST, it will turn to NORTH', () => {
      assert.equal(robot1.left(), 'NORTH')
    })
  })

  describe('Test of right() function', ()=> {
    it('when robot1 faces NORTH, it will turn to EAST', () => {
      assert.equal(robot1.right(), 'EAST')
    })
    it('when robot1 faces EAST, it will turn to SOUTH', () => {
      assert.equal(robot1.right(), 'SOUTH')
    })
    it('when robot1 faces SOUTH, it will turn to WEST', () => {
      assert.equal(robot1.right(), 'WEST')
    })
    it('when robot1 faces WEST, it will turn to NORTH', () => {
      assert.equal(robot1.right(), 'NORTH')
    })
  })

  describe('Test of report() function', ()=> {
    it('should console.log() "Robot is at X: 1, Y: 1, and facing NORTH"', () => {
      // "spy" on `console.log()`
      let spy = sinon.spy(console, 'log')
      
      // call the function that needs to be tested
      robot1.report()
    
      // assert that it was called with the correct value
      assert(spy.calledWith(`Robot is at X: ${robot1.x}, Y: ${robot1.y} and facing ${robot1.f}`))

      // restore the original function
      spy.restore()
    })
  })

  describe('Test of output() function', ()=> {
    it('output should be "Output: 1, 1, NORTH"', () => {
    const result = robot1.output()
    assert.equal(result, `Output: ${robot1.x}, ${robot1.y}, ${robot1.f}`)
    })
  })

  describe('Test of run(commands) function', ()=> {
    it('', () => {
      
    })
  })

})