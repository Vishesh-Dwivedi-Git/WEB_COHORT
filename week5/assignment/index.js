const express=require("express");
const app=express();
//in memory data -->
var users=[
    {
        name:"John",
        kidneys:[
            {
                healthy:true
            }
        ]

    }
]
app.use(express.json());

app.get("/",(req,res)=>{
    const johnKidneys=users[0].kidneys;
    const no=johnKidneys.length;
    let healthykid=0;
    for(let i=0;i<johnKidneys.length;i++){
        if(johnKidneys[i].healthy) 
            healthykid+=1;
    }
    const numberUnHealthy=no-healthykid;
    res.json(
        {
            johnKidneys,
            healthykid,
            numberUnHealthy,
        }
    )
});


//middlewares
app.post("/",function(req,res){
    console.log(req.body);
    let ishealthy=req.body.ishealthy;
    users[0].kidneys.push({
        healthy:ishealthy,
    })
    res.json({
        msg:"Done!"
    })
})

app.put("/",function(req,res){
    const johnKidneys=users[0].kidneys;
    for(let i=0;i<johnKidneys.length;i++){
        if(!johnKidneys[i].healthy){
            johnKidneys[i].healthy=true;
        }
    }
    res.json({});
})


app.delete("/",function(req,res){
    let atleastOneUnhealthy=false;
    const johnKidneys=users[0].kidneys;
    for(let i=0;i<johnKidneys.length;i++){
        if(!johnKidneys[i].healthy){
            atleastOneUnhealthy=true;
            delete johnKidneys[i].healthy;
        }
    }
    if(atleastOneUnhealthy) res.json({msg:"done"});
    else res.sendStatus(411);
})

app.listen(3000);