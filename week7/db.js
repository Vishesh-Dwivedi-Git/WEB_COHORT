const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const User = new Schema({
    email: String,
    password: String,
    name: String,
});

const Todo = new Schema({
    title: String,
    done: Boolean,
    userId: ObjectId,
});

const UserModel = mongoose.model("users", User); // "users" is the collection name
const TodoModel = mongoose.model("todos", Todo); // "todos" is the collection name

module.exports = {
    UserModel,
    TodoModel,
};
