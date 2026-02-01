const mongoose=require('mongoose');
const menucard=new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        price:{
            type:Number,
            required:true
        },
        category:{
            type:String,
            required:true
        },
        taste:{
            type:String,
            enum:["sour","sweet","spicy","salty"],
            requires:true
        },
        is_drink:{
            type:Boolean,
            default:false
        },
        ingredients:{
            type:[String],
            default:[]
        },
        num_sales:{
            type:Number,
            defalut:0
        }

    }
)
const menuitem=mongoose.model('menu',menucard);
module.exports=menuitem;