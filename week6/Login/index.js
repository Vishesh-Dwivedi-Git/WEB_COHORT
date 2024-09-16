const express=require("express");
const app=express();
const jwt=require("jsonwebtoken");
const JWT_SECRET="iamVishesh";

app.use(express.json()); //middleware extract json from req 
const users=[]; //in memory

async function auth(req, res, next) {
    const token = req.headers.token;
    if(token) {
        await jwt.verify(token, JWT_SECRET, (err, decoded) => {
            if (err) {
                res.status(401).send({
                    message: "Unauthorized"
                })
            } else {
                req.user = decoded;
                next();
            }
        })
    } else {
        res.status(401).send({
            message: "Unauthorized"
        })
    }
}

function logger(req,res,next){
    console.log(req.method +"req came");
    next();
}

app.post("/signUp",logger,(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;

    //input validation --> can add 
    //can add check if already exist

    if(users.find(u=>u.username===username)){
        res.json({message:"it already exist "});
        return;
    }
    else{
    users.push({
        username:username,
        password:password
    });
    console.log(users);
    res.json({
        message:"successful sign up"
    })
}
});

app.post("/signIn",logger,(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;

    const foundUser=users.find(u=>(u.username===username && u.password===password)); //map and filter can use
    if(foundUser){
        const token=jwt.sign({
            username
        },JWT_SECRET);
        res.json({
            token:token
        })
    }
    else{
        res.status(403).send({
            message:"Invalid username or password"
        })
    }
    console.log(foundUser);
    console.log(users);
    

});

app.get("/",(req,res)=>{
    res.sendFile(__dirname +"/public/index.html")   //no cors issue pushing html file from backend
})

//creating a authenticated end point 
app.get("/me",auth,(req,res)=>{ 
    const user=req.user;
    res.send({username: user.username,
        password: user.password
    });
    })

app.listen(3000,console.log("server connected"));