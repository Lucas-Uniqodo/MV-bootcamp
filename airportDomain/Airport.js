class Airport {
    static airports = []
    constructor(name) {
        this.name = name
        this.planes = []
        this.constructor.airports.push(this)
    }
    getPlanes() {
        return this.planes
    }
    static getAirports() {
        return this.constructor.airports
    }
}
module.exports = Airport