const Ship = require('../src/ship');
const Port = require('../src/port');

describe('Ship', () => {
    it('can be instantiated', () => {     
        expect(new Ship()).toBeInstanceOf(Object);
    });
    it('has a starting port', () => {     
        const port = new Port('Dover');
        const ssTidal = new Ship(port);

        expect(ssTidal.currentPort).toBe(port);
    });
});

describe('setSail', () => {
    it('ship can set sail', () => {
        const port = new Port('Dover')
        const ssTidal = new Ship(port);

        ssTidal.setSail();

        expect(ssTidal.currentPort).toBeFalsy(); 
        // i.e. not at the startingPort anymore// 
    });
    it('can dock at a different port', () => {
        const dover = new Port('Dover');
        const ship = new Ship(dover);

        const calais = new Port('Calais');
        ship.dock(calais);

        expect(ship.currentPort).toBe(calais);
    });
});