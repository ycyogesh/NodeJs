
const fs = require('fs')  

let buf = fs.readFile(process.argv[2])

const str = buf.toString().split("\n").length-1

console.log(str);   
