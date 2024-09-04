//creating a todo backend 
//adding deleting and updating etc

const express=require("express");
const app=express();
const axios=require("axios");
const cors=require("cors");
app.use(express.json());  //can be bodyPaser too
app.use(cors());

const url="http://localhost:3000/tasks";
//get all task
app.get("/tasks",async (req,res,err) => {
    try{
        const response=await axios.get(url);
        res.json(response.data);

    }
    catch{
        console.log(err);
        res.status(404).send("error ");
    }
});

//add a new task
app.post("/tasks",async (req,res)=>{
    try{
        const newTask=req.body;
        const response=await axios.post(url,newTask);
        res.status(201).json(response.data);
    }
    catch{
        res.status(500).send("error adding task");
    }
})

//update 
app.put("/tasks/:id",async (req,res)=>{
    try{
    const id=req.params.id;
    const updateTask=req.body.task;
    const response= await axios.put(`${url}/${id}`,updateTask);
    res.status(200).send(response.data);
    }
    catch{
        res.status(500).send("error")
    }
})

//delete can also use query directly 
app.delete("/tasks/:id",async (req,res)=>{
    try{
        console.log(req.params);
        const id=req.params.id;
        const response= await axios.delete(`${url}/${id}`);
        res.send(response.data);
    }
    catch{
        
        res.status(500).send("error");
    }
})

app.listen(4000,()=>{
    console.log("backend server started on port 4000");
});

/*// delete using query parameter
app.delete("/tasks", async (req, res) => {
    try {
        const id = req.query.id; // get the id from the query parameter
        if (!id) {
            return res.status(400).send("Task ID is required");
        }
        const response = await axios.delete(`${url}/${id}`);
        res.send(response.data);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error deleting task");
    }
});
 */