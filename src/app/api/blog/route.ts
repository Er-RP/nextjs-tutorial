import { getUsers } from "@/server/controllers/userController"
import User from "@/server/models/userModel"
import connectDb from "@/server/utils/connectDb"
import { NextRequest, NextResponse } from "next/server"
import { json } from "stream/consumers"
export const GET = async (request: NextRequest) => {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users")
        return NextResponse.json(await res.json())
    } catch (error) {
        console.log("GET USER ERROR : ", error)
        return NextResponse.json({ success: false, message: "Failed to fetch", error })
    }
}
// export const GET = async () =>{
//     try {
//         return NextResponse.json(await getUsers());
//     } catch (error) {
//   console.log("GET USER ERROR : ",error)
//   return NextResponse.json({success: false,message: "Failed to fetch",error})
//     }
// }