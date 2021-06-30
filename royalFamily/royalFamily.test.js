const people = require('./royalFamily')

describe('person objects', () => {
    test('correct mother', () => {
        expect(people.Archie.parents[0].firstName).toEqual("Meghan")
    })
    test('correct father', () => {
        expect(people.Archie.parents[1].firstName).toEqual("Harry")
    })
})
