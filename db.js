const mongoose=require("mongoose");
// define mongodb connection url
 const mongoURL='mongodb://localhost:27017/hotel' 

 //set up mongodb connection
mongoose.connect(mongoURL)
//   .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

//set up default mongodb connection
 const db=mongoose.connection;
 
//  //define event listeners
 db.on('connected',()=>{
    console.log('connected to mongodb server');
 });
 db.on('disconnected',()=>{
    console.log('disconnected to mongodb server');
 });
//  db.on('error',()=>{
//     console.log('some error is found');
//  });
//  now export database connection to node js server
 module.exports=db;
 