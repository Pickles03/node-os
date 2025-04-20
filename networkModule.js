// interface, inside each interface get the family, direction and internal
// example: Interfaz lo0: Familia: IPv4 Dirección: 127.0.0.1 Interno: true Familia: IPv6 Dirección: ::1 Interno: true Familia: IPv6 Dirección: fe80::1 Interno: true
// example each Interface:  Interfaz en5: Familia: IPv6s Dirección: fe80::aede:48ff:fe00:1122 Interno: false

const os = require('node:os');
const interface = os.networkInterfaces();

for (const name in interface) {
    interface[name].forEach( net => {
        console.log('-------------------');
        console.log(`Interface: ${name}`)
        console.log(`Family: ${net.family}`);
        console.log(`Address: ${net.address}`);
        console.log(`Internal: ${net.internal}`);
        console.log('-------------------');
    }
    );
};

module.exports = {interface};
