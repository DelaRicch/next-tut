import User from "@/models/User"
import connect from "@/utils/db"
import { NextResponse } from "next/server"
import * as argon2 from 'argon2'

export const POST = async (req: any) => {
    const {email, name, password} = await req.json()
    await connect()

    const hashedPassword = await argon2.hash(password)

    const newUser = new User({
        email, name, password:hashedPassword
    })

    try {
        await newUser.save()
        return new NextResponse("User has been created", {status: 201})
    } catch (error:any) {
        return new NextResponse(error.message, {status: 500})
    }
}