const fs = require("fs");


function readFileAsyn(){
    return new Promise(function(resolve,reject){
        fs.readFile("abc.txt","utf-8",function(err,data){
            //err
            if(err){
                reject("file was not found");
            }
            else{
                resolve(data);
            }
        })
    });
}

readFileAsyn().then((data)=>console.log(data)).catch((e)=>console.log(e));




