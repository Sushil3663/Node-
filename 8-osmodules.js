// Built In module 
//OS modules
const os = require('os');

// information about user
const info = os.userInfo();
console.log(info)

//method that return the system uptime in second. Duration of time system has been working

console.log(os.uptime())

const currentInfo ={
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    avalmem: os.freemem()
}

console.log(currentInfo)