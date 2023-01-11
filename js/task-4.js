'use strict';
/*jshint -W097*/

function ElectricalOnOff(device, energyConsumption) {
    this.device = device;
    this.energyConsumption = energyConsumption;
    this.on = function () {
        return this.energyConsumption;
    };
    this.off = function () {
        return false;
    };
}

function GetColorWhite(device, energyConsumption) {
    this.device = device;
    this.energyConsumption = energyConsumption;
    this.color = 'white';
    this.helloPhone = function () {
        console.log(`Hello, i'm ${this.device} and i'm ${this.color}`);
    };
}

function Cheap(device, energyConsumption) {
    this.device = device;
    this.energyConsumption = energyConsumption;
    this.price = 'cheap';
    this.helloLump = function () {
        console.log(`Hello, i'm ${this.device} and i'm ${this.price}`);
    };
}

function Powerful(device, energyConsumption) {
    this.device = device;
    this.energyConsumption = energyConsumption;
    this.power = 'powerful';
    this.helloPC = function () {
        console.log(`Hello, i'm ${this.device} and i'm ${this.power}`);
    };
}


GetColorWhite.prototype = new ElectricalOnOff();
Cheap.prototype = new ElectricalOnOff();
Powerful.prototype = new ElectricalOnOff();

const phone = new GetColorWhite('phone', 192);
const lump = new Cheap('lump', 56);
const computer = new Powerful('computer', 656);

//Сумма всех включенных приборов 
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