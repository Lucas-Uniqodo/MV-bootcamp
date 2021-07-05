const ScooterHireDatabase = require("./ScooterHireDatabase")

class HireTransaction {

    constructor(startPoint) {
        this.startPoint = startPoint
        this.endPoint = undefined
        this.distanceTravelled = undefined
        this.paymentIncurred = undefined
        this.payedFor = false
        ScooterHireDatabase.hires.push(this)
    }

    getStartPoint() {
        return this.startPoint
    }

    getEndPoint() {
        return this.endPoint
    }

    calculatePaymentIncurred() {
        //in real code, would calculate distance between 2 coordinates:
        //Math.abs(this.startPoint - this.endPoint)
        //since i don't have any actual coordinates, the below is an example
        this.distanceTravelled = 10 //miles

        this.paymentIncurred = this.distanceTravelled * 1.08

        return this.paymentIncurred
    }

}

module.exports = HireTransaction