import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: any, {params}:any){
  const games = await prisma.game.findMany();
  // console.log(games)
  return NextResponse.json(games)
}

export async function POST(request:any) {
  const { title, description, image } = await request.json();
  const newGame = await prisma.game.create({
    data: {
      title,
      description,
      image
    },
  });
  return NextResponse.json(newGame);
}