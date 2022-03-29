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
    }
}

  if(typeof module !== 'undefined' && module.exports) {
        module.exports = Controller;
    } else {
        window.Controller = Controller;
    }
}());