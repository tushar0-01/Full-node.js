const mongoose = require("mongoose");

const personschema= new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    work:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true,
        unique:true
    },
    address:{
        type:String,
        required:true
    },
    pan:{
        type:String,
    },
    salary:{
        type:Number,
        required:true
    }

});
const person=mongoose.model('person',personschema);
module.exports=person;
