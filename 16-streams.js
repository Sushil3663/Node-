// A node stream is a method of transferring large amounts of data on mobile devices or websites (such as uploading detailed photographs) by breaking the file or data down into manageable chunks.
// There are four fundamental stream types within Node.js:

//     Writable : streams to which data can be written (for example, fs.createWriteStream() ).
//     Readable : streams from which data can be read (for example, fs.createReadStream() ).
//     Duplex : streams that are both Readable and Writable (for example, net.Socket ).
//Transform: Streams in which data can be transformed/ modified while writinfg or reading.
// The read stream listens for the 'data' event, which is emitted whenever the stream receives data. When the 'data' event is triggered, the provided callback function is called with the received data as its argument, which is logged to the console using console.log().
//Data aevent - This Event is fired when there is data available to read
//End - This is is fired when there is no more data to read.
// error - This event is fired when there ia any error receiving or writing data
// finish - This event is fired when all the data has been flushed to underlying system.

// 1st way to read data on server
// const http = require('http')
// const {readFile} = require('fs')

// const server= http.createServer();
// server.on('request',(req,res)=>{
//     readFile('./main/section/big.txt',(err,data)=>{
//         if(err){
//             console.log(err)
//             return
//         }
//         else{
//             res.end(data.toString())
//         }
//     })

// })
// server.listen(5000)

//2nd way to read file on server
// const http = require('http')
// const { createReadStream } = require('fs')

// const server= http.createServer();
// const read = createReadStream('./main/section/big.txt')

// server.on('request',(req,res)=>{
//     read.on('data',(result)=>{
//         res.end(result.toString())

//     })


// });
// server.listen(5000)

//Read data on console
const {createReadStream} = require('fs')
const { result } = require('lodash')
const read = createReadStream('./main/section/big.txt',{encoding:'utf8'})

read.on('data',(result)=>{
    // console.log(result.toString())
    console.log(result)
})
read.on('end',()=>{
    console.log('End')
})
read.on('error',(err)=>{
    console.log('err')
})


 