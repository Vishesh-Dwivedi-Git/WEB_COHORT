//Create a middleware function that logs each incoming request’s HTTP method, URL, and timestamp to the console
//log method , timestamp and the url 
const express=require("express");
const app=express();

//middleware-->
let countReq=0;

function Loggermiddleware(req,res,next){
   console.log("method is"+req.method);
   console.log("url-- " + req.url);
   console.log("Route is "+req.hostname);
   console.log(new Date());

   next();
}
app.use(Loggermiddleware);
function requestIncr(req,res,next){
   countReq+=1;
   console.log("total no. of requests="+ countReq);
   //either res.json --> END OR STOP
   //next()-->send to next
   next();
}

function realSum(req,res,next){
   const a=parseInt(req.query.a);
   const b=parseInt(req.query.b);

   res.json({
      ans:a+b,
   })
}

app.get("/sum",requestIncr,realSum);

app.listen(3000);
