const ScooterHireDatabase = require("./ScooterHireDatabase")

const Person = require('./Person')

class MaintenancePersonnel extends Person {
    constructor(name, employeeId) {
        super(name)
        this.employeeId = employeeId
        ScooterHireDatabase.maintenancePeople.push(this)
    }

    fixScooter(scooter) {
        scooter.inWorkingCondition = true
    }
}
module.exports = MaintenancePersonnel