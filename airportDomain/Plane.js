const Passenger = require("./Passenger")

class Plane {
    static planes = []
    constructor(id, origin, destination) {
        this.id = id
        this.depart(origin, destination)
        this.passengers = []
        this.constructor.planes.push(this)
        this.crew = []
    }
    getOrigin() {
        return this.origin
    }
    getDestination() {
        return this.destination
    }
    board(person) {
        if (person instanceof Passenger) {
            this.passengers.push(person)
        } else {
            this.crew.push(person)
        }
    }
    getBoardedPassengers() {
        return this.passengers
    }
    depart(airportorigin, airportdestination) {
        airportorigin.planes.splice(airportorigin.planes.indexOf(this), 1)
        airportdestination.planes.push(this)
        this.origin = airportorigin
        this.destination = airportdestination
    }
}
module.exports = Plane