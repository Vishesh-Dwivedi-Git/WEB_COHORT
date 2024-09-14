const express=require("express");
const app=express();
import { UserModel,TodoModel } from "./db";
const jwt=require("jsonwebtoken");
const mongoose=require("mongoose");
const JWT_SECRET="Iamvishesh";
app.use(express.json());

await mongoose.connect("");
function auth(req,res,next){
    const token=req.headers.token;
    const  decodedData=jwt.verify(token,JWT_SECRET);

    if(decodedData){
        req.userId=decodedData.id;
        next();
    }

    else{
        res.status(403).json({
            message:"Incorrect credentials"
        })
    }
}
app.post("/signUp",async function(req,res){
    const email=req.body.email;
    const password=req.body.password;
    const name=req.body.name;

    await UserModel.create({
        email:email,
        password:password,
        name:name
    })

    res.json({
        message:"You are logged in"
    })

})

app.post("/signIn",async function(req,res){
    const email=req.body.email;
    const password=req.body.password;

    const user=await UserModel.findOne({
        email:email,
        password:password
    })
    if(user){
        const token=jwt.sign({
            id:user._id.toString()
        },JWT_SECRET);
        res.json({
            token:token
        });
    }
    else{
        res.status(403).json({
            message:"Incorrect credentials"
        })
    }

})

app.post("/add",auth,async function(req,res){
    const title=req.body.title;
    const id=req.userId;

    await TodoModel.create({
        title:title,
        userId:id
    })
    res.json({
        message:"TO do sucessfully added"
    })

})

app.delete("/delete",auth,async function(req,res){
    const todoId=req.query.id;
    await TodoModel.findByIdAndDelete(todoId);
    res.json({ message: "Todo deleted successfully" });
});

app.listen(3000,console.log("server is connected"));