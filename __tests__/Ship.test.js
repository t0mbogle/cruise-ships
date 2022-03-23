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
    it('ship gets added to port on instantiation', () => {
        const dover = new Port('Dover');
        const itinerary = new Itinerary([dover]);
        const ssTidal = new Ship(itinerary);

        expect(dover.ships).toContain(ssTidal);
    });
    it('has a starting port', () => {     
        const port = new Port('Dover');
        const itinerary = new Itinerary([port]);
        const ssTidal = new Ship(itinerary);

        expect(ssTidal.currentPort).toBe(port);
    });
    it('ship can set sail', () => {
        const dover = new Port('Dover');
        const calais = new Port('Calais');
        const itinerary = new Itinerary([dover, calais]);
        const ssTidal = new Ship(itinerary);

        ssTidal.setSail();

        expect(ssTidal.currentPort).toBeFalsy();
        // i.e. not at the startingPort anymore 
    });




    it('can dock at a different port', () => {
        const dover = new Port('Dover');
        const calais = new Port('Calais');
        const itinerary = new Itinerary([dover, calais]);
        const ssTidal = new Ship(itinerary);

        ssTidal.setSail();
        ssTidal.dock(); 
        // no port arguement as ship docks at the next port on an itinerary.

        expect(ssTidal.currentPort).toBe(calais);
        expect(ssTidal.previousPort).toBe(dover);
        expect(calais.ships).toContain(ssTidal);
    });




    it('can\'t sail further than its itinerary', () => {
        const dover = new Port('Dover');
        const calais = new Port('Calais');
        const itinerary = new Itinerary([dover, calais]);
        const ssTidal = new Ship(itinerary);
        
        ssTidal.setSail();
        ssTidal.dock();

        expect(() => ssTidal.setSail()).toThrowError('End of itinerary reached');
    });
});