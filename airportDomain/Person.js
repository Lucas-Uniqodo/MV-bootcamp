class Person {
    constructor(name, bags) {
        this.name = name
        this.bags = bags
    }
    addBag(bag) {
            this.bags.push(bag)
    }
    getBags() {
        return this.bags
    }

}

module.exports = Person