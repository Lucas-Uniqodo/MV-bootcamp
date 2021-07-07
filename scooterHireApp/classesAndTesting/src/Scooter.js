const ScooterHireDatabase = require("./ScooterHireDatabase")

class Scooter {
    static idCounter = 1
    static maxRange = 32 //km
    constructor(location) {
        this.scooterId = this.constructor.idCounter
        this.currentCharge = 100
        this.inWorkingCondition = true
        this.locked = true
        this.location = location
        this.currentUser = undefined
        ScooterHireDatabase.scooters.push(this)
        this.constructor.idCounter++
    }

    reportBroken() {
        this.inWorkingCondition = false
    }

    getScooterId() {
        return this.scooterId
    }

    getCurrentCharge() {
        return this.currentCharge
    }

    setCharge(newCharge) {
        this.currentCharge = newCharge
    }

    isInWorkingCondition() {
        return this.inWorkingCondition
    }

    getLockedStatus() {
        return this.locked
    }
    
    getLocation() {
        return this.location
    }
    
    getCurrentUser() {
        return this.currentUser
    }

    move(newLocation) {
        this.location = newLocation
    }
}

module.exports = Scooter