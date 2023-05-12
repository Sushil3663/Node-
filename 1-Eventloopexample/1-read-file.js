//An event loop is an endless loop, which waits for tasks, executes them, and then sleeps until it receives more tasks.
//The event loop allows Node.js to perform non-blocking I/O operations despite the fact that JavaScript is single-threaded.
// Javascript is synchronous and single threaded
//When using Node.js, a special library module called libuv is used to perform async operations.
// Non-blocking calls are the calls that do not block the execution of other operations. In non-blocking operations, a single process is allowed to serve multiple requests simultaneously. Instead of waiting for completion, functions are delegated to the system to execute the next piece of code.

// console.log("first")

// setTimeout(()=>{
//     console.log("scond")

// },1000)
// setTimeout(()=>{
//     console.log("third")

// },0000)

// setImmediate(()=>{
//     console.log("fourth")
// },1000)
// console.log("5")

// const first =() =>{
//     console.log("first")

// }
// const second =() =>{
//     console.log("second")

// }
// const third =() =>{
//     console.log("third")

// }

// first();
// third();
// second();

// IIFE - (Immediately Invoked Function Expression)
// (function lib(){
//     const first =() =>{
//         console.log("first")
//         third()

//     }
//     const second =() =>{
//         console.log("second")

//     }
//     const third =() =>{
//         console.log("third")
//         second()

//     }

//     first();


// })();

// const file = require('fs');

// (function lib(){
//     const first =() =>{
//         console.log("first")
//         third()

//     }
//     const second =() =>{
//         console.log("second")
//         setTimeout(()=>{
//             console.log("Time")
//         },1000)
//         process.nextTick(()=>{
//             console.log('tick');
//         })
//         setImmediate(()=>{
//             console.log("Immidate")
//         },1)


//     }
//     const third =() =>{
//         console.log("third")
//         second()
//         setTimeout(()=>{
//             console.log("Time2")
//         },0000)

//     }


//  file.readFile('./main/section/fisrt.txt',first)

// })();


// const { readFile } = require('fs');

// console.log('starting')

// readFile('./main/section/fisrt.txt', 'utf8', (err, result) => {
//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log(result)
// })

// console.log('Ending');
// setTimeout(() => {
//     console.log("Time2")
// }, 1000)


const { readFile } = require('fs');

const file = () =>{
    console.log('starting')
    readFile('./main/section/fisrt.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        console.log(result)
    })
    setTimeout(() => {
        console.log("Time")
    }, 3000)
    
    second();


}
const second = ()=>{
    setTimeout(() => {
        console.log("Time2")
    }, 2000)
    readFile('../main/section/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        console.log(result)
    })
    console.log('Ending');


}
file();






