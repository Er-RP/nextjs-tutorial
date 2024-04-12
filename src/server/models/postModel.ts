import mongoose from "mongoose";

const postSchema =new mongoose.Schema({
title:{
    type:String,
    required:true
},
describtion:{
    type:String,
    required:true,
},
userId:{
    type:mongoose.Schema.Types.ObjectId,
    required:true,
}
},{timestamps:true})

const Post =  mongoose.models.Post ||  mongoose.model('Post',postSchema)

export default Post