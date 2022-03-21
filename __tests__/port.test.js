const Ship = require('../src/ship');
const Port = require('../src/port');

describe('port', () => {
    it('can be instantiated', () => {
        expect(new Port).toBeInstanceOf(Object);
    });
    it('checks the new Port object has a name property', () => {
        const port = new Port('Calais')

        expect(port.portName).toEqual('Calais');
    });
});