const { expect } = require('chai')
const Person = require('../src/person')


describe('Chai domain tests', function () {
  describe('Overriding with custom message', function () {
    it('Should show the custom message on failure', function () {
      const example = new Person("Peter", 18)
      expect(example).to.be.lessThan(18, 'is not a child')
    })
  })

  describe('Using custom assertions', function () {
    it('Should fail for child when expecting an adult', function () {

      const example = new Person('Peter', 11)
      expect(example).to.be.an.adult()
    })

    it('Should fail for adult when expecting a child', function () {

      const example = new Person('Peter', 18)
      expect(example).to.be.a.child()
    })

    it('Should pass for child when expecting a child', function () {
      const example = new Person('Peter', 11)
      expect(example).to.be.a.child()
    })
  })
})
