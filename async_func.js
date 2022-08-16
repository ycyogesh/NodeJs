let a = 45;
console.log(a);
const fs = require('fs') 

fs.readFile(process.argv[2],(err,data)=>{
    console.log(data);
})
a = 55;
console.log(a);
