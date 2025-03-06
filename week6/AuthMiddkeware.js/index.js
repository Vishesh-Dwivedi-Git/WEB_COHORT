const express=require("express");
const jwt=require("jsonwebtoken");
const JWT_SECRET="iamMe";
app=express();
const users=[];

function auth(req,res,next){
    const token=req.headers.token;
    const decodeData=jwt.verify(token,JWT_SECRET);
    if(decodeData.username) {
        req.username=decodeData.username;
        next();
    }
    else{
        res.json({
            message:"you are not loggged in",
        })
    }
    
}

app.post("/signUp",(req,res)=>{
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

app.post("/signIn",(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;

    const foundUser=users.find(u=>(u.username===username && u.password===password)); //map and filter can use
    console.log(foundUser);
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
app.get("/me",(req,res)){
    const foundUser=users.find(user=>user.username===req.username)
    res.json({
        username:req.username,
        password: foundUser.password
    })

}

// app.get("/todo",auth,(req,res)){

// }

// app.post("/todo",auth,(req,res)){

// }

app.listen(3000);
