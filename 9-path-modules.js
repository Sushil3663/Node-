// Path modules

const path = require('path');


console.log(path.sep)

const filepath = path.join('/main/', 'section', 'text.txt')
console.log(filepath)

console.log(path.basename(filepath))

const absolute = path.resolve(__dirname,'main','section','text.txt')
console.log(absolute)