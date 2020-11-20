let powerSum = 0

function Device(devName, devColor, devPower, devStatus) {
  this.name = devName,
  this.voltage = 220,
  this.color = devColor,
  this.power = devPower
  this.status = function(devStatus) {
    if (devStatus === 'On') {
      powerSum = powerSum + devPower
    }
  }
    }

Device.prototype.action = function(act) {
  console.log(`I can ${act}`)
}

 
const kettle = new Device('Kettle', 'red', 1500, 'On');
const toaster = new Device('Toaster', 'black', 1000, 'Off');

kettle.action('make tea')
// toaster.action('make toasts')

console.log(kettle)
// console.log(toaster)
console.log(powerSum)