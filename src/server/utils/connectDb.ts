import mongoose from "mongoose";
import { envConfig } from "../../utils/config";
let isConnected: mongoose.ConnectionStates;
const connectDb = async () => {
    try {
        if(isConnected){
            console.log("Using Existing Connection")
            return;
        }
        mongoose.set("toObject",{transform:(doc,ret,options)=>{
            delete ret._id;
            return ret;
        }})
        mongoose.set("id",true)
       const db = await mongoose.connect(envConfig?.mongoUri) 
       isConnected = db?.connections?.[0]?.readyState
    } catch (error) {
        console.log("Error while connecting DB :",error)
        throw new Error(error as any)
    }
}

export default connectDb