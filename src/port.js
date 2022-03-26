class Port {
    constructor(name) {
        this.portName = name;
        this.ships = [];
    }

    addShip(ship) {
        this.ships.push(ship);
    }

    removeShip(ship) {
        this.ships.pop(ship);
    }

}


module.exports = Port;