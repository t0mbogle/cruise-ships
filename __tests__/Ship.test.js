const Ship = require('../src/ship');
const Port = require('../src/port');
const Itinerary = require('../src/itinerary');

describe('Ship', () => {
    describe('with ports and an itinerary', () => {
        let ssTidal;
        let dover;
        let calais;
        let itinerary; 

        beforeEach(() => {
            dover = new Port('Dover');
            calais = new Port('Calais');
            itinerary = new Itinerary([dover, calais]);
            ssTidal = new Ship(itinerary);
        });

        it('can be instantiated', () => {
    
            expect(ssTidal).toBeInstanceOf(Object);
        });

        it('has a starting port', () => {
    
            expect(ssTidal.currentPort).toBe(dover);
        });

        it('ship can set sail', () => {
    
            ssTidal.setSail();
            
            expect(ssTidal.currentPort).toBeFalsy();
            // i.e. not at the startingPort anymore
            expect(ssTidal.previousPort).toBe(dover);
            expect(dover.ships[0]).not.toContain(ssTidal);
        });

        it('ship gets added to port on instantiation', () => {
    
            expect(dover.ships).toContain(ssTidal);
        });

        it('can dock at a different port', () => {
            
            ssTidal.setSail();
            ssTidal.dock(); 
            // no port arguement as ship docks at the next port on an itinerary.
    
            expect(ssTidal.currentPort).toBe(calais);
            expect(ssTidal.previousPort).toBe(dover);
            expect(calais.ships).toContain(ssTidal);
        });

        it('can\'t sail further than its itinerary', () => {
            
            ssTidal.setSail();
            ssTidal.dock();
    
            expect(() => ssTidal.setSail()).toThrowError('End of itinerary reached');
        });
    });  
});