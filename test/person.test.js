const { expect } = require('chai')
const Person = require('../src/person')


describe('Person Class Definition', function () {
  it('Should have age member', function () {

    const example = new Person("Peter", 11)

    expect(example).to.be.a.child()
  })
})
