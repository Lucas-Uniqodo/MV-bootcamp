const User = require('../src/User')
const HireTransaction = require('../src/HireTransaction')
const Scooter = require('../src/Scooter')
const ScooterHireDatabase = require('../src/ScooterHireDatabase')
const ChargingStation = require("../src/ChargingStation")


describe('', () => {
    const myUser = new User("Lucas", "1234")
    const myScooter = new Scooter("location")
    const myChargingStation = new ChargingStation("anotherLocation")
    
    test('Users details are validated correctly', () => {
        myUser.inputAgeAndCreditCardDetails(19, true)
        expect(myUser.validUser).toBeTruthy()
    })

    test('Users details are validated correctly', () => {
        expect(() => myUser.inputAgeAndCreditCardDetails(17, false)).toThrow("invalid details")
    })

    test('request Scooter', () => {
        myUser.requestScooter(myScooter)

        expect(myUser.currentHire instanceof HireTransaction).toBeTruthy()
        expect(myUser.currentScooter).toBe(myScooter)
        expect(myScooter.currentUser).toBe(myUser)
    })

    test('request Scooter invalid', () => {

        expect(() => myUser.requestScooter(myScooter)).toThrow("you are already using a scooter");
    })
    
    test('flag As Broken', () => {
        myUser.flagAsBroken()
        expect(myScooter.inWorkingCondition).toBeFalsy()
    })


    test('return Scooter with and invalid drop-off location', () => {

        myScooter.move("invalidLocation")
        expect(() => myUser.returnScooter()).toThrow("invalid drop-off location")
    })

    test('return Scooter', () => {

        myScooter.move("anotherLocation")
        myUser.returnScooter()

        expect(myUser.currentScooter).toBe(undefined)
        expect(myScooter.currentUser).toBe(undefined)
        expect(myUser.currentHire.endPoint).toBe("anotherLocation")
        expect(myUser.currentHire.payedFor).toBeTruthy()
    })

    test("return Scooter when you aren't currently hiring one", () => {
        expect(() => myUser.returnScooter()).toThrow("you aren't using a scooter")
    })

})