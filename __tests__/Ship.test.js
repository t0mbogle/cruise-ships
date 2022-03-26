const Ship = require('../src/ship');
const Port = require('../src/port');
const Itinerary = require('../src/itinerary');

describe('Ship', () => {
    describe('with ports and an itinerary', () => {
        let dover;
        let calais;
        let itinerary;
        let ssTidal;

        beforeEach(() => {
            dover = {
                addShip: jest.fn(),
                removeShip: jest.fn(),
                name: 'Dover',
                ships: []
            };
            
            calais = {
                addShip: jest.fn(),
                removeShip: jest.fn(),
                name: 'Calais',
                ships: []
            };
            
            itinerary = new Itinerary([dover, calais]);
            ssTidal = new Ship(itinerary);
        });

        it('can be instantiated', () => {
            expect(ssTidal).toBeInstanceOf(Object);
        });

        it('ship gets added to port on instantiation', () => {    
            expect(dover.addShip).toHaveBeenCalledWith(ssTidal);
        });

        it('has a starting port', () => {    
            expect(ssTidal.currentPort).toBe(dover);
        });






        it('ship can set sail', () => {
            ssTidal.setSail();

            expect(ssTidal.currentPort).toBeFalsy();
            expect(ssTidal.previousPort).toEqual(dover);
            expect(dover.removeShip).toHaveBeenCalledWith(ssTidal);
        });





        it('can dock at a different port', () => {
            
            ssTidal.setSail();
            ssTidal.dock(); 
            // no port arguement as ship docks at the next port on an itinerary.
    
            expect(ssTidal.currentPort).toBe(calais);
            expect(ssTidal.previousPort).toBe(dover);
            // checks wether the previous port is correct as well as the current one
            expect(calais.addShip).toHaveBeenCalledWith(ssTidal);
        });

        it('can\'t sail further than its itinerary', () => {
            
            ssTidal.setSail();
            ssTidal.dock();
    
            expect(() => ssTidal.setSail()).toThrowError('End of itinerary reached');
        });
    });  
});