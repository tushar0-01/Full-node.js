const express=require('express')

const app = express()
const db=require('./db')
require('dotenv').config();
const port=process.env.port || 2000;
const passport=require('./auth'); // importing authentication file

const bodyparser=require('body-parser')
app.use(bodyparser.json()); // req.body
app.use(bodyparser.urlencoded({ extended: true }));


//middleware function (logrequest)
const logRequest=(req,res,next)=>{
    console.log(` ${new Date().toLocaleString()} Request made to:${req.originalUrl}`);
    next();// move to next log request if any otherwise to next operation
}
app.use(logRequest);


app.use(passport.initialize());
 const localauthmiddleware=passport.authenticate('local',{session:false});
app.get('/',(req,res)=>{
    res.send('welcome to my server')
})
const personroutes=require('./routes/personroutes');
app.use('/person',localauthmiddleware, personroutes);
const menuroutes=require('./routes/menuroutes');
app.use('/menu',menuroutes);


app.listen(port,()=>{
    console.log('server is running');
})
