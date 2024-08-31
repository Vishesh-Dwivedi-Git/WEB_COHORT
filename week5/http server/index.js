const express=require('express');
const app=express();
function sum(n){
    let sum=0;
    for(let i=0;i<n;i++){
        sum+=i;
    }
    return sum;
}
app.get("/",(req,res)=>{
    const n=req.query.n;
    const ans=sum(n);
    res.send("hi your ans is : "+ans); //can give query in the https//localhost3000/?n=3

})

app.listen(3000);