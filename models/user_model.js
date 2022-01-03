const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSignup = new Schema({
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    email:{type:String,unique:true,required:true},
    password:{type:String,required:true},
    role:{type:String,required:true,enum:['provider','consumer']},

    createdAt:{
        type:Date,
        default:Date.now
    },
})

module.exports= mongoose.model("user",userSignup)