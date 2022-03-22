const Ship = require('../src/ship');
const Port = require('../src/port');
const Itinerary = require('../src/itinerary');

describe('itinerary', () => {
    it('can be instantiated', () => {
        expect(new Itinerary).toBeInstanceOf(Object);
    });
    it('checks the new Itinerary object has a property name', () => {
        const itinerary = new Itinerary('Calais')

        expect(itinerary.portsItinerary).toEqual('Calais');
    });
});