const Person = require('./Person')

class Passenger extends Person{
    constructor(name, bags = []) {
        super(name, bags)
        }
}

module.exports = Passenger