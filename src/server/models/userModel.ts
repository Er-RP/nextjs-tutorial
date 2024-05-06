import mongoose from "mongoose";

const userSchema =new mongoose.Schema({
username:{
    type:String,
    required:true,
    unique:true,
    min:3,
    max:10,
},
email:{
    type:String,
    required:true,
    unique:true,
    min:3,
    max:30,
},
password:{
    type:String,
    required:true,
},
isAdmin:{
    type:Boolean,
    default:false
}
},{timestamps:true})

const User = mongoose.models?.User || mongoose.model('User',userSchema)

export default User