const express=require('express')

const app = express()
const db=require('./db')
require('dotenv').config();
const port=process.env.port || 2000;

const bodyparser=require('body-parser')
app.use(bodyparser.json()); // req.body

app.get('/',function(req,res){
    res.send('welcome to my server')
})
const personroutes=require('./routes/personroutes');
app.use('/person', personroutes);
const menuroutes=require('./routes/menuroutes');
app.use('/menu',menuroutes);


app.listen(port,()=>{
    console.log('server is running');
})
