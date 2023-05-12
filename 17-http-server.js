const {createReadStream} = require('fs')
const http = require('http')

const server = http.createServer();
const read = createReadStream('./main/section/big.txt','utf8')

server.on('request',(req,res)=>{
    read.on('data',(result)=>{
        // read.pipe(res) if open instead of data 
        res.end(result)
    })
    read.on('error',(err)=>{
        res.end(err)
    })
})
server.listen(5000)