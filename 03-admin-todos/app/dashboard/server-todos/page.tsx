export const dynamic = "force-dynamic";
export const revalidate = 0;

import { getUserSessionServer } from "@/app/_features/auth/actions/auth-actions";
import { NewTodo, TodosGrid } from "@/app/_features/todos";
import prisma from "@/lib/prisma";
import { type Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Listado de Todos",
  description: "SEO Title",
};

export default async function ServerTodosPage() {
  const user = await getUserSessionServer();
  if (!user) redirect("/api/auth/signin");
  const todos = await prisma.todo.findMany({
    where: { userId: user.id },
    orderBy: { description: "asc" },
  });
  return (
    <div>
      <div className="text-3xl mb-10">Server Actions</div>
      <div className="w-full px-3 mx-5 mb-5">
        <NewTodo />
      </div>
      <TodosGrid todos={todos} />
    </div>
  );
}
