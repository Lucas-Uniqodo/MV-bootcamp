const Scooter = require('../src/Scooter')
const ChargingStation = require('../src/ChargingStation')
const ScooterHireDatabase = require("../src/ScooterHireDatabase")
const MaintenancePersonnel = require("../src/MaintenancePersonnel")


describe('', () => {
    const myChargingStation = new ChargingStation("location")
    const myScooter = new Scooter("location")
    const myMaintenancePerson = new MaintenancePersonnel("Lucas", "1234")

    test('myScooter is in working condition', () => {
        expect(myChargingStation.charge(myScooter)).toBeTruthy()
    })
    
    test('myScooter is broken', () => {
        myScooter.reportBroken()
        expect(myChargingStation.charge(myScooter)).toBeFalsy()
        
        myMaintenancePerson.fixScooter(myScooter)
        expect(myChargingStation.charge(myScooter)).toBeTruthy()

    })

    test('locking', () => {
        myChargingStation.lock(myScooter)
        expect(myScooter.locked).toBe(true)
    })

    test('unlocking', () => {
        myChargingStation.unlock(myScooter)
        expect(myScooter.locked).toBe(false)
    })

})