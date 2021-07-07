const ScooterHireDatabase = require('./ScooterHireDatabase')
const HireTransaction = require("./HireTransaction")
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
        ScooterHireDatabase.users.push(this)
    }

    inputAgeAndCreditCardDetails(age, creditCardDetails) {
        this.age = age
        this.creditCardDetails = creditCardDetails
        if (this.age >= 18 && this.creditCardDetails == true) {
            this.validUser = true
        } else {
            throw new Error("invalid details")
        }
    }

    requestScooter(scooter) {
        if ((this.currentScooter == undefined) && (scooter.currentUser == undefined) && (this.validUser)) {
            this.currentHire = new HireTransaction(scooter.location)
            scooter.currentUser = this
            this.currentScooter = scooter
        } else {
            throw new Error("you are already using a scooter")
        }
    }

    returnScooter() {        
        if ((this.currentScooter != undefined) && (this.currentScooter.currentUser != undefined) && (this.validUser)) {
            if ((ScooterHireDatabase.chargingStationLocations.includes(this.currentScooter.location))) {

                this.currentHire.endPoint = this.currentScooter.location
                let payment = this.currentHire.calculatePaymentIncurred()
                //this.pay(payment), no current way of paying for obvious reasons
                this.currentHire.payedFor = true
                this.currentScooter.currentUser = undefined
                this.currentScooter = undefined
            } else {
                throw new Error("invalid drop-off location")
            }

        } else {
            throw new Error("you aren't using a scooter")
        }
    }

    flagAsBroken() {
        this.currentScooter.reportBroken()
    }

}
module.exports = User