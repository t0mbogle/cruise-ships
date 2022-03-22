class Ship {
    constructor(itinerary) {
    this.itinerary = itinerary
    this.currentPort = itinerary.ports[0];
    this.previousPort = null;
    }

    setSail() {
        const itinerary = this.itinerary;
        const currentPortInex = itinerary.ports.indexOf(this.currentPort);
    
        if (currentPortInex === (itinerary.ports.length - 1)) {
            throw new Error('End of itinerary reached');
        }    

        this.previousPort = this.currentPort;
        this.currentPort = null;
    }

    dock(port) {
        const itinerary = this.itinerary;
        const previousPortIndex = itinerary.ports.indexOf(this.previousPort);

        this.currentPort = itinerary.ports[previousPortIndex + 1];
    }
}


module.exports = Ship;
