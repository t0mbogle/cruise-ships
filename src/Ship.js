class Ship {
    constructor(itinerary) {
    this.itinerary = itinerary
    this.currentPort = itinerary.ports[0];
    this.previousPort = null;
    this.currentPort.addShip(this);
    }

    setSail() {
        const itinerary = this.itinerary;
        const currentPortInex = itinerary.ports.indexOf(this.currentPort);
    
        if (currentPortInex === (itinerary.ports.length - 1)) {
            throw new Error('End of itinerary reached');
        }    

        this.previousPort = this.currentPort;
        // after setting sail, reassign last port visited to previous port
        this.previousPort.removeShip(this);
        // once ship has set sail, remove ship from the previous port.
        this.currentPort = null;
        // current port is null becasue ship is not docked
    }

    dock() {
        const itinerary = this.itinerary;
        const previousPortIndex = itinerary.ports.indexOf(this.previousPort);

        this.currentPort = itinerary.ports[previousPortIndex + 1];
        this.currentPort.addShip(this);
    }
}


module.exports = Ship;
