const Ship = require('../src/ship');
const Port = require('../src/port');
const Itinerary = require('../src/itinerary');

describe('Ship', () => {
    it('can be instantiated', () => {
        const port = new Port('Dover');
        const itinerary = new Itinerary([port]);
        const ssTidal = new Ship(itinerary);

        expect(ssTidal).toBeInstanceOf(Object);
    });
    it('has a starting port', () => {     
        const port = new Port('Dover');
        const itinerary = new Itinerary([port]);
        const ssTidal = new Ship(itinerary);

        expect(ssTidal.currentPort).toBe(port);
    });
});

describe('setSail', () => {
    it('ship can set sail', () => {
        const port = new Port('Dover')
        const itinerary = new Itinerary([port]);
        const ssTidal = new Ship(itinerary);

        ssTidal.setSail();

        expect(ssTidal.currentPort).toBeFalsy();
        // i.e. not at the startingPort anymore 
    });
    it('can dock at a different port', () => {
        const dover = new Port('Dover');
        const calais = new Port('Calais');
        const itinerary = new Itinerary([dover, calais]);
        const ship = new Ship(itinerary);

        ship.setSail();
        ship.dock(); 
        // no port arguement as ship docks at the next port on an itinerary.

        expect(ship.currentPort).toBe(calais);
        // expect(ship.previousPort).toBe(dover); //
    });
});