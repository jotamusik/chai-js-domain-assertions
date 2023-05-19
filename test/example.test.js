const { expect } = require('chai')
const Example = require('../src/example')

describe('Example Class Definition', function () {
  it('Should have defined a exampleVariable member', function () {
    let example = new Example()
    expect(example.exampleVariable).not.to.be.undefined
  })
  it('Should have an exampleVariable getter', function () {
    let example = new Example()
    expect(example.getExampleVariable()).to.be.eq(example.exampleVariable)
  })
  it('Should have an exampleVariable setter', function () {
    let example = new Example()
    let newExampleVariable = 'exampleModified'
    example.setExampleVariable(newExampleVariable)
    expect(example.exampleVariable).to.be.eq(newExampleVariable)
  })
})
