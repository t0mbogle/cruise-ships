const Ship = require('../src/ship');

describe('Ship', () => {
    it('can be instantiated', () => {     
        expect(new Ship()).toBeInstanceOf(Object);
    });
    it('has a starting port', () => {     
        const ssTidal = new Ship('Dover')

        expect(ssTidal.startingPort).toBe('Dover');
    });
});

describe('setSail', () => {
    it('ship can set sail', () => {
        const ssTidal = new Ship('Dover');

        ssTidal.setSail();

        expect(ssTidal.startingPort).toBeFalsy(); 
        // i.e. not at the startingPort anymore// 
    });
});