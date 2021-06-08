const os = require('os');

console.log(os.EOL === '\n'); // MAC OS
console.log(os.EOL === '\r\n'); // WINDOWS OS

console.log(os.totalmem());
console.log(os.freemem());
console.log(os.type());
console.log(os.userInfo());
console.log(os.cpus());
console.log(os.homedir());
console.log(os.hostname());
console.log(os.loadavg());
console.log(os.uptime());
console.log(os.release());
console.log(os.networkInterfaces());
