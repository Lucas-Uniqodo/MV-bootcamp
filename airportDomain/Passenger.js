class Passenger {
    constructor(name, bags = []) {
        this.name = name
        this.bags = bags
    }
    addBag(bag) {
            this.bags.push(bag)
    }
    static getBags() {
        return this.bags
    }

}

module.exports = Passenger