const Airport = require('./Airport')
const Plane = require('./Plane')
const Passenger = require('./Passenger')
const Bag = require('./Bag')
const Crew = require('./Crew')
const Person = require('./Person')

const Gatwick = new Airport("Gatwick")
const Heathrow = new Airport("Heathrow")

Plane1 = new Plane("1234", Gatwick, Heathrow)
Plane2 = new Plane("5678", Heathrow, Gatwick)

Lucas = new Passenger("Lucas")
Mandy = new Crew("Mandy", "pilot")

MyBackpack = new Bag(15)

describe('passenger objects', () => {
    test('creating multiple Airports and Planes', () => {
        expect(Airport.airports).toHaveLength(2)
        expect(Plane.planes).toHaveLength(2)
    })

    test('landing Planes at Airports i.e airport.land(plane)', () => {
        Plane2.depart(Gatwick, Heathrow)

        expect(Plane2.origin).toBe(Gatwick)
        expect(Plane2.destination).toBe(Heathrow)
    })

    test('boarding Passengers onto a Plane', () => {
        Heathrow.planes[0].board(Lucas)

        expect(Heathrow.planes[0].passengers[0]).toBe(Lucas)
    })

    test('give a plane an inbound property (the name of the airport it is currently landed in)', () => {
        expect(Plane2.destination).toBe(Heathrow)
    })

    test('give a plane a destination property so you can set where it will fly too', () => {
        expect(Plane2.origin).toBe(Gatwick)
    })

    test('reading the weight of a Bag belonging to a specific Passenger on a specific Plane at a specific Airport', () => {
        Heathrow.planes[0].passengers[0].addBag(MyBackpack)
        
        expect(Heathrow.planes[0].passengers[0].bags[0].weight).toBe(15)
    })

    test('crew and passenger are instances of Crew and Passenger respectively, and both extend Person', () => {
        expect(Lucas instanceof Passenger).toBeTruthy()
        expect(Mandy instanceof Crew).toBeTruthy()
        expect(Lucas instanceof Person).toBeTruthy()
        expect(Mandy instanceof Person).toBeTruthy()
    })

    test('Plane class has a crew property', () => {
        expect(Plane1).toHaveProperty("crew")
    })

    test('crew is added to the correct property of plane', () => {
        Heathrow.planes[0].board(Mandy)
        
        expect(Heathrow.planes[0].passengers[0]).toBe(Lucas)
        expect(Heathrow.planes[0].crew[0]).toBe(Mandy)
    })

})

