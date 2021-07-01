const Person = require('./Person')

class Passenger extends Person{
    constructor(name, seatNo, bags = []) {
        super(name, bags)
        this.seatNo = seatNo
        }
    
}

module.exports = Passenger