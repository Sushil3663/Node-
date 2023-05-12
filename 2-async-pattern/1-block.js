const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end("Home Page")
    }
    if(req.url === '/about'){
        //Blocking code
        // unless the blocking code get executed first, other request are blocked . Eg when we refresh about page and than referssh other page. Other page request get hold until the Blocking code get execute i.e about page
        for(let i =0;i<50;i++){
            for(let j=0;j<50;j++){
                console.log(`${i}  ${j}`)

            }
        }
        res.end("About")
    }

})

server.listen(5000,()=>{
    console.log("Listening to server....")
})