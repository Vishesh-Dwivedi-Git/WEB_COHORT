const fs = require('fs'); // external module
const path = require('path');

function print(err,data){
    if(err){
        console.log("error found");
    }
    else{
        console.log(data);
    }
}

const filePath = path.join(__dirname, 'a.txt');
//const data = fs.readFileSync(filePath, 'utf8');//synchronous as it will execute not a callback
fs.readFile(filePath,'utf-8',print);//Asynchronous calling-I/o intensive,uses a web API

