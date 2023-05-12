
const {writeFileSync} = require('fs')

for(let i=0; i<1000; i++){
    writeFileSync('./main/section/big.txt',`Hello Sushil ${i}\n`,{flag:'a'})

}
