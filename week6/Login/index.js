const express=require("express");
const app=express();
const jwt=require("jsonwebtoken");
const JWT_SECRET="iamVishesh";

app.use(express.json());
const users=[];

function generateToken() {
    let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    let token = "";
    for (let i = 0; i < 32; i++) {
        // use a simple function here
        token += options[Math.floor(Math.random() * options.length)];
    }
    return token;
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
    res.send({
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
        const token=generateToken();
        foundUser.token=token;
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

//creating a authenticated end point
app.get("/me",(req,res)=>{
    const token=req.headers.token; //jwt
    //const decodedinformation=jwt.verify(token,JWT_SECRET); //converting jwt to username {username:"vishesh@gmail.com"}
    //const username=decodedinformation.username;
    const foundUser=users.find(u=>u.token===token); //hitting the database for getting the html css 
    if(foundUser){
        res.json({
            "username":foundUser.username,
            "password":foundUser.password

        })
    }
    else{
        res.status(403).send({
            message:"Invalid tokens"
        })
    }

})

console.log(users);


app.listen(3000);