// name, type, version, arch, CPUs, total memory, free memory
// total memory and free memort in MB - check which calculation to use
// output example: Nombre: darwin Tipo: Darwin Versión: Darwin Kernel Version 23.1.0: Mon Oct 9 21:27:27 PDT 2023; root:xnu-10002.41.9~6/RELEASE_X86_64 Arquitectura: x64 CPUs: 12 MemoriaTotal: 16384.00 MB MemoriaLibre: 370.71 MB

const os = require('node:os');
const tmbytes = os.totalmem();
const tmmb = (tmbytes/(1024*1024)).toFixed(2);
const fmbytes = os.freemem();
const fmmb = (fmbytes/(1024*1024)).toFixed(2);
const cpuCores = os.cpus().length;

//console.log(`Name: ${os.type()}, Type: ${os.platform()}, Version: ${os.version()}, Architecture: ${os.arch()}, CPUs: ${cpuCores}, Total Memory: ${tmmb}MB, Free Memory: ${fmmb}MB`);

module.exports = {
    osType: os.type(),
    osPlatform: os.platform(),
    osVersion: os.version(),
    osArch: os.arch(),
    cpuCores: cpuCores,
    totalMemoryMB: tmmb,
    freeMemoryMB: fmmb
};

/* live review 9.1

function getInfo() {
    return {
    Name: os.type(),
    Type: os.platform(),
    Version: os.version(),
    Architecture: os.arch(),
    CPUs: cpuCores,
    TotalMemory: `${(os.totalmem()/1024/1024).toFixed(2)}MB`,
    FreeMemory: `${(os.freemem()/1024/1024).toFixed(2)}MB`
    }
}

console.log(getInfo());

module.exports = getInfo; -> just the name of the function, without parentheses

*/