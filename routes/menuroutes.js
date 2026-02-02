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
router.put('/:id',async(req,res)=>{
    try{
        const id=req.params.id;
        const data=req.body;
        const updated_data= await menu.findByIdAndUpdate(id,data,{
            new:true,
            runvalidators:true
        })
        if(!updated_data){
            console.log('menu item not found');
            res.status(404).json({error:'menu item not found'});
        }
        console.log('updated successfully');
        res.status(200).json(updated_data);
    }catch(err){
        console.log('internal server error');
        res.status(500).json({error:'internal server error'});
    }
})
router.delete('/:id',async(req,res)=>{
    try{
        const id= req.params.id;
        const del_data= await menu.findByIdAndDelete(id);
        if(!del_data){
            console.log('no item found of this id');
            res.status(404).json({error:'no item found of this id'});
        }
        res.status(200).send({done:'menu item deleted successfully'});
        console.log('menu item deleted successfully');
    }catch(err){
        console.log('internal server error');
        res.status(500).json({error:'internal server error'});
    }
})
module.exports=router;