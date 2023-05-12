const http = require('http')

const server = http.createServer();


// Using Event Emitter API. Event 'request' emit i.e trigger a callback function


server.on('request',(req,res)=>{
    res.end('Hello')

})

server.listen(5000)
