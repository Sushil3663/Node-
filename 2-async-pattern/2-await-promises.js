// Asynchronous is a non-blocking architecture, so the execution of one task isn't dependent on another. Tasks can run simultaneously. Synchronous is a blocking architecture, so the execution of each operation is dependent on the completion of the one before it.
// const {readFile} = require('fs');
// const { reject } = require('lodash');
// const { Promise } = require('mongoose');
// const { resolve } = require('path');

// readFile('./main/section/fisrt.txt','utf8',(err,data)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log(data)
//     }

// })

// const getData = (path) =>{
//     return new Promise((resolve,reject) =>{
//         readFile(path,'utf8',(err,data)=>{
//             if(err){
//                 reject(err)
//             }
//             else{
//                 resolve(data)
//             }
//         })

//     })


// }
// getData('./main/section/fisrts.txt')
// .then(data=>console.log(data))
// .catch(err=>
//     console.log(err))


// const {readFile} = require('fs')
// const { reject } = require('lodash')

// const getText = (path) =>{
//     return new Promise((resolve,reject)=>{
//         readFile(path,'utf8',(err,data)=>{
//             if(err){
//                 reject(err)
//             }
//             else{
//                 resolve(data)
//             }
//         })
//     })

// }

// using promise then and catch
// getText('./main/section/fisrt.txt')
// .then((data)=>{
//     console.log(data)})
//     .catch((err)=>{console.log(err)})

//using asynch and await

// "async and await make promises easier to write"
// async makes a function return a Promise
// await makes a function wait for a Promise
// const { readFile } = require('fs')
// async function start(path){
//     let myPromise = new Promise((resolve, reject)=>{
//         readFile(path, 'utf8', (err, data) => {
//             if (err) {
//                 reject(err)
//             }
//             else {
//                 resolve(data)
//             }
//         })

//     })
//     try{
//         let a = await myPromise
//         console.log(a)

//     }
//     catch(error){
//         console.log(error)


//     }

// }
// start('./main/section/fisrt.txt')
// start('./main/section/second.txt')


// const { readFile } = require('fs')
// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (err, data) => {
//             if (err) {
//                 reject(err)
//             }
//             else {
//                 resolve(data)
//             }
//         })
//     })

// }
// const start = async () => {
//     try {
//         let prom = await getText('./main/section/fisrt.txt')
//         let proms = await getText('./main/section/second.txt')

//         console.log(prom)
//         console.log(proms)

//     }
//     catch (err) {
//         console.log(err)
//     }



// }
// start()


// const {readFile,writeFile} = require('fs')
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

// async function start(){
//     try{
//         let read = await readFilePromise('./main/section/fisrt.txt','utf8')
//         let read1 = await readFilePromise('./main/section/second.txt','utf8')
//         console.log(read,read1)
//         writeFilePromise('./main/section/promise.txt', `${read} ${read1}`,{flag:"a"})
//     }
//     catch(error){
//         console.log(error)
//     }
// }
// start()

// const {readFile,writeFile} = require('fs').promises

// async function start(){
//     try{
//         let read = await readFile('./main/section/fisrt.txt','utf8')
//         let read1 = await readFile('./main/section/second.txt','utf8')
//         console.log(read,read1)
//         writeFile('./main/section/promise.txt', `${read} ${read1}`,{flag:"a"})
//     }
//     catch(error){
//         console.log(error)
//     }
// }
// start()

