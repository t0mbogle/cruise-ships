const Ship = require('../src/ship');
const Port = require('../src/port');
const Itinerary = require('../src/itinerary');

describe('port', () => {
    describe('ports have ships arriving and leaving', () => {
        let dover;
        let titanic;
        let ssTidal;

        beforeEach(() => {
            dover = new Port('Dover');
            calais = new Port('Calais');
            titanic = jest.fn();
            ssTidal = jest.fn();
        });

        it('can be instantiated', () => {
            expect(new Port).toBeInstanceOf(Object);
        });

        it('checks the new Port object has a name property', () => {
    
            expect(dover.portName).toEqual('Dover');
        });

        it('can add a ship to port', () => {
    
            dover.addShip(ssTidal)
            
            expect(dover.ships).toContain(ssTidal);
        });

        it('can remove a ship from port', () => {
    
            dover.addShip(titanic);
            dover.addShip(ssTidal);
            dover.removeShip(ssTidal);
            
            expect(dover.ships).toEqual([titanic]);
        });
    });
});

