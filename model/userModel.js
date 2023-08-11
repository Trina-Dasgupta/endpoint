const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    user_id:{
        type:Number,
       
    },
    username:{
        type:String,
       
    },
    email:{
        type:String,
    }, 
    userDetails:{
        type:Array
    }
});


const Post=mongoose.model("User",userSchema)
module.exports=Post;




