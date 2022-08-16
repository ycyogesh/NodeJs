let a = 45;
console.log(a);
const fs = require('fs') 
// console.log(fs);

let buf = fs.readFileSync(process.argv[2])
console.log(buf);
a = 55;
console.log(a);


// const str = buf.toString().split("\n").length-1

// console.log(str);



