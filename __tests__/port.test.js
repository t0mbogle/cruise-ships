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
            titanic = {};
            ssTidal = {};
        });

        it('can be instantiated', () => {
            expect(new Port).toBeInstanceOf(Object);
        });

        it('checks the new Port object has a name property', () => {
    
            expect(dover.portName).toEqual('Dover');
        });

        it('ship can be added to port', () => {
    
            dover.addShip(ssTidal)
            
            expect(dover.ships).toContain(ssTidal);
        });

        it('ship can be removed from port', () => {
    
            dover.addShip(titanic);
            dover.addShip(ssTidal);
            dover.removeShip(ssTidal);
            
            expect(dover.ships).toEqual([titanic]);
        });
    });
});

