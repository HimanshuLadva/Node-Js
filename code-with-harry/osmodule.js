const os = require('os');

console.log(os.freemem());
console.log(os.homedir());
console.log(os.hostname());
console.log(os.machine());
console.log(os.networkInterfaces()['Wi-Fi'][1].address);