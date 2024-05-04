import { NextRequest, NextResponse } from "next/server"

export const GET = async (request: NextRequest,{params}:any) => {
    try {
    const {slug} = params
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${slug}`)
        return NextResponse.json(await res.json())
    } catch (error) {
        console.log("GET ONE USER ERROR : ", error)
        return NextResponse.json({ success: false, message: "Failed to fetch single", error })
    }
}