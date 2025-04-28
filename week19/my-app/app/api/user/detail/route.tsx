import { NextResponse,NextRequest } from "next/server";


export function GET(){
    console.log("GET method called in user detail route");
    return NextResponse.json({name:"kirat",email:"abc@gmail.com"});
}

export async function POST(req:NextRequest){

    const { username, password } = await req.json();
    console.log(`username: ${username} password: ${password}`);
    return NextResponse.json({"message":"signIn"});
}
