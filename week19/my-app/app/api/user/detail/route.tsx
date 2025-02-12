import { NextResponse,NextRequest } from "next/server";


export function GET(){
    return NextResponse.json({name:"kirat",email:"abc@gmail.com"});
}

export function POST(req:NextRequest){

    const {name,email}=req.body;
    return NextResponse.json({"message":"signIn"});
}
