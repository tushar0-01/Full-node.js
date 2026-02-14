const mongoose = require("mongoose");
const bcrypt=require('bcrypt');
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
    },
    username:{
        required:true,
        type:String
    },
    password:{
        required:true,
        type:String
    }

});
// .this keyword denotes current user
personschema.pre('save',async function (){
    if(!this.isModified('password'))
         return ;
    try{
        // salt generation
        const salt=await bcrypt.genSalt(10);
        //hash function generated
        const hashedpassword=await bcrypt.hash(this.password,salt);
        // overwrite user password with hashed password 
        this.password=hashedpassword;
    }catch(err){
        return next(err);
    }
})

personschema.methods.comparePassword=async function(candidatePassword){
    try{
        const iswait=await bcrypt.compare(candidatePassword,this.password);
        return true;
    }catch(err){
        throw err;
    }
}
//saved password=strong123
//strong123 hash=kdjfii3290320943r90
// current login =stronghulk

// kdjfii3290320943r90= extract salt
// salt+stronghulk = ierieni94993rknfir

// compare kdjfii3290320943r90 and ierieni94993rknfir

const person=mongoose.model('person',personschema);
module.exports=person;
