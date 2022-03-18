class Ship {
    constructor(port) {
    this.currentPort = port;
    this.newDestination = '';
    }

    setSail() {
        this.currentPort = false;
    }

    dock(port) {
        this.currentPort = port
    }
}


module.exports = Ship;
