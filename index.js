const bodyParser = require('body-parser');
const express = require('express');
const routes = require('.//routs/emp')

const app = express();
const PORT= 5001;


//routes

app.use('/emp',routes)
    

//api
app.get('/',(req,res)=>{
    res.json({
        message:"get request"
    })
});

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// db.collection.find().limit(1).sort({$natural:-1})

//create database connection

const mongoose = require('mongoose');
const { db } = require('./controller/employe');

const connectDataBAse = async()=>{

    const URI="mongodb+srv://Hamza:admin123@contactmanager.j3kjt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

    try{
        await mongoose.connect(URI,{
            useUnifiedTopology: true
        })
        console.log("mongoose is connect");

    }catch(err){
        console.error(err.message);
    }
};
connectDataBAse();
//end mongobd connections..




//port listen
app.listen(PORT,()=>{
    console.log(`server is start ${PORT}`);
});