const Robot = require('../src/script')
const assert = require('chai').assert

describe('Testing Robot class', () => {

  let robot = new Robot

  it('check that robot talks string', () => {
    assert.isString(robot.talk(), 'string')
  })
})