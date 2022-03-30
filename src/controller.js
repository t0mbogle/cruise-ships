(function exportController() {
    function Controller() {
    this.initialiseSea();
}

Controller.prototype = {
    initialiseSea() {
    const backgrounds = [
        'images/water0.png',
        'images/water1.png',
    ];
    let backgroundIndex = 0;
    window.setInterval(() => {
        document.querySelector('#viewport').style.backgroundImage = `url('${backgrounds[backgroundIndex % backgrounds.length]}')`;
        backgroundIndex += 1;
    }, 1000);
    },

    renderPorts(ports) {
      const portsElement = document.querySelector('#ports')
      portsElement.style.width = '0px';

      ports.forEach((port, index) => {
        const newPortElement = document.createElement('div');
        newPortElement.className = 'port';

        newPortElement.dataset.portName = port.name;
        newPortElement.dataset.portIndex = index;
        /* every new port element gets added to the class #ports and is given 
        data details, such as index and name. */

        portsElement.appendChild(newPortElement);

        const portsElementWidth = parseInt(portsElement.style.width, 10);
        portsElement.style.width = `${portsElementWidth + 256}px`;
        /* how much the screen extends per new port element. It is able 
        to do this because of #viewport overview-x: auto; in the CSS file :) */
      });
    },

    renderShip(ship) {
        const shipPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
        const portElement = document.querySelector(`[data-port-index='${shipPortIndex}']`);

        const shipElement = document.querySelector('#ship');
        shipElement.style.top = `${portElement.offsetTop + 30}px`;
        shipElement.style.left = `${portElement.offsetLeft - 32}px`;
        // ship renders in a certain number of pixels from the top and left
    }

}

  if(typeof module !== 'undefined' && module.exports) {
        module.exports = Controller;
    } else {
        window.Controller = Controller;
    }
}());