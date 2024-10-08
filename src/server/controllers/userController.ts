'use server';

import handleError from "@/utils/handleError"
import User from "../models/userModel"
import connectDb from "../utils/connectDb"
import { unstable_noStore } from "next/cache"
import { signIn } from "@/utils/auth"
import { redirect } from "next/navigation"


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

export const createUser = async (isAdmin:boolean,prevState:any,formData:any) => {
try {
const {username,email,password}=Object.fromEntries(formData)
await connectDb()
const user = await User.findOne({$or:[{email},{username}]})
if(user){
    return JSON.stringify({
        success: false,
        messgae: "User Already Found"
    })
}
return JSON.stringify(await User.create({username,email,password,isAdmin}))
} catch (error) {
    console.log("Error while creating User :",JSON.stringify(error))
    return  JSON.stringify({
        success: false,
        messgae: "Error while creating user"
    })
}
}

export const login = async (formData:any) => {
try {
const {username,password}=Object.fromEntries(formData)
await signIn("credentials",{username,password,redirect:false})
} catch (error) {
    console.log("Error while login :",error)
    return "Failed to login"
}
redirect("/")
}

export const doLogin = async (username:string,password:string) => {
    try {
        await connectDb()
        const user = await User.findOne({username,password})
        console.log("RP:",user?.length,typeof username,username,typeof password,password)
        if(user){
            return user
        }
        console.log("No of users :",user?.length)
        throw new Error("nOT foUND!");
    } catch (error) {
        console.log("Creds Login Failed :",error)
        throw new Error("Failed to login!");
    }
} 