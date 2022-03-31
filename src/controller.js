(function exportController() {
    function Controller(ship) {
        this.ship = ship;
        this.initialiseSea();

        document.querySelector('#sailButton').addEventListener('click', () => {
            this.setSail();
        });
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

    renderShip() {
        const ship = this.ship;

        const shipPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
        const portElement = document.querySelector(`[data-port-index='${shipPortIndex}']`);

        const shipElement = document.querySelector('#ship');
        shipElement.style.top = `${portElement.offsetTop + 30}px`;
        shipElement.style.left = `${portElement.offsetLeft - 32}px`;
        // ship renders in a certain number of pixels from the top and left
    },

    renderMessage(message) {
        const newMessageElement = document.createElement('div');
        newMessageElement.id = 'message';
        // .id references the id in the css doc
        newMessageElement.innerHTML = message;

        const viewport = document.querySelector('#viewport');
        viewport.appendChild(newMessageElement);

        setTimeout(() => {
            viewport.removeChild(newMessageElement)
        }, 2500);

    },

    setSail() {
        const ship = this.ship;

        const currentPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
        const nextPortIndex = currentPortIndex + 1;
        const nextPortElement = document.querySelector(`[data-port-index='${nextPortIndex}']`);
        
        if (!nextPortElement) {
            this.renderMessage(`You've reached the end of the cruise!`);
            // return alert if there is not a next port
        } else {
            this.renderMessage(`Leaving ${ship.currentPort.portName} and setting sail for ${ship.itinerary.ports[currentPortIndex +1].portName}!`);
        }

        const shipElement = document.querySelector('#ship');
        const sailInterval = setInterval(() => {
            const shipLeft = parseInt(shipElement.style.left, 10);
            if(shipLeft === (nextPortElement.offsetLeft - 32)) {
                ship.setSail();
                ship.dock();
                clearInterval(sailInterval);
                // offsetLeft is reset after docking so that the ship is then moving 
                // further lefdt away from the last visited port
            }

            shipElement.style.left = `${shipLeft + 1}px`;
        }, 20);

        setTimeout(() => {
            const nextPort =
            this.renderMessage(`Arriving soon at ${ship.itinerary.ports[currentPortIndex + 1].portName}!`);
        }, 3750);
    }

}

  if(typeof module !== 'undefined' && module.exports) {
        module.exports = Controller;
    } else {
        window.Controller = Controller;
    }
}());