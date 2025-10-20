import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  await prisma.todo.deleteMany();

  await prisma.todo.createMany({
    data: [
      { description: "Learn TypeScript", complete: true },
      { description: "Build a React app" },
      { description: "Set up Prisma database" },
      { description: "Create API routes" },
      { description: "Deploy to production" },
    ],
  });

  return new NextResponse(
    JSON.stringify({
      message: "Seed created",
    }),
    { status: 200 }
  );
}
