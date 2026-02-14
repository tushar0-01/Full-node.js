const person=require('./models/person');
const passport=require('passport');
const LocalStrategy = require("passport-local").Strategy;
passport.use(new LocalStrategy(async (USERNAME,password,done)=>{
    try{
        // console.log('fetching credentials:',USERNAME,password);
        const user=await person.findOne({username:USERNAME});
        if(!user){
            console.log("user not found");
            return done(null,false,{message : 'Incorrect username'});
        }
        const ispasswordmatch=user.comparePassword(password);
        if(ispasswordmatch){
            return done(null,user);
        }
        else{
            console.log('wrong password');
            return done(null,false,{message : 'Incorrect password'});
            
        }
    }catch(err){
        console.log('error');
        return done(err);
    }
}))
module.exports=passport;