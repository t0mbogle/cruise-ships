const Ship = require('../src/ship');
const Port = require('../src/port');
const Itinerary = require('../src/itinerary');

describe('itinerary', () => {
    it('can be instantiated', () => {
        expect(new Itinerary).toBeInstanceOf(Object);
    });
    it('checks the new Itinerary object has a property name', () => {
        const dover = new Port('Dover');
        const calais = new Port('Calais');
        
        itinerary = {
            ports: [dover, calais]
        }

        expect(itinerary.ports).toEqual([dover, calais]);
    });
});