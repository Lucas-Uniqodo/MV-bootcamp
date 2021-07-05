const User = require('../src/User')
const HireTransaction = require('../src/HireTransaction')
const Scooter = require('../src/Scooter')
const ScooterHireDatabase = require('../src/ScooterHireDatabase')
const ChargingStation = require("../src/ChargingStation")


describe('', () => {
    MyUser = new User("Lucas", "1234")
    MyScooter = new Scooter("location")
    MyHireTransaction = new HireTransaction("location")
    MyChargingStation = new ChargingStation("anotherLocation")
    
    test('Users details are validated correctly', () => {
        MyUser.inputAgeAndCreditCardDetails(19, true)
        expect(MyUser.validUser).toBeTruthy()
    })

    test('request Scooter', () => {
        MyUser.requestScooter(MyScooter)
        expect(MyUser.currentHire instanceof HireTransaction).toBeTruthy()
        expect(MyUser.currentScooter).toBe(MyScooter)
        expect(MyScooter.currentUser).toBe(MyUser)
    })
    
    test('flag As Broken', () => {
        MyUser.flagAsBroken()
        expect(MyScooter.inWorkingCondition).toBeFalsy()
    })

    test('return Scooter', () => {
        MyScooter.move("anotherLocation")
        MyUser.returnScooter()
        expect(MyUser.currentScooter).toBe(undefined)
        expect(MyScooter.currentUser).toBe(undefined)
        expect(MyUser.currentHire.endPoint).toBe("anotherLocation")
        expect(MyUser.currentHire.payedFor).toBeTruthy()
    })


})