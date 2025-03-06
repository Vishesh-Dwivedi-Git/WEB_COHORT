const express=require("express");

const app=express();

app.get("/add/:firstArg/:secondArg",function(req,res){
    const a=parseInt(req.params.firstArg);
    const b=parseInt(req.params.secondArg);
    const sum=a+b;
    res.send("Your sum is "+sum);
    
});

app.listen(3000);