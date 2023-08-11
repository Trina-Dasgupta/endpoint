const mongoose=require("mongoose");
const userProofSchema=new mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    
    userDetails:{
        type:Array,
        
    }
});



module.exports=mongoose.model("userProof",userProofSchema);