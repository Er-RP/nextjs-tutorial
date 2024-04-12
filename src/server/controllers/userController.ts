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