//Create a middleware function that logs each incoming request’s HTTP method, URL, and timestamp to the console

const express=require("express");
const app=express();

function middleLog(req,res,next){
    console.log("Method is" + req.method);
    console.log("Url is " + req.url);
    console.log("host name is" + req.hostname);
    console.log("date is " + new Date());
    next();
}

app.use(middleLog);
let counter=0;

function middleCount(req,res,next){
    counter+=1;
    console.log(counter);
}

app.use(middleCount);

app.get("/",(req,res)=>{
    console.log("get requests done ");
    res.status(200).json({"get requesut access":"yes"});
});

app.post("/",(req,res)=>{
    const a=parseInt(req.body.a);
    const b=parseInt(req.body.b);
    let sum=a+b;
    res.status(200).json({"sum":sum});
});

