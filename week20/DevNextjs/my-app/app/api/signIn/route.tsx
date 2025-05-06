import { NextRequest, NextResponse } from "next/server"
import jwt from "jsonwebtoken";

export function GET(request: Request) {

  return new Response('Hello, Next.js!')
}

export async  function POST(req:NextRequest) {
  const body=await req.json();
  const username=body.username;
  const password=body.password;
  //check and get userId from database
  const userId=1;
  const token=jwt.sign({userId},"secret");

  return NextResponse.json({token});

}