const Scooter = require('../src/Scooter')
const ChargingStation = require('../src/ChargingStation')

describe('', () => {
    MyChargingStation = new ChargingStation("location")
    MyScooter = new Scooter("location")

    test('MyScooter is in working condition', () => {
        expect(MyChargingStation.charge(MyScooter)).toBeTruthy()
    })
    
    test('MyScooter is broken', () => {
        MyScooter.reportBroken()
        expect(MyChargingStation.charge(MyScooter)).toBeFalsy()
    })

    test('locking', () => {
        MyChargingStation.lock(MyScooter)
        expect(MyScooter.locked).toBe(true)
    })

    test('unlocking', () => {
        MyChargingStation.unlock(MyScooter)
        expect(MyScooter.locked).toBe(false)
    })

})