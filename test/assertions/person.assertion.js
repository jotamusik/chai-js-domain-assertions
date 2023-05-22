const Person = require('../../src/person')

module.exports = function (chai) {
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

  Assertion.addMethod('adult', function () {
    const actual = this._obj
    new Assertion(actual).to.be.instanceof(Person)

    const isChild = actual.age >= 18

    this.assert(isChild,
      `expected ${actual.toString()} to be an adult`,
      `expected ${actual.toString()} to not be an adult`,
      'age to be 18 or greater',
      `age is ${actual.age}`
    )
  })
}
