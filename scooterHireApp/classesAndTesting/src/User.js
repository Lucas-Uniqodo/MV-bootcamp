const ScooterHireDatabase = require('./ScooterHireDatabase')
const Person = require('./Person')

class User extends Person {
    constructor(name, userId) {
        super(name)
        this.transactions = []
        this.userId = userId
        this.age = undefined
        this.creditCardDetails = undefined
        this.currentScooter = undefined
        this.currentHire = undefined
        this.validUser = false
    }

    inputAgeAndCreditCardDetails(age, creditCardDetails) {
        this.age = age
        this.creditCardDetails = creditCardDetails
        if (this.age >= 18 && this.creditCardDetails == true) {
            this.validUser = true
        }
    }

    requestScooter(scooter) {
        if (this.currentScooter == undefined && scooter.currentUser == undefined) {
            new HireTransaction(scooter.location)
            this.currentScooter = scooter
            scooter.currentUser == this
        } 
    }

    returnScooter() {
        ScooterHireDatabase.hireTransactions[this.currentHire].endPoint = this.currentScooter.location
        this.currentScooter = scooter
        scooter
        
    }

    flagAsBroken() {}

}
module.exports = User