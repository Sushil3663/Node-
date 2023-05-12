const http = require('http');

const server = http.createServer((req,res)=>{
    res.end("Hello ")
    console.log("Home")

})

server.listen(5000,()=>{
    console.log("Listen to server....")
})