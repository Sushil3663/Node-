// fs Asynchronous
const file = require('fs');

const read =file.readFile('./main/section/fisrt.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err)
        return

    }
    // console.log(result)
    const first = result
    console.log(first)
})
const {readFile} = require('fs');
const read1 = readFile('./main/section/second.txt','utf8',(err,result) =>{
    if(err){
        console.log(err)
        return
    }
    const second = result
    console.log(second)
})

 const write = file.writeFile('./main/section/asywrite.txt',`This is  Asyfile`,(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(result)
 })