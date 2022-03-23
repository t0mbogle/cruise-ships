class Port {
    constructor(name) {
        this.portName = name;
        this.ships = [];
    }

    
    addShip(ship) {
        this.ships.push(ship);
    }

    /*
    removeShip() {
        this.ship.pop(** shipName **)
        - OR .slice() to return new array without certain elements.
    }
    */
}


module.exports = Port;