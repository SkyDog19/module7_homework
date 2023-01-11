'use strict';
/*jshint -W097*/

class ElectricalOnOff {
    constructor(device, energyConsumption) {
        this.device = device;
        this.energyConsumption = energyConsumption;
    }
    on() {
        return this.energyConsumption;
    }
    off() {
        return false;
    }
}

class ColorWhite extends ElectricalOnOff {
    constructor(device, energyConsumption) {
        super(device, energyConsumption);
        this.color = 'white';
    }
    helloPhone() {
        console.log(`Hello, i'm ${this.device} and i'm ${this.color}`);
    }
}

class Cheap extends ElectricalOnOff {
    constructor(device, energyConsumption) {
        super(device, energyConsumption);
        this.price = 'cheap';
    }

    helloPhone() {
        console.log(`Hello, i'm ${this.device} and i'm ${this.price}`);
    }
}

class Powerful extends ElectricalOnOff {
    constructor(device, energyConsumption) {
        super(device, energyConsumption);
        this.power = 'powerful';
    }
    helloPhone() {
        console.log(`Hello, i'm ${this.device} and i'm ${this.power}`);
    }
}

const phone = new ColorWhite('phone', 192);
const lump = new Cheap('lump', 56);
const computer = new Powerful('computer', 656);

// Сумма всех включенных приборов
function sumVoltageOn(...devices) {
    const devicesOn = [];

    devices.forEach(device => {
        devicesOn.push(device.on());
    });

    let result = devicesOn.reduce((sumDiveceOn, device) => {
        return sumDiveceOn + device;
    });

    return result;
}

console.log(sumVoltageOn(phone, lump, computer));