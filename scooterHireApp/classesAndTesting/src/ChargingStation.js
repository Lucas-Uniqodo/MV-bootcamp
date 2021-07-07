const ScooterHireDatabase = require("./ScooterHireDatabase")

class ChargingStation {

    constructor(location) {
        this.location = location
        ScooterHireDatabase.chargingStationLocations.push(this.location)
    }

    charge(scooter) {
        if (scooter.isInWorkingCondition()) {
            scooter.setCharge(100)
        }
        return scooter.isInWorkingCondition() //will return true or false depending on the scooter's current condition
    }

    lock(scooter) {
        scooter.locked = true
    }

    unlock(scooter) {
        scooter.locked = false
    }
}

module.exports = ChargingStation