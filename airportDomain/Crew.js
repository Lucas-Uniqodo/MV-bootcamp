const Person = require('./Person')

class Crew extends Person{
    constructor(name, position, bags = []) {
        super(name, bags)
        this.position = position
        }
}

module.exports = Crew