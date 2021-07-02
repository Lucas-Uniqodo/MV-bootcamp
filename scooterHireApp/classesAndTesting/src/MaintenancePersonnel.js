const Person = require('./Person')

class MaintenancePersonnel extends Person {
    constructor(name, employeeId) {
        super(name)
        this.employeeId = employeeId
    }

    fixScooter(scooter) {
        scooter.inWorkingCondition = true
    }
}
module.exports = MaintenancePersonnel