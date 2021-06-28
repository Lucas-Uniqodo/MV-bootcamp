class Person {
    constructor(firstName, lastName, mother, father) {
        this.firstName = firstName
        this.lastName = lastName
        this.parents = [mother, father]
    }

    childOf() {
        return this.parents.map(parent => parent.firstName).join(' & ') || "unknown"
    }

}

const Philip = new Person("Philip", "Windsor", "", "")
const ElizabethII = new Person("ElizabethII", "Windsor", "George", "Elizabeth I")

const Charles = new Person("Charles", "Windsor", Philip, ElizabethII)
const Diana = new Person("Diana", "Spencer", "", "")

const William = new Person("William", "Windsor", Charles, Diana)
const Kate = new Person("Kate", "Middleton", "", "")
const Harry = new Person("Harry", "Windsor", Charles, Diana)
const Meghan = new Person("Meghan", "Markle", "", "")

const Archie = new Person("Archie", "Harrison", Meghan, Harry)
const George = new Person("George", "Windsor", Kate, William)
const Charlotte = new Person("Charlotte", "Windsor", Kate, William)
const Louis = new Person("Louis", "Windsor", Kate, William)

console.log("Archie's parents:", Archie.childOf())
console.log("Archie's maternal grandparents:", Archie.parents[0].childOf())
console.log("Archie's paternal grandparents:", Archie.parents[1].childOf())
