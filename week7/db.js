const mongoose=require("moongoose");
const Schema=mongoose.Schema;

const User=new Schema({
    email:String,
    password:String,
    name:String,
})


const Todo= new Schema({
    title:String,
    done:Boolean,
    userId: ObjectId
})

const UserModel=mongoose.model("users",User); //users is collection
const TodoModel=mongoose.model("todos",Todo); //todos is collection

export{
    UserModel,
    TodoModel
}