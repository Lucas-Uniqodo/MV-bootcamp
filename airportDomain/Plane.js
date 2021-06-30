class Plane {
    static planes = []
    constructor(id, origin, destination) {
        this.id = id
        this.depart(origin, destination)
        this.passengers = []
        this.constructor.planes.push(this)
    }
    getOrigin() {
        return this.origin
    }
    getDestination() {
        return this.destination
    }
    boardPassenger(passenger) {
        this.passengers.push(passenger)
    }
    getBoardedPassengers() {
        return this.passengers
    }
    depart(airportorigin, airportdestination) {
        airportorigin.planes.pop(this)
        airportdestination.planes.push(this)
        this.origin = airportorigin.name
        this.destination = airportdestination.name
    }
}
module.exports = Plane