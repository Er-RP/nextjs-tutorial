import handleError from "@/utils/handleError"
import User from "../models/userModel"
import connectDb from "../utils/connectDb"
import { unstable_noStore } from "next/cache"


export const getUsers = async () => {
    // to prevent cache
    unstable_noStore()
    try {
        await connectDb()
        return await User.find()
    } catch (error) {
        return handleError(error, "getUsers")
    }
}

export const createUser = async (formData:any) => {
'use server';
try {
const {username,email,password}=Object.fromEntries(formData)
await connectDb()
return JSON.stringify(await User.create({username,email,password}))
} catch (error) {
   
    console.log("Error while creating User :",error)
    return "Failed to create User"
}
}