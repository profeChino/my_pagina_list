import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request:any,  {params} :any) {
  //params.id es string
  
  const game = await prisma.game.findUnique({
    where: {
      id: params.id,
    },
  });
  return NextResponse.json(game);
}

export async function PUT(request:any, {params} :any) {
  const data = await request.json()
  console.log("put",data);
  
  const gameUpdated = await prisma.game.update({
    where:{
      id: params.id
    },
    data:data
  })
  
  return NextResponse.json(gameUpdated);
}

export async function DELETE(request:any, {params} :any) {
  try {
    const gameRemoved = await prisma.game.delete({
      where: {
        id:params.id,
      },
    });
    return NextResponse.json(gameRemoved);
  } catch (error) {
    return NextResponse.json(error);
  }
}
