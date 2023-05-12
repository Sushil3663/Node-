// File system modules
// Node.js includes fs module to access physical file system. The fs module is responsible for all the asynchronous or synchronous file I/O operations.Synchronous = happens at the same time. Asynchronous = doesn't happen at the same time. 
 

//Synchronous file system
//1st way
// const file = require('fs');
// const read1= file.readFileSync('./main/section/fisrt.txt','utf8')
// const read2= file.readFileSync('./main/section/second.txt','utf8')
// console.log(read1)
// console.log(read2)

//2nd way

const {readFileSync,writeFileSync} = require('fs');
console.log(readFileSync('./main/section/fisrt.txt','utf8'))
console.log(readFileSync('./main/section/second.txt','utf8'))

writeFileSync('./main/section/write.txt',`Node.js includes fs module to access physical file system. The fs module is responsible for all the asynchronous or synchronous file I/O operations.Synchronous = happens at the same time. Asynchronous = doesn't happen at the same time.`,{flag:'a'})
const { readFileSync, writeFileSync } = require('fs')
console.log('start')
const first = readFileSync('./main/section/first.txt', 'utf8')
const second = readFileSync('./main/section/second.txt', 'utf8')

writeFileSync(
    './main/section/first.txt',
  `Here is the result : ${first}, ${second}`,
  { flag: 'a' }
)
console.log('done with this task')
console.log('starting the next one')
