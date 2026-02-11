const express=require('express')
const router = express()
const person=require('./../models/person');
router.post('/',async (req,res)=>{
   try{
     const data=req.body;
    const newperson=new person(data);
    const response=await newperson.save();
    console.log('data saved');
    res.status(200).json(response);
   }catch(err){
    console.log(err);
    res.status(500).json({error:'internal server error'});
   }
})
router.get('/:worktype',async (req,res)=>{
    try{
        const worktype=req.params.worktype;
        if(worktype=='chef' || worktype=='waiter' || worktype=='manager'){
            const data= await person.find({work:worktype});
            console.log('data fetched');
            res.status(200).json(data);
        }else{
            console.log('incorrect worktype');
            res.status(404).json({error:'incorrect worktype'});
        }
    }catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error'});
    }
})
router.get('/',async (req,res)=>{
    try{
    const data=await person.find();
    if(data.length==0){
        console.log('no data found');
        res.status(404).json({error:'no data found'});
    }
    console.log('data fetched');
    res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error'});
    }

})
router.put('/:id',async (req,res)=>{
    try{
        const personid=req.params.id;
        const updatedata=req.body;
        const response=await person.findByIdAndUpdate(personid,updatedata,{
            new:true,
            runvalidators:true
        });
        if(!response){
            console.log('person not found');
            res.status(404).json({error:'person not found'});
        }
        console.log('data updated');
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error'});
    }
})
router.delete('/:id',async (req,res)=>{
    try{
        const personid=req.params.id;
        const response= await person.findByIdAndDelete(personid);
        
        if(!response){
            console.log('person not found');
            res.status(404).json({error:'person not found'});
        }
        console.log('data deleted');
        res.status(200).json({message:'data deleted successfully'});

    }catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error'});
    }
})
module.exports=router;