// const mongoose=require('mongoose')

const mongoose = require('./database.js');

const userschema=mongoose.Schema({
    username:String,
    firstname:String,
    lastname:String,
    mobile:Number,
    state:String,
    district:String,
    password:String,
    gender:String,
    dob:String,
    createdAt: { type: String, default: () => new Date().toLocaleString('en-US', { 
        timeZone: 'Asia/Kolkata' // Change as per your timezone
    }) }
})

module.exports=mongoose.model("user",userschema);