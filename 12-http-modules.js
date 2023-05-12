//HTTP modules
//Create a server that listens on port 8080 of your computer.
// When port 8080 get accessed, write "Hello World!" back as a response:

const http = require('http')

const server = http.createServer((req,res)=>{
    // res.write("hello world")
    // res.end()
    if(req.url === '/'){
        res.end("This is home page")
        
    }
    if(req.url === '/about'){
        res.end('About page')
    }
    res.end(`<h1>this is error. OOPS!</h1>
    <a href="/">Click</a>`) 
})

//The server.listen() method creates a listener on the specified port or path.
server.listen(8080);