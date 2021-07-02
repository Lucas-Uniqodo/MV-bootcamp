class ChargingStation {

    constructor(location) {
        this.location = location
    }

    charge(MyScooter) {
        if (MyScooter.inWorkingCondition == true) {
            MyScooter.charge = 100
        }
        console.log(MyScooter.inWorkingCondition, "qwertyuiop")
        return MyScooter.inWorkingCondition
    }

    lock(MyScooter) {
        MyScooter.locked = true
    }

    unlock(MyScooter) {
        MyScooter.locked = false
    }
}

module.exports = ChargingStation