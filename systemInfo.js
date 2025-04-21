// import or require the two modules
// in the terminal, run: node systemInfo.js
// remember console.log

const osModule = require('./osModule.js');
const networkModule = require('./networkModule.js');

console.log(`
Name: ${osModule.osPlatform}
Type: ${osModule.osType}
Version: ${osModule.osVersion}
Architecture: ${osModule.osArch}
CPUs: ${osModule.cpuCores}
Total Memory: ${osModule.totalMemoryMB}MB
Free Memory: ${osModule.freeMemoryMB}MB`);

console.log('-----------------------------------------');


for (const name in networkModule.interface) {
    networkModule.interface[name].forEach(net => {
        console.log(`Interface: ${name}`);
        console.log(`   Family: ${net.family}`);
        console.log(`   Address: ${net.address}`);
        console.log(`   Internal: ${net.internal}`);
        console.log('-------------------');
    });
}