import { PrismaClient } from "@prisma/client";
import express from "express"

const app=express();
app.use(express.json());
const client= new PrismaClient();

async function createUser() {
    await client.user.create({
        data:{
            username:"vishesh",
            password:"123123",
            age:21,
            city:"Ayodhya"

        }

    })
}

async function findUser() {
   const user= await client.user.findFirst({
        where:{
            id:1
        },
        include:{
            todo:true
        }
    })
    console.log(user);
    
}

app.post("/login",async (req,res)=>{
    try{
        const {name,password,age ,city}=req.body;
   const user=await client.user.create({
        data:{
            username:name,
            password:password,
            age:age,
            city:city
        }
    })
    res.status(200).send({
       message:"succesfully login",
        userid:user.id
    })

    }
    catch(e){
        console.log("error",e);
    }
    
});

app.post("/todo",async (req,res)=>{
    const {title, description, done , userId}=req.body;
    try{
       const user =await client.todo.create({
            data:{
             title:title,
             description:description,
             done:done||false,
             userId:userId
            }
        })

        res.status(201).send({
            message:"Todo Added!"
        })

    }
    catch(e){
        console.log("error",e);
    }
})


app.listen(3000,()=>{
    console.log("Server running at port 3000");
})
