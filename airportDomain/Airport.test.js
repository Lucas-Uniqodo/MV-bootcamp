const Airport = require('./Airport')
const Plane = require('./Plane')
const Passenger = require('./Passenger')
const Bag = require('./Bag')

const Gatwick = new Airport("Gatwick")
const Heathrow = new Airport("Heathrow")

Plane1 = new Plane("1234", Gatwick, Heathrow)
Plane2 = new Plane("5678", Heathrow, Gatwick)

Lucas = new Passenger("Lucas")

MyBackpack = new Bag(15)

describe('passenger objects', () => {
    test('creating multiple Airports and Planes', () => {
        expect(Airport.airports).toHaveLength(2)
        expect(Plane.planes).toHaveLength(2)
    })

    test('landing Planes at Airports i.e airport.land(plane)', () => {
        Plane2.depart(Gatwick, Heathrow)

        expect(Plane2.origin).toBe("Gatwick")
        expect(Plane2.destination).toBe("Heathrow")
    })

    test('boarding Passengers onto a Plane', () => {
        Heathrow.planes[0].boardPassenger(Lucas)

        expect(Heathrow.planes[0].passengers[0]).toBe(Lucas)
    })

    test('give a plane an inbound property (the name of the airport it is currently landed in)', () => {
        expect(Plane2.destination).toBe("Heathrow")
    })

    test('give a plane a destination property so you can set where it will fly too', () => {
        expect(Plane2.origin).toBe("Gatwick")
    })

    test('reading the weight of a Bag belonging to a specific Passenger on a specific Plane at a specific Airport', () => {
        Heathrow.planes[0].passengers[0].addBag(MyBackpack)
        
        expect(Heathrow.planes[0].passengers[0].bags[0].weight).toBe(15)
    })

})
