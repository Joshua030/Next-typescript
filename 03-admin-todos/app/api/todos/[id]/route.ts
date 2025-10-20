import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { boolean, object, string } from "yup";

interface PathVariables {
  params: {
    id: string;
  };
}

export async function GET(request: Request, { params }: PathVariables) {
  const id = params.id;

  const todo = await prisma.todo.findFirst({
    where: {
      id,
    },
  });

  if (!todo) {
    return NextResponse.json({ message: "You must provide a valid id" });
  }

  return NextResponse.json(todo);
}

const putSchema = object({
  description: string().optional(),
  complete: boolean().optional(),
});

export async function PUT(request: Request, { params }: PathVariables) {
  const { id } = params;
  const todo = await prisma.todo.findFirst({ where: { id } });

  if (!todo) {
    return NextResponse.json(
      { message: `Todo con id ${id} no existe` },
      { status: 404 }
    );
  }

  try {
    const { complete, description } = await putSchema.validate(
      await request.json()
    );

    const updatedTodo = await prisma.todo.update({
      where: { id },
      data: {
        complete,
        description,
      },
    });

    return NextResponse.json(updatedTodo);
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}
