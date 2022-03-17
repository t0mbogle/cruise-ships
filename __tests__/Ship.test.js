/* globals describe it expect */
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