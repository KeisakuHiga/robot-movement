const Robot = require('../src/script')
// const assert = require('chai').assert
// const expect = require('chai').expect
const { assert, expect } = require('chai')
const should = require('chai').should()
const sinon  = require('sinon')

describe('Robot class', () => {

  let robot = new Robot

  // it('check that robot talks string', () => {
  //   assert.isString(robot.talk(), 'string')
  // })

  describe('constructor()', () => {
    it('check that robot is set 0 for both x and y, and f should be "NORTH"', () => {
      assert.equal(robot.x, 0)
      assert.equal(robot.y, 0)
      assert.equal(robot.f, 'NORTH')
      expect(robot.directions).to.be.an('array').with.lengthOf(4)
    })
  })
  
  describe('printCommands()', ()=> {

    it('', () => {
      
    })

  })

  describe('place()', ()=> {

    it('', () => {
      
    })

  })

  describe('move()', ()=> {
    it('', () => {
      
    })


  })

  describe('left()', ()=> {
    it('when robot faces NORTH, it will turn to WEST', () => {
      if(robot.f === 'NORTH') {
        assert.equal(robot.left(), 'WEST')
      }
    })
    it('when robot faces WEST, it will turn to SOUTH', () => {
      if(robot.f === 'WEST') {
        assert.equal(robot.left(), 'SOUTH')
      }
    })
    it('when robot faces SOUTH, it will turn to EAST', () => {
      if(robot.f === 'SOUTH') {
        assert.equal(robot.left(), 'EAST')
      }
    })
    it('when robot faces EAST, it will turn to NORTH', () => {
      if(robot.f === 'EAST') {
        assert.equal(robot.left(), 'NORTH')
      }
    })
  })

  describe('right()', ()=> {
    it('when robot faces NORTH, it will turn to EAST', () => {
      if(robot.f === 'NORTH') {
        assert.equal(robot.right(), 'EAST')
      }
    })
    it('when robot faces WEST, it will turn to NORTH', () => {
      if(robot.f === 'WEST') {
        assert.equal(robot.right(), 'NORTH')
      }
    })
    it('when robot faces SOUTH, it will turn to WEST', () => {
      if(robot.f === 'SOUTH') {
        assert.equal(robot.right(), 'WEST')
      }
    })
    it('when robot faces EAST, it will turn to SOUTH', () => {
      if(robot.f === 'EAST') {
        assert.equal(robot.right(), 'SOUTH')
      }
    })

  })

  describe('report()', ()=> {
    it('should console.log() "X, Y, DIRECTION"', () => {
      // "spy" on `console.log()`
      let spy = sinon.spy(console, 'log')
      
      // call the function that needs to be tested
      robot.report()
    
      // assert that it was called with the correct value
      assert(spy.calledWith(`${robot.x}, ${robot.y}, ${robot.f}`))

      // restore the original function
      spy.restore()
    })


  })

  describe('run()', ()=> {
    it('', () => {
      
    })


  })

})