//here this is a schema for client data
const mongoose = require('mongoose');

const clientSchema =  new mongoose.Schema({
    name:{
        type:String,
        required:true,
        maxLength:50,
    },
    email:{
        type:String,
        required:true,
        maxLength:50,
    },
    phone:{
        type:Number,
        required:true,
        maxLength:12,
    },
    service:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        required:true,
    },
    createdAt:{
        type:Date,
        required:true,
        default:Date.now(),
    },
    updatedAt:{
        type:Date,
        required:true,
        default:Date.now(),
    }
});

module.exports = mongoose.model("ClientData", clientSchema );

