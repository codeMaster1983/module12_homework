let powerSum = 0

function Device(devName, devColor, devPower, devStatus) {
  this.name = devName,
  this.voltage = 220,
  this.color = devColor,
  this.power = devPower,
  this.devStatus = devStatus // параметр devStatus объявлен в конструкторе, но никак не используется. Нужно присвоить его объекту, чтобы его можно было использовать в дальейшем, например, в функции status 
}

Device.prototype.turnOn = function() {
  this.devStatus = 'On';
  powerSum = powerSum + this.power;
  console.log(`${this.name} is turned on`);
}

Device.prototype.turnOff = function() {
  this.devStatus = 'Off';
  powerSum = powerSum - this.power;
  console.log(`${this.name} is turned off`);
}

Device.prototype.action = function(act) {
  console.log(`I can ${act}`)
}

function Kettle(devName, devColor, devPower, devStatus, maxCapacity) {
  this.name = devName,
  this.voltage = 220,
  this.color = devColor,
  this.power = devPower,
  this.devStatus = devStatus,
  this.maxCapacity = maxCapacity
}

Kettle.prototype = new Device();
Kettle.prototype.boilWater = function(waterAmount) {
  if (this.devStatus === 'On') {
    if (waterAmount > this.maxCapacity) {
      console.log(`Can't boil more than ${this.maxCapacity}l of water`);
    } else {
      console.log(`Kettle is boiling ${waterAmount}l of water`);
    }
  } else {
    console.log(`You need to turn ${this.name} on to boil water!`);
  }
}
 
const kettle = new Kettle('Kettle', 'red', 1500, 'Off', 2);

function Toaster(devName, devColor, devPower, devStatus, producer) {
  this.name = devName,
  this.voltage = 220,
  this.color = devColor,
  this.power = devPower,
  this.devStatus = devStatus,
  this.producer = producer
}

Toaster.prototype = new Device();

Toaster.prototype.present = function() {
  console.log(`This ${this.name} is made by ${this.producer}`);
}

const toaster = new Toaster('Toaster', 'black', 1000, 'Off', 'Bosch');

kettle.action('make tea');
kettle.boilWater(1.5);
kettle.turnOn();
kettle.boilWater(1.5);
toaster.action('make toasts');
toaster.present();

console.log(kettle)
// console.log(toaster)
console.log(powerSum)

// Задание выполнено не совсем верно. По условию нужно было создать дочерние конструкторы, которые бы имели в качестве прототипа конструктор Device. Кроме того, дочерние конструкторы должны иметь свои собственные свойства и, желательно, методы. Сейчас kettle и toaster являются экземплярами родительского конструктора Device. Также у Device должен быть метод, который отвечает за включение\выключение устройства
// Выше исправила на верный вариант