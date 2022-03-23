const Ship = require('../src/ship');
const Port = require('../src/port');
const Itinerary = require('../src/itinerary');

describe('port', () => {
    it('can be instantiated', () => {
        expect(new Port).toBeInstanceOf(Object);
    });
    it('checks the new Port object has a name property', () => {
        const port = new Port('Calais')

        expect(port.portName).toEqual('Calais');
    });
});

describe('addShip', () => {
    it('ship can be added to port', () => {
        const port = new Port('Dover');
        const ssTidal = {};

        port.addShip(ssTidal)
        
        expect(port.ships).toContain(ssTidal);
    });
});

describe('removeShip', () => {
    it('ship can be removed from port', () => {
        const port = new Port('Dover');
        const titanic = {};
        const ssTidal = {};

        port.addShip(titanic);
        port.addShip(ssTidal);
        port.removeShip(ssTidal);
        
        expect(port.ships).toEqual([titanic]);
    });
});