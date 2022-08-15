
const fs = require('fs')  

fs.readFile(function callback(err,data){
    const buf = data.toString().split("\n").length-1

    console.log(buf);   

})

