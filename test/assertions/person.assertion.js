const Person = require('../../src/person')

module.exports = function (chai, utils) {
  const { Assertion } = chai

  Assertion.addMethod('child', function () {
    const actual = this._obj
    new Assertion(actual).to.be.instanceof(Person)

    const isChild = actual.age < 18

    this.assert(isChild,
      `expected ${actual.toString()} to be a child`,
      `expected ${actual.toString()} to not be a child`,
      'age to be 18 or less',
      `age is ${actual.age}`
    )
  })
}
