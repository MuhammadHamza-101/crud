const mongoose = require("mongoose");
// create schema ....
const empSchema = new mongoose.Schema({

    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required:true
    },
    number:{
        type:String,
        required:true
    }
});
module.exports = mongoose.model('userDetails',empSchema)