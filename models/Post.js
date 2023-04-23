 const mongoose=require("mongoose")
const { UserModel } = require("./model")
 const {ObjectId}=mongoose.Schema.Types

 const postSchema=new mongoose.Schema({
   
    body:{
        type:String,
        required:true
    },
    photo:{
        type:String,
        required:true
    },
    postedBy:{
        type:ObjectId,
        ref:"InstaUser"
    },
    likes:[{
        type:ObjectId,
        ref:"InstaUser"  // same name hona chaiye jo model ka naam hai
    }],
    comments:[{
        comment:{type:String},
        postedBy:{type:ObjectId,ref:"InstaUser"}
    }],
    userName:{
        type:String,
        required:true
    }
 },{timestamps:true})

 const PostModel=mongoose.model("InstaPost",postSchema)

module.exports={PostModel}