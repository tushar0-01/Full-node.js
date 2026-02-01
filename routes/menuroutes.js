const express=require('express')
const router = express()

const menu=require('./../models/menu');
router.post('/',async(req,res)=>{
    try{
        const data=req.body;
        const newmenu=new menu(data);
        const response=await newmenu.save();
        console.log('data saved');
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error'});
    }
})
router.get('/',async (req,res)=>{
    try{
    const data=await menu.find();
    console.log('data fetched');
    res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error'});
    }

})
router.get('/:rate',async (req,res)=>{
    try{
        const rate=req.params.rate;
        if(rate>=10){
            const data= await menu.find({price:{$lt:rate}});
            console.log('data fetched');
            res.status(200).json(data);
        }else{
            console.log('no dish available below price 10 Rs');
            res.status(404).json({error:'no dish available below price 10 Rs'});
        }
    }catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error'});
    }
})
module.exports=router;