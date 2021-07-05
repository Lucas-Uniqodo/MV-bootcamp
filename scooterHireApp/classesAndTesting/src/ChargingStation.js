const ScooterHireDatabase = require("./ScooterHireDatabase")

class ChargingStation {

    constructor(location) {
        this.location = location
        ScooterHireDatabase.chargingStationLocations.push(this.location)
    }

    charge(scooter) {
        if (scooter.inWorkingCondition == true) {
            scooter.charge = 100
        }
        return scooter.inWorkingCondition
    }

    lock(scooter) {
        scooter.locked = true
    }

    unlock(scooter) {
        scooter.locked = false
    }
}

module.exports = ChargingStation