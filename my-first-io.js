const fs = require('fs')  

let buf = fs.readFileSync(process.argv[2])

const str = buf.toString().split("\n").length-1

console.log(str);