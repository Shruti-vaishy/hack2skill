// const mongoose=require('mongoose')

const mongoose = require('./database.js');

const userschema=mongoose.Schema({
    Date:String,
    username:String,
    firstname:String,
    lastname:String,
    mobile:Number,
    state:String,
    district:String,
    Address:String,
    Data:{
        type:Map,
        of:new mongoose.Schema({
            no_workers:Number,
            profession:String,
            salary:Number,
            work_day:Number,
            payment:String,
            createdAt: { 
                type: String, 
                default: () => new Date().toLocaleDateString('en-GB') // 'en-GB' gives DD/MM/YYYY format
            }            
        })
    },
});

module.exports=mongoose.model("job",userschema);